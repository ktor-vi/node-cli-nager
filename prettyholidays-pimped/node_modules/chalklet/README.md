# Chalklet

[![Coverage Status](https://coveralls.io/repos/github/dkcwd/chalklet/badge.svg?branch=master)](https://coveralls.io/github/dkcwd/chalklet?branch=master)

Generate coloured ASCII Art from text...

Thanks to the people behind `chalk` and `figlet`, this library wraps
the work they did.

![Thanks](thanks.png)

Chalk: https://github.com/chalk/chalk#readme

Figlet: https://github.com/patorjk/figlet.js#readme


## Examples

1) No options passed

```
const chalklet = require('chalklet');
const text = '"Chalklet Rain" - Yay Monday';

chalklet.generate(text);
```


2) Strings for supported color names

```
const chalklet = require('chalklet');
const text = '"Chalklet Rain" - Yay Monday';
const colorOptions = {
  type: 'string',
  text: { value: 'white' },
  bg: { value: 'blue' }
};

chalklet.generate(text, colorOptions);
```

3) RGB colors

```
const chalklet = require('chalklet');
const text = '"Chalklet Rain" - Yay Monday';
const colorOptions = {
  type: 'rgb',
  text: { value: { r: 0, g: 255, b: 37 } },
  bg: { value: { r: 17, g: 15, b: 190 } }
};

chalklet.generate(text, colorOptions);
```


4) HSL colors

```
const chalklet = require('chalklet');
const text = '"Chalklet Rain" - Yay Monday';
const colorOptions = {
  type: 'hsl',
  text: { value: { h: 131, s: 100, l: 61 } },
  bg: { value: { h: 244, s: 100, l: 24 } }
};

chalklet.generate(text, colorOptions);
```

5) HSV colors

```
const chalklet = require('chalklet');
const text = '"Chalklet Rain" - Yay Monday';
const colorOptions = {
  type: 'hsv',
  text: { value: { h: 120, s: 91, v: 100 } },
  bg: { value: { h: 234, s: 93, v: 100 } }
};

chalklet.generate(text, colorOptions);
```

6) HWB colors

```
const chalklet = require('chalklet');
const text = '"Chalklet Rain" - Yay Monday';
const colorOptions = {
  type: 'hwb',
  text: { value: { h: 124, w: 0, b: 0 } },
  bg: { value: { h: 218, w: 0, b: 0 } }
};

chalklet.generate(text, colorOptions);
```

7) Hex colors

```
const chalklet = require('chalklet');
const text = '"Chalklet Rain" - Yay Monday';
const colorOptions = {
  type: 'hex',
  text: { value: '#c8ff75' },
  bg: { value: '#170088' }
};

chalklet.generate(text, colorOptions);
```

8) Alternative font options

The font options format is the same as the `figlet` library.


```
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
```