document.addEventListener("DOMContentLoaded", function () {
  // Step 1
  let niceBtn = document.createElement("button");
  document.body.appendChild(niceBtn);
  niceBtn.append("Something Nice");

  niceBtn.addEventListener("click", function () {
    alert(
      "You are a beautiful person or computer! YOU CAN DO ANYTHING you set your mind or your motherboard too!"
    );
  });

  let submitBtn = document.getElementById("btnSubmit");

  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let textBox = document.getElementById("textArea").value;
    alert(textBox);
  });

  let firstDiv = document.getElementById(thisDiv);
  firstDiv.style.height = "100px";
  firstDiv.style.width = "100px";

  firstDiv.addEventListener("mouseover", function () {
    firstDiv.style.backgroundColor = "dodgerblue";
  });

  firstDiv.addEventListener("mouseleave", function () {
    firstDiv.style.backgroundColor = "white";
  });

  let para = document.createElement("p");
  para.innerText = "Want to see something cool? Click Me!";
  document.body.appendChild(para);

  para.addEventListener("click", function () {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);

    para.style.color = "#" + randomColor;
  });

  let newBtn = document.createElement("button");
  newBtn.innerText = "Mi Nombre";
  document.body.appendChild(newBtn);
  let newDiv = document.createElement("div");
  document.body.appendChild(newDiv);

  newBtn.addEventListener("click", function () {
    let newSpan = document.createElement("span");
    newSpan.innerText = "Jefe";
    newDiv.appendChild(newSpan);
  });

  let friends = [
    "Ari",
    "Jonathan",
    "Chloe",
    "Mercedes",
    "Kenny",
    "Trent",
    "Mike",
    "Alex",
    "Ray",
    "Cam",
  ];
  lastBtn.addEventListener("click", function () {
    let ulList = document.getElementById("ulList");
    let newList = document.createElement("li");
    newList.innerText = friends[Math.floor(Math.random() * friends.length)];
    ulList.appendChild(newList);
  });
});
