import { getAnalytics } from "firebase/analytics";
import { initializeApp, getApp } from "firebase/app";
const connectFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDQLQYBI8C7Ya13pv8ibtrKqCt-YFkKuv8",
    authDomain: "githubpage-fa457.firebaseapp.com",
    databaseURL: "https://githubpage-fa457.firebaseio.com",
    projectId: "githubpage-fa457",
    storageBucket: "githubpage-fa457.appspot.com",
    messagingSenderId: "752515359836",
    appId: "1:752515359836:web:943a99c18b3b8f87823299",
    measurementId: "G-1D5QK8B6FT"
  };

  // Initialize Firebase
  try {
    return getApp();

  } catch (e) {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    return app
  }

}

export default connectFirebase