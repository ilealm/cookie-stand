'use strict';

// Objects declarations

var seattleStore = {
  location:'Seattle',
  minDailyCustomer:23,
  maxDailyCustomer:65,
  avgCookieSale:6.3,
  soldCookiesPerDay:0,
  dailyNumCustomers:0,
  
  /* | 0 = hour; | 1 =cookies sales per hour | 2= customers per hour*/
  hourlySales:[[6,0,0],[7,0,0],[8,0,0],[9,0,0],[10,0,0],[11,0,0],[12,0,0],[13,0,0],[14,0,0],[15,0,0],[16,0,0],[17,0,0],[18,0,0],[19,0,0]],


  addSale : function(hourSale){
    var numClients, numCookies, totalNumCookiesPerSale, randomNumber;

      randomNumber = generateRandomNumber;   
      // obtain the random amounts of clients and cookies sold.
      randomNumber.minValue=this.minDailyCustomer;
      randomNumber.maxValue=this.maxDailyCustomer;
      numClients=randomNumber.getNumber();

      // obtain the amount of cookies sold per customer
      randomNumber.minValue=1;
      randomNumber.maxValue=this.avgCookieSale;
      numCookies=randomNumber.getNumber(); 
     
      // multiply the ramdom amount of cookies, for the random amount of customers, to know the real amount of sold cookies
      totalNumCookiesPerSale = numClients * numCookies;
     
      // update the value of hourlySales[column1] where the  hours is the indicated
      for (var i=0; i<this.hourlySales.length;i++)
      {
        if (this.hourlySales[i][0] === hourSale)
        { // i found the correct hour of the sale, now Im going to update the amount of sales from that sales
          this.hourlySales[i][1] = this.hourlySales[i][1] + totalNumCookiesPerSale; 
          this.hourlySales[i][2] = this.hourlySales[i][2] + numClients; 
        }
      }
      // add the sales and customers, to the global STORE sales
     this.soldCookiesPerDay = this.soldCookiesPerDay + totalNumCookiesPerSale;  //numCookies;
     this.dailyNumCustomers = this.dailyNumCustomers + numClients;
     // Update global CORPORATE sales
     corporate.addSale(this.location,totalNumCookiesPerSale,numClients);
   }  // addSale
}  //seattleStore


var tokioStore = {
  location:'Tokio',
  minDailyCustomer:3,
  maxDailyCustomer:24,
  avgCookieSale:1.2,
  soldCookiesPerDay:0,
  dailyNumCustomers:0,
  /* | 0 = hour; | 1 =cookies sales per hour | 2= customers per hour*/
  hourlySales:[[6,0,0],[7,0,0],[8,0,0],[9,0,0],[10,0,0],[11,0,0],[12,0,0],[13,0,0],[14,0,0],[15,0,0],[16,0,0],[17,0,0],[18,0,0],[19,0,0]],

  addSale : function(hourSale){
    var numClients, numCookies, totalNumCookiesPerSale, randomNumber;
   
      randomNumber = generateRandomNumber;   
      // obtain the random amounts of clients and cookies sold.
      randomNumber.minValue=this.minDailyCustomer;
      randomNumber.maxValue=this.maxDailyCustomer;
      numClients=randomNumber.getNumber();

      // obtain the amount of cookies sold per customer
      randomNumber.minValue=1;
      randomNumber.maxValue=this.avgCookieSale;
      numCookies=randomNumber.getNumber(); 
     
      // multiply the ramdom amount of cookies, for the random amount of customers, to know the real amount of sold cookies
      totalNumCookiesPerSale = numClients * numCookies;
     
      // update the value of hourlySales[column1] where the  hours is the indicated
      for (var i=0; i<this.hourlySales.length;i++)
      {
        if (this.hourlySales[i][0] === hourSale)
        { // i found the correct hour of the sale, now Im going to update the amount of sales from that sales
          this.hourlySales[i][1] = this.hourlySales[i][1] + totalNumCookiesPerSale; 
          this.hourlySales[i][2] = this.hourlySales[i][2] + numClients; 
        }
      }
      // add the sales and customers, to the global STORE sales
     this.soldCookiesPerDay = this.soldCookiesPerDay + totalNumCookiesPerSale;  //numCookies;
     this.dailyNumCustomers = this.dailyNumCustomers + numClients;
     // Update global CORPORATE sales
     corporate.addSale(this.location,totalNumCookiesPerSale,numClients);
   }  // addSale
}  //tokyoStore


