const nodemailer = require("nodemailer");
const axios = require("axios");
const { Buffer } = require("buffer");

const smtpLogin = "8d0e45001@smtp-brevo.com";
const smtpPass =
  "xsmtpsib-9b8a645f4b1b4536b3a9639c806d9a9823d6de2cbdab83db773e51d42d528611-DnU4Xq06G7VsSOKM";
const verifiedSender = "contact@authenticbaseballequipment.com";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: smtpLogin,
    pass: smtpPass,
  },
});

const formatOrderHTML = (items) =>
  items
    .map((item, i) => {
      const options = Object.entries(item.customOptions || {})
        .map(([key, val]) => {
          // Check if the value is a valid hex color code
          const isHexColor =
            typeof val === "string" &&
            /^#([0-9A-Fa-f]{3}){1,2}$/.test(val.trim());

          const colorBubble = isHexColor
            ? `<span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:${val};border:1px solid #ccc;margin-left:8px;vertical-align:middle;"></span>`
            : "";

          return `<div><strong>${key}:</strong> ${val}${colorBubble}</div>`;
        })
        .join("");

      const imageHTML = (item.images || [])
        .map(
          (img) => `
          <div style="margin-bottom: 8px;">
            <div style="font-size: 12px; color: #666; margin-bottom: 4px;">${img.view}</div>
            <img src="${img.src}" alt="${img.view}" style="width: 200px; height: auto; border-radius: 4px; border: 1px solid #ccc;" />
          </div>`
        )
        .join("");

      return `
        <div style="border: 2px solid #100e1c; border-radius: 8px; padding: 16px; margin-bottom: 20px; font-family: 'Libre Franklin', sans-serif; background: #f9f9f9;">
          <h3 style="margin-bottom: 8px;">🔹 Item ${i + 1}: ${
        item.name || "Custom Bat"
      }</h3>
          ${imageHTML}
          <div><strong>Quantity:</strong> ${item.quantity || 1}</div>
          <div><strong>Price:</strong> $${(
            (item.price || 0) * (item.quantity || 1)
          ).toFixed(2)}</div>
          <div style="margin-top: 8px;">${options}</div>
        </div>`;
    })
    .join("");

const formatOrderText = (items) =>
  items
    .map((item, i) => {
      const options = Object.entries(item.customOptions || {})
        .map(([key, val]) => `${key}: ${val}`)
        .join("\n");

      const imageText = (item.images || [])
        .map((img) => `${img.view}: ${img.src}`)
        .join("\n");

      return `🔹 Item ${i + 1}: ${item.name || "Custom Bat"}
Quantity: ${item.quantity || 1}
Price: $${((item.price || 0) * (item.quantity || 1)).toFixed(2)}
${imageText}
${options}`;
    })
    .join("\n\n");

const getImageAttachments = async (items) => {
  const attachments = [];

  for (const [i, item] of items.entries()) {
    for (const [j, img] of (item.images || []).entries()) {
      const url = img.fullRes || img.src;
      if (url?.startsWith("http")) {
        try {
          const response = await axios.get(url, {
            responseType: "arraybuffer",
          });

          attachments.push({
            filename: `Item${i + 1}_${img.view || "view"}.png`,
            content: Buffer.from(response.data),
            contentType: "image/png",
          });
        } catch (err) {
          console.error(`❌ Error fetching image ${url}:`, err.message);
        }
      }
    }
  }

  return attachments;
};

exports.sendOrderEmail = async (items, customerEmail, shipping) => {
  const orderHTML = formatOrderHTML(items);
  const orderText = formatOrderText(items);
  const attachments = await getImageAttachments(items);

  const businessSubject = "New Bat Order Received";
  const customerSubject = "Thanks for Your Order – Authentic Baseball";

  const headerStyle = `
    font-family: 'Libre Franklin', sans-serif;
    color: #ffffff;
    background-color: #100e1c;
    padding: 20px;
    border-bottom: 2px solid #100e1c;
  `;

  const wrapperStyle = `
    font-family: 'Libre Franklin', sans-serif;
    padding: 20px;
    color: #1A1A1A;
    background-color: #ffffff;
  `;

  const footer = `
    <div style="padding: 20px; font-size: 12px; text-align: center; color: #ffffff; background-color: #100e1c;">
      – The Authentic Baseball Team<br />
      <a href="mailto:${verifiedSender}" style="color: #ffffff; text-decoration: underline;">
        ${verifiedSender}
      </a>
    </div>
  `;

  const shippingHTML = shipping
    ? `
    <div style="margin-bottom: 16px;">
      <h3 style="margin-bottom: 4px;">Shipping Information:</h3>
      <div><strong>Name:</strong> ${shipping.name}</div>
      <div><strong>Address:</strong><br />
        ${shipping.address.line1}<br />
        ${shipping.address.line2 ? `${shipping.address.line2}<br />` : ""}
        ${shipping.address.city}, ${shipping.address.state} ${
        shipping.address.postal_code
      }<br />
        ${shipping.address.country}
      </div>
    </div>
  `
    : "";

  const shippingText = shipping
    ? `
Shipping Info:
Name: ${shipping.name}
${shipping.address.line1}
${shipping.address.line2 || ""}
${shipping.address.city}, ${shipping.address.state} ${
        shipping.address.postal_code
      }
${shipping.address.country}
`
    : "";

  await transporter.sendMail({
    from: `"Authentic Baseball" <${verifiedSender}>`,
    to: verifiedSender,
    subject: businessSubject,
    text: `A new order has been placed:\n\n${orderText}\n\nCustomer Email: ${customerEmail}\n\n${shippingText}`,
    html: `
      <div>
        <div style="${headerStyle}">
          <h2>${businessSubject}</h2>
        </div>
        <div style="${wrapperStyle}">
          <p>A new order has been placed:</p>
          ${shippingHTML}
          ${orderHTML}
          <p><strong>Customer Email:</strong> ${customerEmail}</p>
        </div>
        ${footer}
      </div>`,
    attachments,
  });

  if (customerEmail) {
    await transporter.sendMail({
      from: `"Authentic Baseball" <${verifiedSender}>`,
      to: customerEmail,
      subject: customerSubject,
      text: `Thank you for completing your bat order with Authentic Baseball!\n\nWe're now getting started on your custom build and will reach out shortly if we need anything else.\n\nHere’s a copy of your order:\n${orderText}\n\n${shippingText}\n\nIf you have any questions, feel free to reply to this email.\n\n– The Authentic Baseball Team`,
      html: `
        <div>
          <div style="${headerStyle}">
            <h2>${customerSubject}</h2>
          </div>
          <div style="${wrapperStyle}">
            <p>Thank you for completing your bat order with Authentic Baseball!</p>
            <p>We're now getting started on your custom build and will reach out shortly if we need anything else.</p>
            <h3 style="margin-top: 24px;">Here’s a copy of your order:</h3>
            ${orderHTML}
            ${shippingHTML}
            <p>If you have any questions, feel free to reply to this email.</p>
          </div>
          ${footer}
        </div>`,
      attachments,
    });
  }
};
