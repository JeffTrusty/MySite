let myImage = document.querySelector('img');

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === '../images/DilbertReorg.jpg') {
    myImage.setAttribute('src', '../images/DilbertReorg.png');
  } else {
    myImage.setAttribute('src', '../images/DilbertReorg.jpg');
  }
}
// let myButton = document.querySelector('button');
// let myTitle = document.querySelector('title');

// function setTitle() {
//   let newTitle = prompt('Please enter the new title name.');
//   localStorage.setItem('title',newTitle);
//   myTitle.textContent = newTitle;
// }

// if (!localStorage.getItem('title')) {
//   setTitle();
// } else {
//   let storedName = localStorage.getItem('title');
//   myTitle.textContent = storedName;
// }
// myButton.onclick = function () {
//   setTitle();
// }