var dubaiStore = {
  location:'Dubai',
  minDailyCustomer:11,
  maxDailyCustomer:38,
  avgCookieSale:3.7,
  soldCookiesPerDay:0,
  dailyNumCustomers:0,
  /* | 0 = hour; | 1 =cookies sales per hour | 2= customers per hour*/
  hourlySales:[[6,0,0],[7,0,0],[8,0,0],[9,0,0],[10,0,0],[11,0,0],[12,0,0],[13,0,0],[14,0,0],[15,0,0],[16,0,0],[17,0,0],[18,0,0],[19,0,0]],

  addSale : function(hourSale){
    var numClients, numCookies, totalNumCookiesPerSale, randomNumber;
   
      randomNumber = generateRandomNumber;   
      // obtain the random amounts of clients and cookies sold.
      randomNumber.minValue=this.minDailyCustomer;
      randomNumber.maxValue=this.maxDailyCustomer;
      numClients=randomNumber.getNumber();

      // obtain the amount of cookies sold per customer
      randomNumber.minValue=1;
      randomNumber.maxValue=this.avgCookieSale;
      numCookies=randomNumber.getNumber(); 
     
      // multiply the ramdom amount of cookies, for the random amount of customers, to know the real amount of sold cookies
      totalNumCookiesPerSale = numClients * numCookies;
     
      // update the value of hourlySales[column1] where the  hours is the indicated
      for (var i=0; i<this.hourlySales.length;i++)
      {
        if (this.hourlySales[i][0] === hourSale)
        { // i found the correct hour of the sale, now Im going to update the amount of sales from that sales
          this.hourlySales[i][1] = this.hourlySales[i][1] + totalNumCookiesPerSale; 
          this.hourlySales[i][2] = this.hourlySales[i][2] + numClients; 
        }
      }
      // add the sales and customers, to the global STORE sales
     this.soldCookiesPerDay = this.soldCookiesPerDay + totalNumCookiesPerSale;  //numCookies;
     this.dailyNumCustomers = this.dailyNumCustomers + numClients;
     // Update global CORPORATE sales
     corporate.addSale(this.location,totalNumCookiesPerSale,numClients);
   }  // addSale
}  //dubaiStore


var parisStore = {
  location:'Paris',
  minDailyCustomer:20,
  maxDailyCustomer:38,
  avgCookieSale:2.3,
  soldCookiesPerDay:0,
  dailyNumCustomers:0,
  /* | 0 = hour; | 1 =cookies sales per hour | 2= customers per hour*/
  hourlySales:[[6,0,0],[7,0,0],[8,0,0],[9,0,0],[10,0,0],[11,0,0],[12,0,0],[13,0,0],[14,0,0],[15,0,0],[16,0,0],[17,0,0],[18,0,0],[19,0,0]],

  addSale : function(hourSale){
    var numClients, numCookies, totalNumCookiesPerSale, randomNumber;
   
      randomNumber = generateRandomNumber;   
      // obtain the random amounts of clients and cookies sold.
      randomNumber.minValue=this.minDailyCustomer;
      randomNumber.maxValue=this.maxDailyCustomer;
      numClients=randomNumber.getNumber();

      // obtain the amount of cookies sold per customer
      randomNumber.minValue=1;
      randomNumber.maxValue=this.avgCookieSale;
      numCookies=randomNumber.getNumber(); 
     
      // multiply the ramdom amount of cookies, for the random amount of customers, to know the real amount of sold cookies
      totalNumCookiesPerSale = numClients * numCookies;
     
      // update the value of hourlySales[column1] where the  hours is the indicated
      for (var i=0; i<this.hourlySales.length;i++)
      {
        if (this.hourlySales[i][0] === hourSale)
        { // i found the correct hour of the sale, now Im going to update the amount of sales from that sales
          this.hourlySales[i][1] = this.hourlySales[i][1] + totalNumCookiesPerSale; 
          this.hourlySales[i][2] = this.hourlySales[i][2] + numClients; 
        }
      }
      // add the sales and customers, to the global STORE sales
     this.soldCookiesPerDay = this.soldCookiesPerDay + totalNumCookiesPerSale;  //numCookies;
     this.dailyNumCustomers = this.dailyNumCustomers + numClients;
     // Update global CORPORATE sales
     corporate.addSale(this.location,totalNumCookiesPerSale,numClients);
   }  // addSale
}  //parisStore


