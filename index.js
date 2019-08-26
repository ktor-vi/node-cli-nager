#!/usr/bin/node


// Requires :
const axios = require('axios');
const {
  getCode,
  getNameList
} = require('country-list');

//Say hello :
console.log(`\nGood evening ! Welcome to prettyholidays!\n`)

//Affect variables - old method
// const args = process.argv.slice(2).toString().split(',')
// const country = args[0].toLowerCase();
// let year = args[1];


//Affect variables - best method

let country = process.argv[2]
let year= process.argv[3]



//User-side verification (Case-sensitivity)
if (year == undefined) {
  year = 2019;
} else {
  year.toLowerCase();
}
if (country == "") {
  console.log("Please enter a country...")
  console.log("I can't guess it, I'm just a program you know...");
  return;
}

//User-side verification (Existing country)
const countryArray = Object.keys(getNameList());

if (countryArray.includes(country) == false) {
  console.log(`Honey, "${country}" is not a country...`);

  return;
}

console.log(`Okay I found your country, ${country} is indeed a nice place.`)
console.log("Now let's find the holidays, shall we ?")

const countryCode = getCode(country);



axios.get(`https://date.nager.at/api/v2/publicholidays/${year}/${countryCode}`)
  .then(function(response) {
    showHolidays(response.data)
    nbrHolidays = getNbrHolidays(response.data)
    console.log(` \nDuring the year ${year} there are ${nbrHolidays} holidays in ${country}.`)
  })
  .catch(function(error) {
    showErrors(error);
  })
  .then(function() {
    // always executed
  });


function showHolidays(jsonList) {
  jsonList.forEach((item, index) => {
    console.log(`${index + 1} : ${item.date} - ${item.name} (${item.localName})`);
  });
}
function getNbrHolidays(jsonList){
  return jsonList.length;
}
function showErrors(error) {
  console.log(`Mistakes were made - Error ${error.response.status}: ${error.response.statusText}`)
}


//ERROR TEST SNIPPET
// console.log(`The holidays in ${country} are : \n`)
// axios.get(`https://date.nager.at/api/v2/publicholiidays/${year}/${countryCode}`)
//   .then(function(response) {
//     showHolidays(response.data)
//   })
//   .catch(function(error) {
//     console.log(error.response);
//     showErrors(error);
//   })
//   .then(function() {
//     // always executed
//   });
