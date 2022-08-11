const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/sado2.jpeg') {
    myImage.setAttribute('src','images/sado2.jpeg');
  } else {
    myImage.setAttribute('src','images/sado2.jpeg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('Please enter your name.');
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  
  
  myButton.onclick = () => {
    setUserName();
  }
  