var limaStore = {
  location:'Lima',
  minDailyCustomer:2,
  maxDailyCustomer:16,
  avgCookieSale:4.6,
  soldCookiesPerDay:0,
  dailyNumCustomers:0,
  /* | 0 = hour; | 1 =cookies sales per hour | 2= customers per hour*/
  hourlySales:[[6,0,0],[7,0,0],[8,0,0],[9,0,0],[10,0,0],[11,0,0],[12,0,0],[13,0,0],[14,0,0],[15,0,0],[16,0,0],[17,0,0],[18,0,0],[19,0,0]],

  addSale : function(hourSale){
    var numClients, numCookies, totalNumCookiesPerSale, randomNumber;
   
      randomNumber = generateRandomNumber;   
      // obtain the random amounts of clients and cookies sold.
      randomNumber.minValue=this.minDailyCustomer;
      randomNumber.maxValue=this.maxDailyCustomer;
      numClients=randomNumber.getNumber();

      // obtain the amount of cookies sold per customer
      randomNumber.minValue=1;
      randomNumber.maxValue=this.avgCookieSale;
      numCookies=randomNumber.getNumber(); 
     
      // multiply the ramdom amount of cookies, for the random amount of customers, to know the real amount of sold cookies
      totalNumCookiesPerSale = numClients * numCookies;
     
      // update the value of hourlySales[column1] where the  hours is the indicated
      for (var i=0; i<this.hourlySales.length;i++)
      {
        if (this.hourlySales[i][0] === hourSale)
        { // i found the correct hour of the sale, now Im going to update the amount of sales from that sales
          this.hourlySales[i][1] = this.hourlySales[i][1] + totalNumCookiesPerSale; 
          this.hourlySales[i][2] = this.hourlySales[i][2] + numClients; 
        }
      }
      // add the sales and customers, to the global STORE sales
     this.soldCookiesPerDay = this.soldCookiesPerDay + totalNumCookiesPerSale;  //numCookies;
     this.dailyNumCustomers = this.dailyNumCustomers + numClients;
     // Update global CORPORATE sales
     corporate.addSale(this.location,totalNumCookiesPerSale,numClients);
   }  // addSale
}  //limaStore


// .getNumber generates a random rumber between minValue and maxValue
var generateRandomNumber = {
  minValue:0,
  maxValue:0,
  
  getNumber : function(){
    // I obtain (Math.random() * ((max - min) + 1)) + min from dzone.com/articles/random-number-generation-in-java  
    return Math.floor((Math.random() * ((this.maxValue - this.minValue) + 1)) + this.minValue);  
   }
} //genRandomNumber

var corporate = {
  name:'Salmon Cookies',
  // array pos0=storeName, pos1=dailyCookiesSold, pos2:da¡ilyCustomers
  stores:[['Seattle',0,0],['Tokio',0,0],['dubai',0,0],['paris',0,0],['lima',0,0]],
  globalDailyCookiesSold:0,
  globalDailyClients:0,

  addSale : function(store,cookiesSold,numClients){

    // update globals
    this.globalDailyCookiesSold = this.globalDailyCookiesSold + cookiesSold;
    this.globalDailyClients = this.globalDailyClients + numClients;

    // update store daily Totals
    for (var i=0; i<this.stores.length;i++)
    {
      if (this.stores[i][0].toLowerCase() == store.toLowerCase())   // found the store
      { 
        this.stores[i][1] = this.stores[i][1] + cookiesSold;    // pos1=dailyCookiesSold
        this.stores[i][2] = this.stores[i][2] + numClients;     // pos2:dailyCustomers
       // console.log('store: ' + this.stores[i][0] + ' colum1: ' + this.stores[i][1] + ' colum2: ' + this.stores[i][2]);
       
      }
    }
  }  //addSale
}  // var corporate


// testing


seattleStore.addSale(6);
seattleStore.addSale(7);
seattleStore.addSale(8);
seattleStore.addSale(9);
seattleStore.addSale(10);
seattleStore.addSale(11);
seattleStore.addSale(12);
seattleStore.addSale(13);
seattleStore.addSale(14);
seattleStore.addSale(15);
seattleStore.addSale(16);
seattleStore.addSale(17);
seattleStore.addSale(18);
seattleStore.addSale(19);

tokioStore.addSale(6);
tokioStore.addSale(7);
tokioStore.addSale(8);
tokioStore.addSale(9);
tokioStore.addSale(10);
tokioStore.addSale(11);
tokioStore.addSale(12);
tokioStore.addSale(13);
tokioStore.addSale(14);
tokioStore.addSale(15);
tokioStore.addSale(16);
tokioStore.addSale(17);
tokioStore.addSale(18);
tokioStore.addSale(19);

