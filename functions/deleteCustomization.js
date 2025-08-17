const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { getStorage } = require("firebase-admin/storage");
const { getFirestore } = require("firebase-admin/firestore");
const { initializeApp, cert } = require("firebase-admin/app");
const cors = require("cors");

// ✅ Load service account credentials for customization-platform
const serviceAccount = require("./customization-platform-key.json"); // make sure this path is correct

// ✅ Initialize Admin SDK for customization-platform
const customizationApp = initializeApp(
  {
    credential: cert(serviceAccount),
    projectId: "customization-platform",
    storageBucket: "customization-platform.appspot.com", // 🔒 use the correct bucket
  },
  "customizationApp"
);

// ✅ Access correct Firestore + Storage
const db = getFirestore(customizationApp);
const storage = getStorage(customizationApp).bucket();

const corsHandler = cors({
  origin: "https://authentic-baseball.web.app",
  methods: ["POST"],
  allowedHeaders: ["Content-Type"],
  optionsSuccessStatus: 204,
});

exports.deleteCustomization = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }

    const { customizationId, storagePath } = req.body;

    if (!customizationId && !storagePath) {
      return res.status(400).json({
        error: "Missing customizationId or storagePath",
      });
    }

    try {
      // ✅ Delete Firestore doc (if provided)
      if (customizationId) {
        await db.collection("customizations").doc(customizationId).delete();
        console.log(`🗑️ Deleted Firestore doc: ${customizationId}`);
      }

      // ✅ Delete image from Firebase Storage (if provided)
      if (storagePath) {
        await storage.file(storagePath).delete({ ignoreNotFound: true });
        console.log(`🗑️ Deleted image from storage: ${storagePath}`);
      }

      res.status(200).json({ success: true });
    } catch (err) {
      console.error("❌ Failed to delete customization:", err);
      res.status(500).json({ error: "Internal error" });
    }
  });
});
