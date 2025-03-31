import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { products } from "./products.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhmZxrsE6zq7Jm6i7wGOpQ42fHDc07vGs",
  authDomain: "fir-project-95fdf.firebaseapp.com",
  projectId: "fir-project-95fdf",
  storageBucket: "fir-project-95fdf.firebasestorage.app",
  messagingSenderId: "393802375221",
  appId: "1:393802375221:web:4b7e58a4c7612bee9d117c",
  measurementId: "G-9E5J6CJ8GC",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addProducts() {
  for (const product of products) {
    await addDoc(collection(db, "products"), product);
    console.log(`Dodano: ${product.name}`);
  }
}

addProducts();
