var firebaseConfig = {
    apiKey: "AIzaSyAPQAVFpP3lAoGv7GPCnZO6K6t6RXQefRQ",
    authDomain: "project-94-f19f5.firebaseapp.com",
    projectId: "project-94-f19f5",
    storageBucket: "project-94-f19f5.appspot.com",
    messagingSenderId: "79833894860",
    appId: "1:79833894860:web:48024a4b1b96efd7789769"
};
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+ user_name +"!";

    function addRoom()
    {
        room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"
        });

        localStorage.setItem("room_name", room_name);

        window.location = "kwitter_page.html";
    }

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
 console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
       //End code
       });});}
 getData();
 
 function redirectToRoomName(name)
 {
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html"
 }
