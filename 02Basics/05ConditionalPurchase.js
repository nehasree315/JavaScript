// idi and case &&

var isLoggedIn = true;

var isEmailVerified = true;

var cardInfo = true;

if (isLoggedIn && isEmailVerified && cardInfo) {
  console.log("You are allowed to purchase");
} else {
  console.log("You are NOT allowed to do that");
}

// && unnapudu all should be true
// paina three True unte You are allowed to purchase
// Okati false ayina You are NOT allowed to do that

if (isLoggedIn) {
  console.log("Logged In Success");
  if (isEmailVerified) {
    console.log("Email is Verified");
  }
  if (cardInfo) {
    console.log("You can make a purchase");
  }
}

// paina 3 true unte ney kinda 3 execute avutayi lekapothe true unna varake agipotadi
