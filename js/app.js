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
    console.log(this.cookiesPerHour);
    }
  },
  finalSales: function() {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      this.totalCookies = (Math.ceil(this.cookiesPerHour[i] + this.totalCookies))[0];
      console.log(this.totalCookies);
    }
  }
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
    console.log(this.cookiesPerHour);
    }
  },
  finalSales: function() {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      this.totalCookies = (Math.ceil(this.cookiesPerHour[i] + this.totalCookies))[0];
      console.log(this.totalCookies);
    }
  }
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
    console.log(this.cookiesPerHour);
    }
  },
  finalSales: function() {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      this.totalCookies = (Math.ceil(this.cookiesPerHour[i] + this.totalCookies))[0];
      console.log(this.totalCookies);
    }
  }
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
    console.log(this.cookiesPerHour);
    }
  },
  finalSales: function() {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      this.totalCookies = (Math.ceil(this.cookiesPerHour[i] + this.totalCookies))[0];
      console.log(this.totalCookies);
    }
  }
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
    console.log(this.cookiesPerHour);
    }
  },
  finalSales: function() {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      this.totalCookies = (Math.ceil(this.cookiesPerHour[i] + this.totalCookies))[0];
      console.log(this.totalCookies);
    }
  }
}
 
const Stores = [Seattle, Tokyo, Dubai, Paris, Lima]

function calcStoreSales() {
  for ( let i = 0; i < Stores.length; i++) {
    let getStores = Stores[i];
    getStores.calcCookies();
    getStores.finalSales();
    dispStoreSales(getStores);
  }
}