dubaiStore.addSale(6);
dubaiStore.addSale(7);
dubaiStore.addSale(8);
dubaiStore.addSale(9);
dubaiStore.addSale(10);
dubaiStore.addSale(11);
dubaiStore.addSale(12);
dubaiStore.addSale(13);
dubaiStore.addSale(14);
dubaiStore.addSale(15);
dubaiStore.addSale(16);
dubaiStore.addSale(17);
dubaiStore.addSale(18);
dubaiStore.addSale(19);

parisStore.addSale(6);
parisStore.addSale(7);
parisStore.addSale(8);
parisStore.addSale(9);
parisStore.addSale(10);
parisStore.addSale(11);
parisStore.addSale(12);
parisStore.addSale(13);
parisStore.addSale(14);
parisStore.addSale(15);
parisStore.addSale(16);
parisStore.addSale(17);
parisStore.addSale(18);
parisStore.addSale(19);

limaStore.addSale(6);
limaStore.addSale(7);
limaStore.addSale(8);
limaStore.addSale(9);
limaStore.addSale(10);
limaStore.addSale(11);
limaStore.addSale(12);
limaStore.addSale(13);
limaStore.addSale(14);
limaStore.addSale(15);
limaStore.addSale(16);
limaStore.addSale(17);
limaStore.addSale(18);
limaStore.addSale(19);



displayGlobalInfo(corporate);
addStoreRowTblInfo(seattleStore);
addStoreRowTblInfo(tokioStore);
addStoreRowTblInfo(dubaiStore);
addStoreRowTblInfo(parisStore);
addStoreRowTblInfo(limaStore);

displayStoreInfo(seattleStore);
displayStoreInfo(tokioStore);
displayStoreInfo(dubaiStore);
displayStoreInfo(parisStore);
displayStoreInfo(limaStore);

function displayGlobalInfo(company)
{
    ///position on the display table
    var tableEl = document.getElementById('tblGlobalInfo');
    var trEl, tdEl;
    // new row
    trEl =document.createElement('tr');
      // td globalDailyCookiesSold
      tdEl = document.createElement('td');
      tdEl.textContent=company.globalDailyCookiesSold;
      trEl.appendChild(tdEl);
      // td globalDailyClients
      tdEl = document.createElement('td');
      tdEl.textContent=company.globalDailyClients;
      trEl.appendChild(tdEl);
    tableEl.appendChild(trEl);
} //displayGlobalInfo

function addStoreRowTblInfo(store)
{
  ///position on the display table
  var tableEl = document.getElementById('tblStoreInfo');
  var trEl, tdEl;

  // new row
  trEl =document.createElement('tr');
    // td Location
    tdEl = document.createElement('td');
    tdEl.textContent=store.location;
    trEl.appendChild(tdEl);
    // td minCustomer
    tdEl = document.createElement('td');
    tdEl.textContent=store.minDailyCustomer;
    trEl.appendChild(tdEl);
    // td maxDailyCustomer
    tdEl = document.createElement('td');
    tdEl.textContent=store.maxDailyCustomer;
    trEl.appendChild(tdEl);
    // td avgCookieSale
    tdEl = document.createElement('td');
    tdEl.textContent=store.avgCookieSale;
    trEl.appendChild(tdEl);

    // td soldCookiesPerDay
    tdEl = document.createElement('td');
    tdEl.textContent=store.soldCookiesPerDay;
    trEl.appendChild(tdEl);
    // td avgCookieSale
    tdEl = document.createElement('td');
    tdEl.textContent=store.dailyNumCustomers;
    trEl.appendChild(tdEl);
  tableEl.appendChild(trEl);
} //addStoreRowTblInfo



function displayStoreInfo(store)
{
  var storeName = 'tblStore' + store.location;
// var tableEl = document.getElementById('tblStoreSeattle');
var tableEl = document.getElementById(storeName);
var trEl, tdEl;


////
// me quede intenrando poner el nombre de la tabla

// var tableEl = document.getElementById(headerStore);
// // tableEl.textContent="test";
////

    for (var i=0; i<store.hourlySales.length;i++)
    {
      /* | 0 = hour; | 1 =cookies sales per hour | 2= customers per hour*/
      var trEl =document.createElement('tr');
        var  tdEl0 = document.createElement('td');
          tdEl0.textContent=store.hourlySales[i][0];
          trEl.appendChild(tdEl0);
        
        var  tdEl1 = document.createElement('td');
        tdEl1.textContent=store.hourlySales[i][1];
        trEl.appendChild(tdEl1);

        var  tdEl2 = document.createElement('td');
        tdEl2.textContent=store.hourlySales[i][2];
        trEl.appendChild(tdEl2);
        
       tableEl.appendChild(trEl);
      
    } // for (var i=0; i<store.length;i++)


} // displayStoreInfo
