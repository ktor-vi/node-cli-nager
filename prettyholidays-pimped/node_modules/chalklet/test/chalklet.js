const assert = require('assert');
const chalklet = require('../chalklet');
const fs = require('fs');

describe('Chalklet tests', function () {
  it('should generate expected content based on default options', () => {
    const expected = fs.readFileSync(process.cwd() + '/test/expected/default-parameters.txt');
    const text = '"Chalklet Rain" - Yay Monday';
    assert.equal(
      expected,
      chalklet.generate(text)
    );
  });

  it('should generate expected content based on color names as string values', () => {
    const expected = fs.readFileSync(process.cwd() + '/test/expected/color-names-as-strings.txt');
    const text = '"Chalklet Rain" - Yay Monday';
    const colorOptions = {
      type: 'string',
      text: { value: 'white' },
      bg: { value: 'blue' }
    };
    assert.equal(
        expected,
        chalklet.generate(text, colorOptions)
    );
  });

  it('should generate expected content based on RGB colors', () => {
    const expected = fs.readFileSync(process.cwd() + '/test/expected/rgb-colors.txt');
    const text = '"Chalklet Rain" - Yay Monday';
    const colorOptions = {
      type: 'rgb',
      text: { value: { r: 0, g: 255, b: 37 } },
      bg: { value: { r: 17, g: 15, b: 190 } }
    };
    assert.equal(
        expected,
        chalklet.generate(text, colorOptions)
    );
  });

  it('should generate expected content based on HSL colors', () => {
    const expected = fs.readFileSync(process.cwd() + '/test/expected/hsl-colors.txt');
    const text = '"Chalklet Rain" - Yay Monday';
    const colorOptions = {
      type: 'hsl',
      text: { value: { h: 131, s: 100, l: 61 } },
      bg: { value: { h: 244, s: 100, l: 24 } }
    };
    assert.equal(
        expected,
        chalklet.generate(text, colorOptions)
    );
  });

  it('should generate expected content based on HSV colors', () => {
    const expected = fs.readFileSync(process.cwd() + '/test/expected/hsv-colors.txt');
    const text = '"Chalklet Rain" - Yay Monday';
    const colorOptions = {
      type: 'hsv',
      text: { value: { h: 120, s: 91, v: 100 } },
      bg: { value: { h: 234, s: 93, v: 100 } }
    };
    assert.equal(
        expected,
        chalklet.generate(text, colorOptions)
    );
  });

  it('should generate expected content based on HWB colors', () => {
    const expected = fs.readFileSync(process.cwd() + '/test/expected/hwb-colors.txt');
    const text = '"Chalklet Rain" - Yay Monday';
    const colorOptions = {
      type: 'hwb',
      text: { value: { h: 124, w: 0, b: 0 } },
      bg: { value: { h: 218, w: 0, b: 0 } }
    };
    assert.equal(
        expected,
        chalklet.generate(text, colorOptions)
    );
  });

  it('should generate expected content based on Hex colors', () => {
    const expected = fs.readFileSync(process.cwd() + '/test/expected/hex-colors.txt');
    const text = '"Chalklet Rain" - Yay Monday';
    const colorOptions = {
      type: 'hex',
      text: { value: '#c8ff75' },
      bg: { value: '#170088' }
    };
    assert.equal(
        expected,
        chalklet.generate(text, colorOptions)
    );
  });

  it('should generate expected content based on provided font options', () => {
    const expected = fs.readFileSync(process.cwd() + '/test/expected/font-options.txt');
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
    assert.equal(
        expected,
        chalklet.generate(text, colorOptions, fontOptions)
    );
  });

  it('should throw error if an invalid color option type is provided', () => {
    const expected = fs.readFileSync(process.cwd() + '/test/expected/hex-colors.txt');
    const text = '"Chalklet Rain" - Yay Monday';
    const colorOptions = {
      type: 'something incorrect'
    };

    try {
      chalklet.generate(text, colorOptions);
    } catch (error) {
      assert(
          new Error('Invalid color option type specified'),
          error
      );
    }
  });
});
