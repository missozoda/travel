var elCheckWeather = document.querySelector("#weather");
var elCheckMoney = document.querySelector("#money");
var elCheckWork = document.querySelector("#work");
var elCheckHealth = document.querySelector("#health");
var elCheckMood = document.querySelector("#mood");

var elBtn = document.querySelector(".button");
var elOutTravel = document.querySelector(".travel");
var message = "";

elBtn.addEventListener("click", function(e){
  e.preventDefault();

  var weather = elCheckWeather.checked;
  var money = elCheckMoney.checked;
  var work = elCheckWork.checked;
  var health = elCheckHealth.checked;
  var mood = elCheckMood.checked;

  if((!weather && money && work)){
    message = "Ob-havo yomonligi tufayli reys qoldirildi. Afsus sayohatga bora olmaymiz:("
  }else if (weather && !money){
    message = "Pulimiz yetarli emas. Oylik olgandan so`ng sayohatga boramiz:("
  }else if (weather && money && !work && !health){
    message = "Afsus sayohatga bora olmaymiz:("
  } else if (!weather && !money && !work && !health && !mood){
    message = "Afsus sayohatga bora olmaymiz:("
  }else{
    message = "Uraaa! Sayohatga boramiz!"
  }

  elOutTravel.textContent = message;
})