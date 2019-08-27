'use strict';
const figlet = require('figlet');
const chalk = require('chalk');
const chalklet = {
  generate(text, colorOptions, fontOptions) {
    const fontOptionsValue = fontOptions || {
      font: 'Standard',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    };
    const type = (colorOptions && colorOptions.type) ? colorOptions.type : 'string';
    const textOptions = (colorOptions && colorOptions.text) ? colorOptions.text : { value: 'black' };
    const bgOptions = (colorOptions && colorOptions.bg) ? colorOptions.bg : { value: 'white' };
    const value = figlet.textSync(text, fontOptionsValue);

    if (type === 'string') {
      return chalk
        .keyword(textOptions.value)
        .bgKeyword(bgOptions.value)
        .bold(value);
    }

    if (type === 'rgb') {
      return chalk
        .rgb(textOptions.value.r, textOptions.value.g, textOptions.value.b)
        .bgRgb(bgOptions.value.r, bgOptions.value.g, bgOptions.value.b)
        .bold(value);
    }

    if (type === 'hsl') {
      return chalk
        .hsl(textOptions.value.h, textOptions.value.s, textOptions.value.l)
        .bgHsl(bgOptions.value.h, bgOptions.value.s, bgOptions.value.l)
        .bold(value);
    }

    if (type === 'hsv') {
      return chalk
        .hsv(textOptions.value.h, textOptions.value.s, textOptions.value.v)
        .bgHsv(bgOptions.value.h, bgOptions.value.s, bgOptions.value.v)
        .bold(value);
    }

    if (type === 'hwb') {
      return chalk
        .hwb(textOptions.value.h, textOptions.value.w, textOptions.value.b)
        .bgHwb(bgOptions.value.h, bgOptions.value.w, bgOptions.value.b)
        .bold(value);
    }

    if (type === 'hex') {
      return chalk
        .hex(textOptions.value)
        .bgHex(bgOptions.value)
        .bold(value);
    }

    throw Error('Invalid color option type specified');
  },
};

module.exports = chalklet;
