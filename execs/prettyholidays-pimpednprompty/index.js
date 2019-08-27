#!/usr/bin/node

// Requires :
const axios = require('axios');
const {
  getCode,
  getNameList
} = require('country-list');
const ora = require('ora');
const chalk = require('chalk');
const figlet = require('figlet');
const prompts = require('prompts');

//Figlet Title
console.log(chalk.rgb(0, 238, 255)(figlet.textSync('Pretty\nHolidays!', {
  font: 'Doom',
  horizontalLayout: 'default',
  verticalLayout: 'default'
})));
//Say hello :
let pimped = "PIMPED"
let prompty = "PROMPTY";
console.log((`\nGood evening ! Welcome to prettyholidays!\nThis version is ${chalk.rgb(0, 238, 255)(pimped)} and ${chalk.rgb(0, 238, 255)(prompty)}\n`));

(async () => {
  const countryArray = Object.keys(getNameList());
  const questions = [{
      type: 'text',
      name: 'country',
      message: `Give me a country, and i'll give you it's holidays`,
      validate: value => value == "" ? `Please enter a country...` : countryArray.includes(value) == false ? `Honey, "${value}" is not a country that i heard of...` : true
    },
    {
      type: 'number',
      name: 'year',
      message: 'For which year ?',
      initial: '2019'
    }
  ];
  const response = await prompts(questions);

  //Affect variables - best method
  let country = response.country;
  let year = response.year


  console.log(`Okay I found your country, ${country} is indeed a nice place.`)
  console.log(`Now let's find the holidays for it, in ${year} ?\n`)

  const countryCode = getCode(country);

  const spinner = ora('Loading Mojitos, Caipirinhas or Sake\n\n').start();
  axios.get(`https://date.nager.at/api/v2/publicholidays/${year}/${countryCode}`)

    .then(function(response) {
      showHolidays(response.data)
      nbrHolidays = getNbrHolidays(response.data)
      console.log(`\nDuring the year ${year} there are ${nbrHolidays} holidays in ${country}.`)
    })
    .catch(function(error) {
      showErrors(error);
    })
    .then(function() {
      spinner.stop();

    });
    //FUNCTIONS :
    function showHolidays(jsonList) {
      jsonList.forEach((item, index) => {
        index < 9?nbr = `0${index + 1}` : nbr = index + 1
        let h = getHslRainbowColorsPerIndex(index);
        // console.log(h);
        console.log(chalk.hsl(h, 100, 50)(`${nbr} : ${item.date} - ${item.name} (${item.localName})`));
      });
    }

    function getNbrHolidays(jsonList) {
      return jsonList.length;
    }

    function showErrors(error) {

      console.log(`Mistakes were made - Error ${error.response.status}: ${error.response.statusText}`)
    }

    function getHslRainbowColorsPerIndex(index) {
      let h = (index) % 12 * 30;
      return h;

    }
})();
