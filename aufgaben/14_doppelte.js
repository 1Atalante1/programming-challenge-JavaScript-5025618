function duplicateCount(text) {
let single = text.lowerCase().split(" ");
let zahl = letters.filter(function(value, index, arr) {
    return arr.indexOf(value) !== index && arr.lastIndexOf(value) === index;
})   
  return zahl.length;
}

/*
    Zählen Sie, wie viele verschiedene Buchstaben mehrmals vorkommen.
*/

let assert = require('assert');
describe('Doppelte', function () {
    it('Beispiele', function () {
        assert.equal(duplicateCount(""), 0);
        assert.equal(duplicateCount("sommerfrisch"), 3);
        assert.equal(duplicateCount("bergtauglich"), 1);
    });
});
