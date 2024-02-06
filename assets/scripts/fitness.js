// Import Firebase SDK
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js';


const firebaseConfig = {
    apiKey: "AIzaSyCrtLPit-X3-4yLBhTrUvJ3dkdwnZCRafI",
    authDomain: "be-better-workouts.firebaseapp.com",
    projectId: "be-better-workouts",
    storageBucket: "be-better-workouts.appspot.com",
    messagingSenderId: "440633074186",
    appId: "1:440633074186:web:a3a5c354d45d35e1f075f3",
    measurementId: "G-CTVBE3V19S"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  //add function to fetch workout suggestions and show them
  function fetchWorkoutSuggestions() {
    const workoutList = document.getElementById('workoutList');

    workoutList.innerHTML = '';

    db.collection('workouts').get().then((querySnapshot) => {
        querySnapshot.forEach((doc)=> {
            const workout = doc.data().name;
            const listItem = document.createElement('li');
            listItem.textContent = workout;
            workoutList.appendChild(listItem);
        });
    });
  }

  document.addEventListener('DOMContentLoaded',fetchWorkoutSuggestions);

