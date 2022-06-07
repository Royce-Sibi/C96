var firebaseConfig = {
    apiKey: "AIzaSyAPQAVFpP3lAoGv7GPCnZO6K6t6RXQefRQ",
    authDomain: "project-94-f19f5.firebaseapp.com",
    projectId: "project-94-f19f5",
    storageBucket: "project-94-f19f5.appspot.com",
    messagingSenderId: "79833894860",
    appId: "1:79833894860:web:48024a4b1b96efd7789769"
};
    firebase.initializeApp(firebaseConfig);

function addUser() 
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
    window.location = "kwitter_room.html";
}
