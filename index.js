#!/usr/bin/node


// Requires :
const axios = require('axios');
const {
  getCode,
  getNameList
} = require('country-list');

//Say hello :
console.log(`\nGood evening ! Welcome to prettyholidays!\n`)

//Affect variables
const args = process.argv.slice(2).toString().split(',')
const country = args[0].toLowerCase();
let year = args[1];
console.log(year)
if(year == undefined){
  year = 2019;
}else{
  year.toLowerCase();
}
if (country == "") {
  console.log("Please enter a country...")
  console.log("I can't guess it, I'm just a program you know...");
  return;
}

//Verify if the provided country exists
const countryArray = Object.keys(getNameList());

if (countryArray.includes(country) == false) {
  console.log(`Honey, "${country}" is not a country...`);

  return;
}

console.log(`Okay I found your country, ${country} is indeed a nice place`)
console.log("Now let's find the holidays, shall we ?")

const countryCode = getCode(country);

console.log(`The holidays in ${country} are : \n`)
axios.get(`https://date.nager.at/api/v2/publicholidays/${year}/${countryCode}`)
  .then(function (response) {
    showHolidays(response.data)
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });


function showHolidays(jsonList){
  console.log(`There are ${jsonList.length} Holidays in China`)
  jsonList.forEach( (item, index) => {
    console.log(`${index + 1} : ${item.date} - ${item.name} (${item.localName})`);
  });
}
