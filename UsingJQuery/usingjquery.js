$(document).ready(function () {
  // Adding Buttons / Step 1
  $("<button>Something Nice</button>")
    .attr("id", "firstButton")
    .appendTo("body");

  $("#firstButton").click(function () {
    alert(
      "You are a beautiful person or computer! YOU CAN DO ANYTHING you set your mind or your motherboard too!"
    );
  });

  $("#btnSubmit").click(function () {
    let btnValue = $(textArea).val();
    alert(btnValue);
  });

  //   Step 3:
  $("<div id='firstDiv'></div>")
    .css({ height: "100px", width: "100px" })
    .appendTo("body");

  $("#thisDiv").mouseover(function () {
    $(this).css("background-color", "dodgerblue");
  });

  $("#thisDiv").mouseleave(function () {
    $(this).css("background-color", "white");
  });

  //   Step 4:
  $("<p id='para'>Want to see something cool? Click Me!</p>").appendTo("body");

  $("#para").click(function () {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);

    $(this).css("color", "#" + randomColor);
  });

//   Step 5
  $("<button>Mi Nombre</button>").attr("id", "middleBtn").appendTo("body");

  $("<div id='lastDiv'></div>")
  .appendTo("body");

  $("#middleBtn").click(function () {
      $("<span id='nameSpan'>Jefe</span>")
      .appendTo("#lastDiv")
  })

//   Step 6
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
$("#lastBtn").click(function () {
    let randoFriends = friends[Math.floor(Math.random() * friends.length)]
    $("<li id='friendsList'>" +randoFriends + "</li>").appendTo("#ulList")
    // $(randoFriends).appendTo("#friendsList")

    
   

})
});
