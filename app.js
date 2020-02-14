'use strict';

///////////////////////////
//// C R E A T E   S T O R E   O B J E C T S
///////////////////////////

function MainOffice()
{
  this.name = 'Salmon Cookies';
  // array pos0=storeName | pos1=dailyCookiesSold | pos2:da¡ilyCustomers
  //this.stores = [['Seattle',0,0],['Tokio',0,0],['dubai',0,0],['paris',0,0],['lima',0,0]];
  this.stores = [];
  // array with storeOBJECTS. I create a new one so I don't have tp change the parameter this.stores
  this.storesObjectsArray = [];
  this.globalDailyCookiesSold = 0;
  this.globalDailyClients = 0;
  // 0:hour | 1:globalCookiesSales
  this.globalHourlySales=[[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0],[13,0],[14,0],[15,0],[16,0],[17,0],[18,0],[19,0]];
}  //funtion corporate

MainOffice.prototype.addStore = function(location,minDailyCustomer,
    maxDailyCustomer,avgCookieSale,soldCookiesPerDay,dailyNumCustomers,
    address, openHours, contact, additionalInfo)
{
  
  var newStore = new Store(location,minDailyCustomer,maxDailyCustomer,avgCookieSale,
                       soldCookiesPerDay,dailyNumCustomers,address, openHours, contact, additionalInfo);
 
  this.stores.push([location,0,0]);
  this.storesObjectsArray.push(newStore);
  createFakeSales(newStore);
  displayHourlyTable();
} // MainOffice.prototype.addStore



MainOffice.prototype.addSale = function(store, cookiesSold, numClients,hourSale)
{
  // update globals sales and customers
  this.globalDailyCookiesSold = this.globalDailyCookiesSold + cookiesSold;
  this.globalDailyClients = this.globalDailyClients + numClients;

  // update store daily Totals
  for (var i=0; i<this.stores.length;i++)
  {
    if (this.stores[i][0].toLowerCase() == store.toLowerCase())   // found the store
    { 
      this.stores[i][1] = this.stores[i][1] + cookiesSold;    // pos1=dailyCookiesSold
      this.stores[i][2] = this.stores[i][2] + numClients;     // pos2:dailyCustomers
    }
  }
  // update the value of globalHourlySales[1] where the  hour[0] is the indicated
  for (var i=0; i<this.globalHourlySales.length;i++)
  {
    if (this.globalHourlySales[i][0] === hourSale)  // i found the correct hour of the sale, Update the amount of globalHourlySales
    {
      this.globalHourlySales[i][1] = this.globalHourlySales[i][1] + cookiesSold; 
    }
  }
}  // MainOffice.prototype.addSale



function Store(location,minDailyCustomer,maxDailyCustomer,avgCookieSale,
          soldCookiesPerDay,dailyNumCustomers,address, openHours, contact, additionalInfo)
{ 
  this.location = location;
  this.minDailyCustomer = minDailyCustomer;
  this.maxDailyCustomer = maxDailyCustomer;
  this.avgCookieSale = avgCookieSale;
  this.soldCookiesPerDay = soldCookiesPerDay;
  this.dailyNumCustomers = dailyNumCustomers;
  this.address = address;
  this.openHours = openHours;   
  this.contact = contact;
  this.additionalInfo = additionalInfo;
  /* | 0 = hour; | 1 =cookies sales per hour | 2= customers per hour*/
  this.hourlySales=[[6,0,0],[7,0,0],[8,0,0],[9,0,0],[10,0,0],[11,0,0],[12,0,0],[13,0,0],[14,0,0],[15,0,0],[16,0,0],[17,0,0],[18,0,0],[19,0,0]];
} // CONSTRUCTOR function Store

Store.prototype.addSale = function(hourSale)
  {
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
   corporate.addSale(this.location,totalNumCookiesPerSale,numClients,hourSale);
  } //Store.prototype.addSale


function createFakeSales(store)
{
  //TODO change this to accept any hours range
  for (var i=6; i<20;i++) //i know there are 13 working hours now en each store
  {
    store.addSale(i);
  } //for (var i=6; i<20;i++)
}  // function createFakeSales(store)



