import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import {
    getDatabase,
    ref,
    set,
    onValue
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBPLVbZt0e-_urBBGXU6Nr_HknUMs8w6R0",
    authDomain: "agenda-de-encontros.firebaseapp.com",
    databaseURL: "https://agenda-de-encontros-default-rtdb.firebaseio.com",
    projectId: "agenda-de-encontros",
    storageBucket: "agenda-de-encontros.firebasestorage.app",
    messagingSenderId: "97670253088",
    appId: "1:97670253088:web:6702dff70b0c1d57b68a45"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database, ref, set, onValue };
