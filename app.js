function item_1 () {
  document.querySelector(".person_2").style.display="none"
  document.querySelector(".person_1").style.display="block"
  document.querySelector(".person_3").style.display="none"
  document.querySelector(".person_4").style.display="none"
}

function item_2 () {
  document.querySelector(".person_2").style.display="block"
  document.querySelector(".person_1").style.display="none"
  document.querySelector(".person_3").style.display="none"
  document.querySelector(".person_4").style.display="none"
}

function item_3 () {
  document.querySelector(".person_2").style.display="none"
  document.querySelector(".person_1").style.display="none"
  document.querySelector(".person_3").style.display="block"
  document.querySelector(".person_4").style.display="none"
}

function item_4 () {
  document.querySelector(".person_2").style.display="none"
  document.querySelector(".person_1").style.display="none"
  document.querySelector(".person_3").style.display="none"
  document.querySelector(".person_4").style.display="block"
}

// Person 1
function msjsendone () {
  const girilenMesaj = document.querySelector(".messageOne").value;

  const newP = document.createElement("p");
  newP.innerHTML = girilenMesaj;

  const tikIcon = document.createElement("i");
  tikIcon.classList.add("fas", "fa-check");

  const newDiv = document.createElement("div");
  newDiv.classList.add("my-messageOne");
  newDiv.appendChild(newP);
  newDiv.appendChild(tikIcon);

  const myMessageDiv = document.querySelector(".my-messageOne");

  myMessageDiv.appendChild(newDiv);

  setTimeout(function() {
    const secondTikIcon = document.createElement("i");
    secondTikIcon.classList.add("fas", "fa-check");
    newP.appendChild(secondTikIcon);
    newDiv.classList.add("sent-message");
  }, 2000);
}

document.querySelector('.messageOne').addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    msjsendone();
  }
});


// Person 2 
function msjsendtwo () {
  const girilenMesaj = document.querySelector(".messageTwo").value;

  const newP = document.createElement("p");
  newP.innerHTML = girilenMesaj;

  const tikIcon = document.createElement("i");
  tikIcon.classList.add("fas", "fa-check");

  const newDiv = document.createElement("div");
  newDiv.classList.add("my-messageTwo");
  newDiv.appendChild(newP);
  newDiv.appendChild(tikIcon);

  const myMessageDiv = document.querySelector(".my-messageTwo");


  myMessageDiv.appendChild(newDiv);

  setTimeout(function() {
    const secondTikIcon = document.createElement("i");
    secondTikIcon.classList.add("fas", "fa-check");
    newP.appendChild(secondTikIcon);
    newDiv.classList.add("sent-message");
  }, 2000);
}

document.querySelector('.messageTwo').addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    msjsendtwo();
  }
});

// Person 3
function msjsendthree () {
  const girilenMesaj = document.querySelector(".messageThree").value;

  const newP = document.createElement("p");
  newP.innerHTML = girilenMesaj;

  const tikIcon = document.createElement("i");
  tikIcon.classList.add("fas", "fa-check");

  const newDiv = document.createElement("div");
  newDiv.classList.add("my-messageThree");
  newDiv.appendChild(newP);
  newDiv.appendChild(tikIcon);

  const myMessageDiv = document.querySelector(".my-messageThree");

  myMessageDiv.appendChild(newDiv);

  setTimeout(function() {
    const secondTikIcon = document.createElement("i");
    secondTikIcon.classList.add("fas", "fa-check");
    newP.appendChild(secondTikIcon);
    newDiv.classList.add("sent-message");
  }, 2000);
}

document.querySelector('.messageThree').addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    msjsendthree();
  }
});


// Person 4
function msjsendfour () {
  const girilenMesaj = document.querySelector(".messageFour").value;

  const newP = document.createElement("p");
  newP.innerHTML = girilenMesaj;

  const tikIcon = document.createElement("i");
  tikIcon.classList.add("fas", "fa-check");

  const newDiv = document.createElement("div");
  newDiv.classList.add("my-messageFour");
  newDiv.appendChild(newP);
  newDiv.appendChild(tikIcon);

  const myMessageDiv = document.querySelector(".my-messageFour");

  myMessageDiv.appendChild(newDiv);

  setTimeout(function() {
    const secondTikIcon = document.createElement("i");
    secondTikIcon.classList.add("fas", "fa-check");
    newP.appendChild(secondTikIcon);
    newDiv.classList.add("sent-message");
  }, 2000);
}

document.querySelector('.messageFour').addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    msjsendfour();
  }
});



// Back-Btn
function persononeBack () {
  document.querySelector(".person_1").style.display = "none";
  document.querySelector(".left").style.display = "block";
}

function persontwoBack () {
  document.querySelector(".person_2").style.display = "none";
  document.querySelector(".left").style.display = "block";
}

function personthreeBack () {
  document.querySelector(".person_3").style.display = "none";
  document.querySelector(".left").style.display = "block";
}

function personfourBack () {
  document.querySelector(".person_4").style.display = "none";
  document.querySelector(".left").style.display = "block";
}