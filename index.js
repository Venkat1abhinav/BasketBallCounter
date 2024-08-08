homeCount = 0;
guestCount = 0;
homeEle = document.getElementById("home_score");
guestEle = document.getElementById("guest_score");
leadEle = document.getElementById("leading-team");
mainEle = document.getElementById("main-section");

//increments home values
function incrementOfHome(count) {

  homeCount += count;
  console.log(homeCount);
  homeEle.textContent = homeCount;
  hilighter();
  
}

// increments guest values
function incrementOfGuest(count) {

  guestCount += count;
  console.log(guestCount);
  guestEle.textContent = guestCount;
  hilighter();

}

//Hilights the value

function hilighter() {

  if (homeCount > guestCount) {
    homeEle.style.color = "#DC143C";
    guestEle.style.color = "#c70039";
    leadEle.textContent = "Home is leading by "+(homeCount - guestCount) + " points";

  } else if (guestCount > homeCount){
    guestEle.style.color = "#DC143C";
    homeEle.style.color = "#c70039";
    leadEle.textContent = "Guest is leading by "+(guestCount - homeCount)+" points";

  } else {
    homeEle.style.color = "#c70039"
    guestEle.style.color = "#c70039"
    leadEle.textContent = "No one is leading"
  }

}

function resetGame(){
  location.reload(true);
}