// this function is for index.html
//function displayStoresLocations(store)
function displayStoresLocations()
{
 var ulElement = document.getElementById("ulStoreList") || null;;

  /* if the main page is not index.html, this process should not be executed because
    this ulStoreList does not exist  
  */
  if (!ulElement) return; 
  if (corporate = null) return;

  for (var i=0; i < corporate.storesObjectsArray.length ; i++)
  {
    var liElement = document.createElement('li');
    liElement.textContent = corporate.storesObjectsArray[i].location;
    ulElement.appendChild(liElement);
  
    var nestedUl = document.createElement('ul');
    ulElement.appendChild(nestedUl);
  
    var nestedLi = document.createElement('li');
    nestedLi.textContent= corporate.storesObjectsArray[i].address;
    nestedUl.appendChild(nestedLi);
  
    nestedLi = document.createElement('li');
    nestedLi.textContent= corporate.storesObjectsArray[i].openHours;
    nestedUl.appendChild(nestedLi);
  
    nestedLi = document.createElement('li');
    nestedLi.textContent= corporate.storesObjectsArray[i].contact;
    nestedUl.appendChild(nestedLi);
  
    nestedLi = document.createElement('li');
    nestedLi.textContent= corporate.storesObjectsArray[i].additionalInfo;
    nestedUl.appendChild(nestedLi);

  }
} // function displayStoresLocations

function fortatTo12Hrs(hourToFormat) 
{
  var formatedHour;
  if (hourToFormat<12)
  {
    formatedHour = hourToFormat + ':00 am';
  }
  else if (hourToFormat==12) 
    {
      formatedHour = hourToFormat + ':00 pm';
    }
    else
    {
      formatedHour = (hourToFormat-12) + ':00 pm';
    }
  return formatedHour;
} // function fortatTo12Hrs

Store.prototype.getStoreRenderRowByHour = function()
  {
    var tdElement, trElement;
    trElement = document.createElement('tr');

    tdElement = document.createElement('td');
    tdElement.textContent = this.location;  
    trElement.appendChild(tdElement);

    for (var i=0; i<this.hourlySales.length;i++)
    { 
      tdElement = document.createElement('td');
      tdElement.textContent = this.hourlySales[i][1];  //TODO convert to 12h format
      trElement.appendChild(tdElement);
    }
    return(trElement);
  } // Store.prototype.getStoreRenderRowByHour = function()

// Generates a random rumber between minValue and maxValue
var generateRandomNumber = {
  minValue:0,
  maxValue:0,
  getNumber : function(){
    // I obtain (Math.random() * ((max - min) + 1)) + min from dzone.com/articles/random-number-generation-in-java  
    return Math.floor((Math.random() * ((this.maxValue - this.minValue) + 1)) + this.minValue);  
   }
} //genRandomNumber

/*
This function creates the table to display the hourly sales by stores. It the table exist, all nodes are eliminated and
appended the new ones.
*/ 
function displayHourlyTable()
{
var tblHourlySales = document.getElementById('tblGlobalHourlySales') || null;

if (!tblHourlySales) return;


  // update the title
  var h3Title = document.getElementById('h3GlobalHourlySales');
  h3Title.textContent = 'Global Sales by Hour';
  
  // delete all table nodes, so we can genereate the new table
  var child = tblHourlySales.lastChild;
  while (child)
  {
    tblHourlySales.removeChild(child);
    child = tblHourlySales.lastChild;
  }

  // create header and foother
  var trEl = document.createElement('tr')
  tblHourlySales.appendChild(trEl);

  var thHeader = document.createElement('th'); // this will be the 0,0. must be empty

  var trFooter = document.createElement('tr');
  var tdFooter = document.createElement('td');
  tdFooter.textContent ="Totals"; 
  trFooter.appendChild(tdFooter);

  tblHourlySales.appendChild(thHeader);
   for (var i=0; i<corporate.globalHourlySales.length;i++)
    { 
      thHeader = document.createElement('th');
      thHeader.textContent=fortatTo12Hrs(corporate.globalHourlySales[i][0]);  
      tblHourlySales.appendChild(thHeader);
      //CREATE FOOTER
      tdFooter = document.createElement('td');
      tdFooter.textContent = corporate.globalHourlySales[i][1];  // // 0:hour | 1:globalCookiesSales
      trFooter.appendChild(tdFooter);
    }

    // create a row for each store. The stores are stored in MainOffice.storesObjectsArray
    for (var i=0; i < corporate.storesObjectsArray.length ; i++)
    {
      //console.log(corporate.storesObjectsArray[i].location);
      tblHourlySales.appendChild(corporate.storesObjectsArray[i].getStoreRenderRowByHour());
    }

    tblHourlySales.appendChild(trFooter);
} // displayHourlyTable






