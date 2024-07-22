const myImage = document.querySelector("img");
const myText = document.querySelector("p");
let header_text = ', welcome to Landscapes of</i><br>The Lord of the Rings'

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Raven's_Craig_Glen.jpg") {
    myImage.setAttribute("src", "images/Glendun.jpg");
    myText.textContent = "Glendun";
  } else {
    myImage.setAttribute("src", "images/Raven's_Craig_Glen.jpg");
    myText.textContent = "Raven's Craig Glen";
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = '<i>' + myName + header_text;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.innerHTML = '<i>' + storedName + header_text;
}

myButton.onclick = () => {
  setUserName();
};
