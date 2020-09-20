$("#includedContent").load(`pages/home.html`);

function Menu(object) {
  var MENUbar = document.getElementById("MENU");
  var SHAREbar = document.getElementById("SHARE");
  var IsSelected = document.getElementById(object);
  if (!IsSelected.classList.contains("selected")) {
    MENUbar.classList.toggle("IsNotDisplayed");
    SHAREbar.classList.toggle("IsNotDisplayed");
  }
}

function onoff(object) {
  //var locating the button on wich we click
  var trueobject = document.getElementById(object);
  //var locating the icon related the the button
  var icon = (object += "icon");
  var trueicon = document.getElementById(icon);

  //delete all previous "selected" classes
  var menuButton = document.getElementById("menuButtonFullMenu");
  var menuicon = document.getElementById("menuButtonFullMenuicon");
  var shareButton = document.getElementById("shareButton");
  var shareicon = document.getElementById("shareButtonicon");
  if (
    menuButton.classList !== "menuButton" ||
    shareButton.classList !== "shareButton"
  ) {
    menuButton.classList.remove("selected");
    menuicon.classList.remove("lightup");
    shareButton.classList.remove("selected");
    shareicon.classList.remove("lightup");
  }

  //add new class "selected" to the button
  trueobject.classList.add("selected");
  //add new class "lightup" to the icon
  trueicon.classList.add("lightup");
}

//Hide or show info bubble
function Info() {
  var Bubble = document.getElementById("InfoBubble");
  Bubble.classList.toggle("IsNotDisplayed");
}

//Hide or show menu items
function MenuButtons(object) {
  var SVGchange = "BeforeClick" + object;
  var SVGchange = document.getElementById(SVGchange);
  var SVGchangeAfter = "AfterClick" + object;
  var SVGchangeAfter = document.getElementById(SVGchangeAfter);
  var TrueObject = (object += "Content");
  var TrueObject = document.getElementById(TrueObject);
  TrueObject.classList.toggle("IsNotDisplayed");
  SVGchange.classList.toggle("IsNotDisplayed");
  SVGchangeAfter.classList.toggle("IsNotDisplayed");
}

//Display page info
function DisplayPage(object) {
    $("#includedContent").load(`pages/${object}.html`);
}
