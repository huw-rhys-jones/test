import "dotenv/config";

export default ({ config }) => ({
  ...config,
  name: "Test",
  slug: "test",
  scheme: "com.caistec.test", // 👈 ADD THIS
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  userInterfaceStyle: "light",
  newArchEnabled: true,
  splash: {
    image: "./assets/images/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: false,
    bundleIdentifier: "com.caistec.test",
    buildNumber: "15",
  },
  android: {
    package: "com.caistec.test",
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    favicon: "./assets/images/favicon.png",
  },
  extra: {
    eas: {
      projectId: "792adbb3-9075-4a55-aecf-7fb9580a51d5",
    },
    // FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    // FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    // FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    // FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    // FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    // FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    // FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    // GOOGLE_WEB_CLIENT_ID: process.env.GOOGLE_WEB_CLIENT_ID,
    // GOOGLE_ANDROID_CLIENT_ID: process.env.GOOGLE_ANDROID_CLIENT_ID,
    // GOOGLE_IOS_CLIENT_ID: process.env.GOOGLE_IOS_CLIENT_ID
  },

  owner: "dubway4201",
});
