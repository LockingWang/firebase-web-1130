import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-Tm4DuPpcQg7SPN3RNrH5LtjVa4CSes4",
  authDomain: "myfirstfirebaseproject-e0c05.firebaseapp.com",
  projectId: "myfirstfirebaseproject-e0c05",
  storageBucket: "myfirstfirebaseproject-e0c05.appspot.com",
  messagingSenderId: "110991112084",
  appId: "1:110991112084:web:abccd8f100c8844ea60181",
  measurementId: "G-JY52BZ8QE8"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseapp);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
