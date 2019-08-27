const chalklet = require('./chalklet');
const text = '"Chalklet Rain" - Yay Monday';

console.info(
`
Examples:
---------
`
);

// Example: No options passed
console.info(
`
  1. No options passed
  
  const chalklet = require('chalklet');
  const text = '"Chalklet Rain" - Yay Monday';
  
  chalklet.generate(text);

${chalklet.generate(text)}

`
);


// Example: Strings for supported color names
const colorOptionsString = {
  type: 'string',
  text: { value: 'white' },
  bg: { value: 'blue' }
};

console.info(
`
  2. Strings for supported color names
  
  const chalklet = require('chalklet');
  const text = '"Chalklet Rain" - Yay Monday';
  const colorOptions = {
    type: 'string',
    text: { value: 'white' },
    bg: { value: 'blue' }
  };
  
  chalklet.generate(text, colorOptions);

${chalklet.generate(text, colorOptionsString)}

`
);


// Example: RGB colors
const colorOptionsRGB = {
  type: 'rgb',
  text: { value: { r: 0, g: 255, b: 37 } },
  bg: { value: { r: 17, g: 15, b: 190 } }
};

console.info(
`
  3. RGB colors
  
  const chalklet = require('chalklet');
  const text = '"Chalklet Rain" - Yay Monday';
  const colorOptions = {
    type: 'rgb',
    text: { value: { r: 0, g: 255, b: 37 } },
    bg: { value: { r: 17, g: 15, b: 190 } }
  };
  
  chalklet.generate(text, colorOptions);

${chalklet.generate(text, colorOptionsRGB)}

`
);


// Example: HSL colors
const colorOptionsHSL = {
  type: 'hsl',
  text: { value: { h: 131, s: 100, l: 61 } },
  bg: { value: { h: 244, s: 100, l: 24 } }
};

console.info(
`
  4. HSL colors
  
  const chalklet = require('chalklet');
  const text = '"Chalklet Rain" - Yay Monday';
  const colorOptions = {
    type: 'hsl',
    text: { value: { h: 131, s: 100, l: 61 } },
    bg: { value: { h: 244, s: 100, l: 24 } }
  };
  
  chalklet.generate(text, colorOptions);

${chalklet.generate(text, colorOptionsHSL)}

`
);


// Example: HSV colors
const colorOptionsHSV = {
  type: 'hsv',
  text: { value: { h: 120, s: 91, v: 100 } },
  bg: { value: { h: 234, s: 93, v: 100 } }
};

console.info(
`
  5. HSV colors
  
  const chalklet = require('chalklet');
  const text = '"Chalklet Rain" - Yay Monday';
  const colorOptions = {
    type: 'hsv',
    text: { value: { h: 120, s: 91, v: 100 } },
    bg: { value: { h: 234, s: 93, v: 100 } }
  };
  
  chalklet.generate(text, colorOptions);

${chalklet.generate(text, colorOptionsHSV)}

`
);


// Example: HWB colors
const colorOptionsHWB = {
  type: 'hwb',
  text: { value: { h: 124, w: 0, b: 0 } },
  bg: { value: { h: 218, w: 0, b: 0 } }
};

console.info(
`
  6. HWB colors
  
  const chalklet = require('chalklet');
  const text = '"Chalklet Rain" - Yay Monday';
  const colorOptions = {
    type: 'hwb',
    text: { value: { h: 124, w: 0, b: 0 } },
    bg: { value: { h: 218, w: 0, b: 0 } }
  };
  
  chalklet.generate(text, colorOptions);

${chalklet.generate(text, colorOptionsHWB)}

`
);

// Example: Hex colors
const colorOptionsHex = {
  type: 'hex',
  text: { value: '#c8ff75' },
  bg: { value: '#170088' }
};

console.info(
`
  7. Hex colors
  
  const chalklet = require('chalklet');
  const text = '"Chalklet Rain" - Yay Monday';
  const colorOptions = {
    type: 'hex',
    text: { value: '#c8ff75' },
    bg: { value: '#170088' }
  };
  
  chalklet.generate(text, colorOptions);

${chalklet.generate(text, colorOptionsHex)}

`
);


// Example: Alternative font options
const fontOptions = {
  font: 'Varsity',
  horizontalLayout: 'default',
  verticalLayout: 'default'
};

const colorOptions = {
  type: 'hex',
  text: { value: '#3eff51' },
  bg: { value: '#170088' }
};

console.info(
`
  8. Alternative font options
  
  const chalklet = require('chalklet');
  const text = '"Chalklet Rain" - Yay Monday';
  const colorOptions = {
    type: 'hex',
    text: { value: '#c8ff75' },
    bg: { value: '#170088' }
  };
  const fontOptions = {
    font: 'Varsity',
    horizontalLayout: 'default',
    verticalLayout: 'default'
  };
  
  chalklet.generate(text, colorOptions, fontOptions);

${chalklet.generate(text, colorOptions, fontOptions)}

`
);
