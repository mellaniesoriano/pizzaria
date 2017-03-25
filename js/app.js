var pizzaName = ['Four Loop', 'Conditional Love', 'The DOM','Conjunciont Function'];

var price = [44.44, 22.14, 16.99, 17.02];

var description = ['Spin your wheel with this quattro cheese mix doused in garlic and truffle oil. Loop there it is!', 'This island favorite doesn\'t give you a chance to say no. Korean bulgogi meat, kim chee, mozzarella cheese and onions always returns true! Boo~Ya!', 'This dynamic blend of Duck, Olives and Mango will change your original thought of what a pizza should be. The only thing constant is change for this bad boy!', 'Create your own pie by passing in handpicked fresh ingredients. Invoke your appetite and creativity! Mamma Mia return back to glory!'];

var randomSpecial = document.getElementById("special");
randomSpecial.innerHTML = pizzaName[Math.floor(Math.random() * pizzaName.length)];

var getContentClass = document.getElementsByClassName("content")[1];

var randomPrice = document.createElement("div");
randomPrice.id = "price1";
randomPrice.innerHTML = price[Math.floor(Math.random() * price.length)];
getContentClass.appendChild(randomPrice);

var randomDesc = document.createElement("div");
randomDesc.id = "desc1";
randomDesc.innerHTML = description[Math.floor(Math.random() * description.length)];
getContentClass.appendChild(randomDesc);


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