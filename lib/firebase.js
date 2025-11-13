import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyC_Elx6VQYg9fDtjY-0YD8fA7DlBy5VL98",
  authDomain: "tree-tracker-2025.firebaseapp.com",
  projectId: "tree-tracker-2025",
  storageBucket: "tree-tracker-2025.firebasestorage.app",
  messagingSenderId: "854723711989",
  appId: "1:854723711989:web:50ffbf47e2ee94260a86bc"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
export default app;