'use strict';

// //setting variable
let hoursOfOperation = ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00AM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM'];
let storeLocations = [];
let sales = document.getElementById('sales');

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
  }
};
Storelocation.prototype.calcCookies = function() {
  this.calcCustomers()
  for (let i = 0; i < hoursOfOperation.length; i++) {
  this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgSales));
  this.totalCookies += (this.cookiesPerHour[i]);
  }
};

//DOM Control/Create function table rendering
Storelocation.prototype.render = function(){
  this.calcCookies();
  const tbodyElement = document.createElement('tbody');
  sales.appendChild(tbodyElement);
  const trTwoElement = document.createElement('tr');
  tbodyElement.appendChild(trTwoElement);
  const thElement = document.createElement('th');
  thElement.textContent = `${this.location}`;
  trTwoElement.appendChild(thElement);
   for (let i = 0; i < hoursOfOperation.length; i++){
       const tdElement = document.createElement('td');
       tdElement.textContent = `${this.cookiesPerHour[i]}`;
       trTwoElement.appendChild(tdElement);
     }
  const dailyFinal = document.createElement('td');
  dailyFinal.textContent = `${this.totalCookies}`
  trTwoElement.appendChild(dailyFinal);
   }
 

//initial table header creation
function createTable(){
const theadElement = document.createElement('thead')
sales.appendChild(theadElement);
const trElement = document.createElement('tr');
theadElement.appendChild(trElement);
let thElement = document.createElement('th');
thElement.textContent = ``;
trElement.appendChild(thElement);
for (let j = 0; j < hoursOfOperation.length; j++){
  const thColEl = document.createElement(`th`);
  thColEl.textContent = `${hoursOfOperation[j]}`;
  trElement.appendChild(thColEl);
}
const tableTotalDaily = document.createElement('th')
tableTotalDaily.textContent = `Total Daily Cookie Sales`;
trElement.appendChild(tableTotalDaily);
}


//called function to run everything
function calcStoreSales() {
  createTable();
  for ( let i = 0; i < storeLocations.length; i++) {
    let getStores = storeLocations[i];
    getStores.render();
  }
}

  calcStoreSales();
