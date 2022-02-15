'use strict';

// //setting variable
let hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let storeLocations = [];

//Constructor for location objects.
function Storelocation(location, minCust, maxCust, avgSales) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.totalCookies = 0;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
 storeLocations.push(this);
}
//Constructor
const seattle = new Storelocation('Seattle', 23, 65, 6.3);
const tokyo =  new Storelocation('Tokyo', 3, 24, 1.2);
const dubai = new Storelocation('Dubai', 11, 38, 3.7);
const paris = new Storelocation('Paris', 20, 38, 2.3);
const lima = new Storelocation('Lima', 2, 16, 4.6);

//prototyping
Storelocation.prototype.calcCustomers = function() {
  for (let i = 0; i < hoursOfOperation.length; i++) {
    this.customersPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    console.log(this.customersPerHour) 
  }
};
Storelocation.prototype.calcCookies = function() {
  this.calcCustomers()
  for (let i = 0; i < hoursOfOperation.length; i++) {
  this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgSales));
  this.totalCookies += (this.cookiesPerHour[i]);
  console.log(this.cookiesPerHour);
  }
};

// single function to render and 
function calcStoreSales() {
  for ( let i = 0; i < storeLocations.length; i++) {
    let getStores = storeLocations[i];
    getStores.calcCookies();
    dispStoreSales(getStores);
  }
}

let sales = document.getElementById('sales');

// DOM Control/Create function 

function dispStoreSales(locStore) {

  const articleEl = document.createElement('article');
  //append under sales id creating article element
  sales.appendChild(articleEl);

  const h1El = document.createElement('h1');
  //Fill h1 element with text that is pulled from getStores variable which is written in looped function above. 
  h1El.textContent = locStore.location;
  //append under article element
  articleEl.appendChild(h1El);

  const ulEl = document.createElement('ul');
  //append ul to article element after h1
  articleEl.appendChild(ulEl);

  
  //set text content for each instance of cookie sales
  for (let j = 0; j < hoursOfOperation.length; j++) {
  const liEl = document.createElement('li');
  liEl.textContent = `${hoursOfOperation[j]}: ${locStore.cookiesPerHour[j]}`;
  ulEl.appendChild(liEl);
    }
  const liEl = document.createElement('li');
  //change li text context from previous iteration in for loop
  liEl.textContent = `Total: ${locStore.totalCookies}`;
  //append content under <ul> after the rest of the <li> elements
  ulEl.appendChild(liEl);

 }

  calcStoreSales();
  console.log(seattle)