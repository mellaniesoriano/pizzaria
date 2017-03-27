//make random specials

var pizzaName = ['Four Loop', 'Conditional Love', 'The DOM','Conjunction Function'];

var price = [44.44, 22.14, 16.99, 17.02];

var description = ['Spin your wheel with this quattro cheese mix doused in garlic and truffle oil. Loop there it is!', 'This island favorite doesn\'t give you a chance to say no. Korean bulgogi meat, kim chee, mozzarella cheese and onions always returns true! Boo~Ya!', 'This dynamic blend of Duck, Olives and Mango will change your original thought of what a pizza should be. The only thing constant is change for this bad boy!', 'Create your own pie by passing in handpicked fresh ingredients. Invoke your appetite and creativity! Mamma Mia return back to glory!'];


function getRandomPizza(min, max){
  var min = Math.ceil(min);//returns smallest value
  var max = Math.floor(max);//returns highest value
  return Math.floor(Math.random() * (max - min)) + min;//returns random number
}

var ran = getRandomPizza(0,4) //generates random number from array
//console.log(ran);

document.getElementById("specialName").innerHTML = pizzaName[ran];
document.getElementById("specialPrice").innerHTML = price[ran];
document.getElementById("specialDesc").innerHTML = description[ran];

//add to menu

var forLoop = {
  price: 44.44,
  description: 'Spin your wheel with this quattro cheese mix doused in garlic and truffle oil. Loop there it is!'
};

var conditionalLove = {
  price: 22.14,
  description: 'This island favorite doesn\'t give you a chance to say no. Korean bulgogi meat, kim chee, mozzarella cheese and onions always returns true! Boo~Ya!'
};

var theDom = {
  price: 16.99,
  description: 'This dynamic blend of Duck, Olives and Mango will change your original thought of what a pizza should be. The only thing constant is change for this bad boy!'
};

var conjunctionFunction = {
  price: 17.02,
  description: 'Create your own pie by passing in handpicked fresh ingredients. Invoke your appetite and creativity! Mamma Mia return back to glory!'
};

// use below variable to append to div
var addPizza = document.getElementsByClassName("content")[2];

//four loop pizza
var loopName = document.createElement("div");
loopName.id = "nameOfPizza1";
loopName.innerHTML = "Four Loop";
addPizza.appendChild(loopName);

var loopDesc = document.createElement("div");
loopDesc.id = "descriptionOfPizza1";
loopDesc.innerHTML = forLoop.description;
addPizza.appendChild(loopDesc);

var loopPrice = document.createElement("div");
loopPrice.id = "priceOfPizza1";
loopPrice.innerHTML = forLoop.price;
addPizza.appendChild(loopPrice);

//conditional love pizza
var conditionalName = document.createElement("div");
conditionalName.id = "nameOfPizza2";
conditionalName.innerHTML = "Conditional Love";
addPizza.appendChild(conditionalName);

var conditionalDesc = document.createElement("div");
conditionalDesc.id = "descriptionOfPizza2";
conditionalDesc.innerHTML = conditionalLove.description;
addPizza.appendChild(conditionalDesc);

var conditionalPrice = document.createElement("div");
conditionalPrice.id = "priceOfPizza2";
conditionalPrice.innerHTML = conditionalLove.price;
addPizza.appendChild(conditionalPrice);

//The DOM pizza
var domName = document.createElement("div");
domName.id = "nameOfPizza3";
domName.innerHTML = "The DOM";
addPizza.appendChild(domName);

var domDesc = document.createElement("div");
domDesc.class = "descriptionOfPizza3";
domDesc.innerHTML = theDom.description;
addPizza.appendChild(domDesc);

var domPrice = document.createElement("div");
domPrice.id = "priceOfPizza3";
domPrice.innerHTML = theDom.price;
addPizza.appendChild(domPrice);

//conjunction function pizza
var conjName = document.createElement("div");
conjName.id = "nameOfPizza4";
conjName.innerHTML = "Conjunction Function";
addPizza.appendChild(conjName);

var conjPrice = document.createElement("div");
conjPrice.id = "priceOfPizza4";
conjPrice.innerHTML = conjunctionFunction.price;
addPizza.appendChild(conjPrice);

var conjDesc = document.createElement("div");
conjDesc.id = "descriptionOfPizza4";
conjDesc.innerHTML = conjunctionFunction.description;
addPizza.appendChild(conjDesc);

var conjPrice = document.createElement("div");
conjPrice.id = "priceOfPizza4";
conjPrice.innerHTML = conjunctionFunction.price;
addPizza.appendChild(conjPrice);