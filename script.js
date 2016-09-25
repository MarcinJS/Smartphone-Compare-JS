function Phone(model, price, color) {
  this.model = model;
  this.price = price;
  this.color = color;
}

Phone.prototype.printInfo = function () {
  console.log("Phone model is " + this.model + ", the color is " + this.color + ", and the price is " + this.price + ".");
};

var samsung = new Phone("Samsung Galaxy S6", "2599 pln", "black");
var iphone = new Phone("iPhone 6s", "3499 pln", "rose gold");
var oneplus = new Phone("OnePlus One", "1299 pln", "silver");

samsung.printInfo();
iphone.printInfo();
oneplus.printInfo();
