import privacyPolicyBodyHtml from "./privacyPolicyBody.html?raw";

/**
 * Single source of copy for the public site. Replace with API/CMS data later;
 * `websiteContentService` is the integration point.
 */
export const siteContent = {
  privacyPolicy: {
    bodyHtml: privacyPolicyBodyHtml,
  },

  nav: {
    logo: "TATTOO STUDIO",
    links: [
      { path: "/", label: "HOME" },
      { path: "/about", label: "ABOUT" },
      { path: "/gallery", label: "GALLERY" },
      { path: "/contact", label: "CONTACT" },
      { path: "/faq", label: "FAQ" },
    ],
    bookAppointment: "Book Appointment",
  },

  footer: {
    brandInitial: "T",
    brandName: "Tattoo Studio",
    tagline:
      "Creating unique, dark, and edgy artwork that tells your story. Specializing in gothic aesthetics with a cute twist.",
    quickLinksTitle: "Quick Links",
    quickLinks: [
      { path: "/", label: "Home" },
      { path: "/about", label: "About Me" },
      { path: "/gallery", label: "Gallery" },
      { path: "/contact", label: "Contact" },
    ],
    servicesTitle: "Services",
    services: [
      "Custom Tattoos",
      "Flash Art",
      "Cover-ups",
      "Consultations",
    ],
    copyright: "© 2024 Tattoo Studio. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsAndConditions: "Terms & Conditions",
  },

  home: {
    hero: {
      imageAlt: "Taylor Jae Tattoo",
      title: "Taylor Jae Tattoo",
      subtitle:
        "Where your tattoo vision becomes reality. Gothic, dark, and adorable artwork brought to life on your skin.",
      primaryCta: "Book Your Session",
      secondaryCta: "View Gallery",
    },
    process: {
      title: "My Process",
      steps: [
        {
          number: "1",
          title: "Vision",
          body: "We start with your idea, your story, your vision. Every tattoo begins with understanding what you want to express.",
        },
        {
          number: "2",
          title: "Consultation",
          body: "We discuss placement, size, style, and bring your vision to life through sketches and planning.",
        },
        {
          number: "3",
          title: "Creation",
          body: "With precision and artistry, I bring your vision to life, creating a piece that's uniquely yours.",
        },
      ],
    },
    featuredWork: {
      title: "Featured Work",
      subtitle:
        "A glimpse into the dark artistry and gothic elegance that defines my work",
      items: [
        { image: "/assets/gallery/image50.jpeg", label: "Gothic Artwork" },
        { image: "/assets/gallery/image51.jpeg", label: "Dark Elegance" },
        { image: "/assets/gallery/image46.jpeg", label: "Victorian Style" },
      ],
      cta: "View Full Gallery",
      ctaSubtext:
        "Discover more of my dark artistry and gothic masterpieces",
    },
    mobileCta: {
      title: "Ready to Get Started?",
      body: "Let's discuss your tattoo vision and create something amazing together.",
      button: "Book Your Session",
    },
  },

  servicesSection: {
    title: "My Services",
    subtitle:
      "From dark and gothic to cute and cartoony, every piece is crafted with artistic vision and attention to detail",
    services: [
      {
        title: "Custom Tattoo Designs",
        description:
          "Unique artwork created specifically for you, blending your ideas with my signature dark and cute aesthetic.",
      },
      {
        title: "Flash Art Collection",
        description:
          "Pre-designed pieces in my signature style, ready to bring to life on your skin with precision and care.",
      },
      {
        title: "Cover-up Transformations",
        description:
          "Transform old tattoos into beautiful new pieces that you'll love, using advanced techniques and artistic vision.",
      },
      {
        title: "Consultation & Design",
        description:
          "Personal consultation to discuss your vision, with custom sketches and design development for your perfect piece.",
      },
    ],
    portfolioTeaser: "Ready to see more? Explore my portfolio of work",
    viewGallery: "View Gallery",
  },

  requestQuoteSection: {
    title: "Request a Quote",
    intro:
      "Ready to bring your vision to life? Let's discuss your tattoo ideas and create something extraordinary together. Every great piece begins with a conversation.",
    quote:
      '"The best tattoos are born from collaboration between artist and client. Let\'s explore your ideas and create something uniquely yours."',
  },

  testimonials: {
    title: "What Clients Say",
    subtitle: "Real ink, real stories",
    items: [
      {
        name: "Emma Blackwood",
        title: "Gothic Rose Enthusiast",
        text: "The artist's attention to detail is incredible! My gothic rose tattoo is exactly what I envisioned - dark, elegant, and perfectly executed.",
      },
      {
        name: "Marcus Nightshade",
        title: "Dark Art Collector",
        text: "I've been getting tattoos for years, but this studio is something special. The artistic vision and attention to detail are unmatched.",
      },
      {
        name: "Luna Moon",
        title: "Cute Demon Lover",
        text: "My adorable demon tattoo is perfect! It's edgy but cute, exactly the style I was looking for. The artist really understood my vision.",
      },
      {
        name: "Raven Storm",
        title: "Cover-up Success Story",
        text: "Transformed my old tattoo into a beautiful new piece that I absolutely love. The artist's skill with cover-ups is remarkable.",
      },
      {
        name: "Shadow Phoenix",
        title: "Custom Design Client",
        text: "From the initial consultation to the final result, every step was perfect. My custom design tells my story beautifully.",
      },
      {
        name: "Violet Thorn",
        title: "Gothic Style Admirer",
        text: "The dark aesthetic and attention to detail make every visit feel special. My tattoos are works of art I'll treasure forever.",
      },
    ],
  },

  finalCta: {
    title: "Ready to Get Inked?",
    subtitle: "Let's make your vision permanent",
    primaryCta: "Book Your Session",
    secondaryCta: "View Portfolio",
  },

  about: {
    storyTitle: "My Story",
    storyParagraphs: [
      "I've always been drawn to the darker side of art—the mysterious, the edgy, the things that make people look twice. But I also have a soft spot for the cute and adorable, especially when it has a dark twist.",
      "My journey as a tattoo artist began with a passion for creating unique pieces that blend gothic aesthetics with elements that make people smile. I love working with clients to bring their vision to life, whether it's a dark rose with intricate shading or an adorable demon character.",
    ],
    portraitAlt: "Taylor Jae - Tattoo Artist",
    whyTitle: "Why Choose Me?",
    whyIntro:
      "I'm not just a tattoo artist—I'm a collaborator, a creative partner, and someone who genuinely cares about your experience.",
    pillars: [
      {
        emoji: "🎨",
        title: "Unique Style",
        body: "My dark, edgy, and cute aesthetic is unlike anything else you'll find.",
      },
      {
        emoji: "🤝",
        title: "Collaborative",
        body: "I work with you to create exactly what you envision, not just what I want to do.",
      },
      {
        emoji: "✨",
        title: "Quality Focus",
        body: "Every piece is created with attention to detail and a commitment to excellence.",
      },
      {
        emoji: "💖",
        title: "Client Care",
        body: "Your comfort, safety, and satisfaction are my top priorities throughout the process.",
      },
    ],
    ctaTitle: "Ready to Work Together?",
    getInTouch: "Get In Touch",
    viewGallery: "View Gallery",
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle:
      "Ready to start your tattoo journey? Let's discuss your ideas and create something beautiful together.",
    connectTitle: "Let's Connect",
    blocks: [
      {
        icon: "📍",
        title: "Location",
        body: "I rent a booth at a local tattoo shop. The exact location will be provided when you book your appointment.",
      },
      {
        icon: "🕐",
        title: "Hours",
        body: "By appointment only. I'm flexible with scheduling and can work around your availability.",
      },
      {
        icon: "📱",
        title: "Follow My Work",
        body: "Check out my latest artwork and behind-the-scenes content.",
      },
      {
        icon: "💬",
        title: "What to Expect",
        body: "We'll start with a consultation to discuss your ideas, placement, and style preferences. I'll create a custom design just for you.",
      },
    ],
    formColumnTitle: "Send Me a Message",
  },

  faq: {
    heroTitle: "Frequently Asked Questions",
    introBefore: "Here you'll find answers to our most frequently asked questions. If you still need help, ",
    contactLinkText: "contact us",
    introAfter: " — we're happy to help.",
    questions: [
      {
        question: "What is your tattoo style?",
        answer:
          "I specialize in gothic, dark, and adorable artwork. My style combines Victorian elegance with modern edge, creating unique pieces that are both beautiful and meaningful.",
      },
      {
        question: "How do I book a consultation?",
        answer:
          "You can book a consultation through our contact form or by calling the studio directly. We'll discuss your vision, placement, and design ideas to create the perfect piece for you.",
      },
      {
        question: "What should I bring to my appointment?",
        answer:
          "Please bring a valid ID, any reference images you have, and wear comfortable clothing that allows easy access to the tattoo area. We'll provide everything else you need.",
      },
      {
        question: "How long does a tattoo session take?",
        answer:
          "Session length varies depending on the size and complexity of your design. Small pieces might take 1-2 hours, while larger pieces can take multiple sessions. We'll give you a time estimate during consultation.",
      },
      {
        question: "Do you do cover-up tattoos?",
        answer:
          "Yes! I specialize in transforming old tattoos into beautiful new pieces. During consultation, we'll discuss your options and create a design that works with your existing ink.",
      },
      {
        question: "What are your rates?",
        answer:
          "Pricing varies based on size, complexity, and session time. I offer competitive rates and will provide a detailed quote during your consultation. No two pieces are exactly alike, so pricing is customized to your specific design.",
      },
    ],
  },

  gallery: {
    heroTitle: "Art Gallery",
    heroSubtitle:
      "Explore my dark, edgy, and cute artwork. From gothic tattoos to adorable demons.",
    categories: [
      { id: "all", name: "All Artwork" },
      { id: "tattoos", name: "Tattoos" },
      { id: "drawings", name: "Drawings" },
      { id: "flash", name: "Flash Art" },
      { id: "custom", name: "Custom Designs" },
    ],
    items: [
      {
        id: 1,
        title: "Dark Rose",
        category: "tattoos",
        image: "/assets/gallery/image0.jpeg",
        description: "Gothic rose design with dark shading",
      },
      {
        id: 2,
        title: "Cute Demon",
        category: "drawings",
        image: "/assets/gallery/image1.jpeg",
        description: "Adorable demon character with edgy style",
      },
      {
        id: 3,
        title: "Moon & Stars",
        category: "flash",
        image: "/assets/gallery/image2.jpeg",
        description: "Celestial flash art design",
      },
      {
        id: 4,
        title: "Skull & Flowers",
        category: "custom",
        image: "/assets/gallery/image3.jpeg",
        description: "Custom skull design with floral elements",
      },
      {
        id: 5,
        title: "Gothic Cross",
        category: "tattoos",
        image: "/assets/gallery/image4.jpeg",
        description: "Dark gothic cross with intricate details",
      },
      {
        id: 6,
        title: "Cute Witch",
        category: "drawings",
        image: "/assets/gallery/image5.jpeg",
        description: "Adorable witch character with dark aesthetic",
      },
    ],
    ctaTitle: "Love What You See?",
    ctaBody:
      "Ready to bring your vision to life? Let's create something unique together.",
    bookAppointment: "Book Appointment",
    contactMe: "Contact Me",
  },

  notFound: {
    code: "404",
    message: "Oops! The page you're looking for doesn't exist.",
    goHome: "Go Home",
  },

  forms: {
    contact: {
      labels: {
        name: "Name *",
        email: "Email *",
        phone: "Phone",
        preferredDate: "Preferred Date",
        tattooType: "Tattoo Type *",
        bodyLocation: "Body Location",
        size: "Size",
        budget: "Budget Range",
        description: "Tattoo Description *",
        message: "Additional Message",
      },
      placeholders: {
        name: "Your full name",
        email: "your.email@example.com",
        phone: "(555) 123-4567",
        description:
          "Describe your tattoo idea, style preferences, colors, and any specific elements you'd like included...",
        message: "Any other details, questions, or special requests...",
      },
      selectPlaceholder: {
        tattooType: "Select tattoo type",
        bodyLocation: "Select location",
        size: "Select size",
        budget: "Select budget range",
      },
      tattooTypeOptions: [
        { value: "custom", label: "Custom Design" },
        { value: "flash", label: "Flash Art" },
        { value: "coverup", label: "Cover-up" },
        { value: "touchup", label: "Touch-up" },
      ],
      bodyLocationOptions: [
        { value: "arm", label: "Arm" },
        { value: "leg", label: "Leg" },
        { value: "back", label: "Back" },
        { value: "chest", label: "Chest" },
        { value: "shoulder", label: "Shoulder" },
        { value: "ankle", label: "Ankle" },
        { value: "wrist", label: "Wrist" },
        { value: "other", label: "Other" },
      ],
      sizeOptions: [
        { value: "small", label: "Small (1-3 inches)" },
        { value: "medium", label: "Medium (3-6 inches)" },
        { value: "large", label: "Large (6+ inches)" },
        { value: "sleeve", label: "Sleeve" },
        { value: "full-back", label: "Full Back" },
      ],
      budgetOptions: [
        { value: "100-300", label: "$100 - $300" },
        { value: "300-500", label: "$300 - $500" },
        { value: "500-800", label: "$500 - $800" },
        { value: "800-1200", label: "$800 - $1,200" },
        { value: "1200+", label: "$1,200+" },
      ],
      submit: "Send Message",
      success:
        "Thank you for your message! I'll get back to you within 24-48 hours to discuss your tattoo idea.",
      footerNote:
        "* Required fields. I'll respond within 24-48 hours to discuss your tattoo idea and schedule a consultation.",
    },
    quote: {
      title: "Request Your Quote",
      subtitle: "Let's discuss your tattoo vision",
      success: "Your quote request has been sent! I'll get back to you soon.",
      fields: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phone: "Phone Number",
        tattooType: "Tattoo Type",
        placement: "Placement",
        size: "Size",
        style: "Preferred Style",
        message: "Tell me about your vision",
      },
      placeholders: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phone: "Phone Number",
        message:
          "Describe your tattoo idea, any specific elements you want, colors, or inspiration...",
      },
      chooseOne: "Choose one...",
      terms: "I agree to the terms and conditions",
      submit: "Send Quote Request",
      tattooTypeOptions: [
        { value: "custom", label: "Custom Design" },
        { value: "flash", label: "Flash Art" },
        { value: "coverup", label: "Cover-up" },
        { value: "touchup", label: "Touch-up" },
        { value: "other", label: "Other" },
      ],
      placementOptions: [
        { value: "arm", label: "Arm" },
        { value: "leg", label: "Leg" },
        { value: "back", label: "Back" },
        { value: "chest", label: "Chest" },
        { value: "shoulder", label: "Shoulder" },
        { value: "ankle", label: "Ankle" },
        { value: "wrist", label: "Wrist" },
        { value: "other", label: "Other" },
      ],
      sizeOptions: [
        { value: "small", label: "Small (1-3 inches)" },
        { value: "medium", label: "Medium (3-6 inches)" },
        { value: "large", label: "Large (6+ inches)" },
        { value: "sleeve", label: "Sleeve" },
        { value: "backpiece", label: "Back Piece" },
      ],
      styleOptions: [
        { value: "gothic", label: "Gothic" },
        { value: "dark-cute", label: "Dark & Cute" },
        { value: "victorian", label: "Victorian" },
        { value: "traditional", label: "Traditional" },
        { value: "realistic", label: "Realistic" },
        { value: "other", label: "Other" },
      ],
    },
  },
};
