'use strict';

// //setting variable
let hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//Static sites to start
// set Object
const Seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSales: 6.3,
  customersPerHour: [],
  cookiesPerHour:[],
  totalCookies: 0,
  calcCustomers: function() {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      console.log(this.customersPerHour) 
  }
},
  calcCookies: function() {
    this.calcCustomers()
    for (let i = 0; i < hoursOfOperation.length; i++) {
    this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgSales));
    this.totalCookies += (this.cookiesPerHour[i]);
    console.log(this.cookiesPerHour);
    }
  },
}

const Tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSales: 1.2,
  customersPerHour: [],
  cookiesPerHour:[],
  totalCookies: 0,
  calcCustomers: function() {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      console.log(this.customersPerHour) 
  }
},
  calcCookies: function() {
    this.calcCustomers()
    for (let i = 0; i < hoursOfOperation.length; i++) {
    this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgSales));
    this.totalCookies += (this.cookiesPerHour[i]);
    console.log(this.cookiesPerHour);
    }
  },
}

const Dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgSales: 3.7,
  customersPerHour: [],
  cookiesPerHour:[],
  totalCookies: 0,
  calcCustomers: function() {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      console.log(this.customersPerHour) 
  }
},
  calcCookies: function() {
    this.calcCustomers()
    for (let i = 0; i < hoursOfOperation.length; i++) {
    this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgSales));
    this.totalCookies += (this.cookiesPerHour[i]);
    console.log(this.cookiesPerHour);
    }
  },
}

const Paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSales: 2.3,
  customersPerHour: [],
  cookiesPerHour:[],
  totalCookies: 0,
  calcCustomers: function() {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      console.log(this.customersPerHour) 
  }
},
  calcCookies: function() {
    this.calcCustomers()
    for (let i = 0; i < hoursOfOperation.length; i++) {
    this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgSales));
    this.totalCookies += (this.cookiesPerHour[i]);
    console.log(this.cookiesPerHour);
    }
  },
}

const Lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSales: 4.6,
  customersPerHour: [],
  cookiesPerHour:[],
  totalCookies: 0,
  calcCustomers: function() {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      console.log(this.customersPerHour) 
  }
},
  calcCookies: function() {
    this.calcCustomers()
    for (let i = 0; i < hoursOfOperation.length; i++) {
    this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgSales));
    this.totalCookies += (this.cookiesPerHour[i]);
    console.log(this.cookiesPerHour);
    }
  },
}
 
const Stores = [Seattle, Tokyo, Dubai, Paris, Lima]

function calcStoreSales() {
  for ( let i = 0; i < Stores.length; i++) {
    let getStores = Stores[i];
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
