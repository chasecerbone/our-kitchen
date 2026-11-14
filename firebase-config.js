// ===== Firebase connection =====
// Leave FIREBASE_CONFIG as null to run the app in "this device only" mode.
// To share between phones, replace null with the config object Firebase gives you
// (Project settings -> Your apps -> Web app -> SDK setup and configuration -> Config).
// It looks like this:
//
// window.FIREBASE_CONFIG = {
//   apiKey: "AIza...",
//   authDomain: "our-kitchen-xxxx.firebaseapp.com",
//   projectId: "our-kitchen-xxxx",
//   storageBucket: "our-kitchen-xxxx.appspot.com",
//   messagingSenderId: "1234567890",
//   appId: "1:1234567890:web:abc123"
// };
//
// (These values are safe to have in a public GitHub repo. Your data is protected
//  by the sign-in and the security rules in firestore.rules, not by hiding this.)

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCITYmFlpuKw6Gfwxmt-r-n5VwZaka829o",
  authDomain: "our-kitchen-edfdb.firebaseapp.com",
  projectId: "our-kitchen-edfdb",
  storageBucket: "our-kitchen-edfdb.firebasestorage.app",
  messagingSenderId: "794684837365",
  appId: "1:794684837365:web:3d4ba45b6efb648f8a64bc"
};

// Name of your shared kitchen. Both phones use the same one. You can leave it.
window.HOUSEHOLD_ID = "home";
