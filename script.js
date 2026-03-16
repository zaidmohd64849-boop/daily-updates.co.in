import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyDBSS9bPh6oXLKIzUHrhqjXzGXWz-2ecTU",
authDomain: "daily-updates-f1147.firebaseapp.com",
projectId: "daily-updates-f1147",
storageBucket: "daily-updates-f1147.firebasestorage.app",
messagingSenderId: "831611220658",
appId: "1:831611220658:web:9d9356dbd1c142d93ecfab"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const jobsList = document.getElementById("jobsList");
const admitList = document.getElementById("admitList");
const resultList = document.getElementById("resultList");
const moreinformationList = document.getElementById("moreinformationList");

async function fetchPosts(){

const querySnapshot = await getDocs(collection(db,"posts"));

querySnapshot.forEach((doc)=>{

const post = doc.data();
const id = doc.id;

let li = document.createElement("li");

li.innerHTML = `<a href="post.html?id=${id}">${post.title}</a>`;

if(post.category === "jobs"){
jobsList.appendChild(li);
}

if(post.category === "admit"){
admitList.appendChild(li);
}

if(post.category === "result"){
resultList.appendChild(li);
}

if(post.category === "more information"){
moreinformationList.appendChild(li);
}

});

}

fetchPosts();

window.searchPost = function(){

let input = document.getElementById("searchInput").value.toLowerCase();
let lists = document.querySelectorAll("ul li");

lists.forEach((item)=>{
let text = item.innerText.toLowerCase();

if(text.includes(input)){
item.style.display = "list-item";
}else{
item.style.display = "none";
}

});

}