// function displayGlobalInfo(company)
// {
//     ///position on the display table
//     var tableEl = document.getElementById('tblGlobalInfo');
//     var trEl, tdEl;
//     // new row
//     trEl =document.createElement('tr');
//       // td globalDailyCookiesSold
//       tdEl = document.createElement('td');
//       tdEl.textContent=company.globalDailyCookiesSold;
//       trEl.appendChild(tdEl);
//       // td globalDailyClients
//       tdEl = document.createElement('td');
//       tdEl.textContent=company.globalDailyClients;
//       trEl.appendChild(tdEl);
//     tableEl.appendChild(trEl);
// } //displayGlobalInfo

// function addStoreRowTblInfo(store)
// {
//   ///position on the display table
//   var tableEl = document.getElementById('tblStoreInfo');
//   var trEl, tdEl;

//   // new row
//   trEl =document.createElement('tr');
//     // td Location
//     tdEl = document.createElement('td');
//     tdEl.textContent=store.location;
//     trEl.appendChild(tdEl);
//     // td minCustomer
//     tdEl = document.createElement('td');
//     tdEl.textContent=store.minDailyCustomer;
//     trEl.appendChild(tdEl);
//     // td maxDailyCustomer
//     tdEl = document.createElement('td');
//     tdEl.textContent=store.maxDailyCustomer;
//     trEl.appendChild(tdEl);
//     // td avgCookieSale
//     tdEl = document.createElement('td');
//     tdEl.textContent=store.avgCookieSale;
//     trEl.appendChild(tdEl);

//     // td soldCookiesPerDay
//     tdEl = document.createElement('td');
//     tdEl.textContent=store.soldCookiesPerDay;
//     trEl.appendChild(tdEl);
//     // td avgCookieSale
//     tdEl = document.createElement('td');
//     tdEl.textContent=store.dailyNumCustomers;
//     trEl.appendChild(tdEl);
//   tableEl.appendChild(trEl);
// } //addStoreRowTblInfo



// function displayStoreInfo(store)
// {
//   var storeName = 'tblStore' + store.location;
// // var tableEl = document.getElementById('tblStoreSeattle');
// var tableEl = document.getElementById(storeName);
// var trEl, tdEl;




//     for (var i=0; i<store.hourlySales.length;i++)
//     {
//       /* | 0 = hour; | 1 =cookies sales per hour | 2= customers per hour*/
//       var trEl =document.createElement('tr');
//         var  tdEl0 = document.createElement('td');
//           tdEl0.textContent=store.hourlySales[i][0];
//           trEl.appendChild(tdEl0);
        
//         var  tdEl1 = document.createElement('td');
//         tdEl1.textContent=store.hourlySales[i][1];
//         trEl.appendChild(tdEl1);

//         var  tdEl2 = document.createElement('td');
//         tdEl2.textContent=store.hourlySales[i][2];
//         trEl.appendChild(tdEl2);
        
//        tableEl.appendChild(trEl);
      
//     } // for (var i=0; i<store.length;i++)


// } // displayStoreInfo

///////////////////////////
//// M A I N
//// CREATE corporate OBJECTS
///////////////////////////

var corporate = new MainOffice();
displayStoresLocations();



///////////////////////////
//// EVENT HANDLER
///////////////////////////

function createStore(event)
{
  var location, address, openHours, contact, additionalInfo, 
       minDailyCustomer, maxDailyCustomer, avgCookieSale;

    location = event.target.location.value;
    address = event.target.address.value;
    openHours = event.target.openHours.value;
    contact = event.target.contact.value;
    additionalInfo = event.target.additionalInfo.value;
    minDailyCustomer = event.target.minDailyCustomer.value;
    maxDailyCustomer = event.target.maxDailyCustomer.value;
    avgCookieSale = event.target.avgCookieSale.value;


  corporate.addStore(location,minDailyCustomer,maxDailyCustomer,avgCookieSale,0,0,address,openHours,contact,additionalInfo);

  event.preventDefault();

} // function createStore

var form = document.getElementById('formStore') || null;
if (form) 
{
  form.addEventListener("submit",createStore);
}



/*
var tblHourlySales = document.getElementById('tblGlobalHourlySales') || null;

if (!tblHourlySales) return;
*/ 
