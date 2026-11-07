function queueTime(customers, n) {
   /* let time = 0;
   let Kasse = new Array(n);
   Kasse.fill(0);

   while (true) {
    for (t = 0; t < Kasse.length; t++) {
        if (Kasse[t] > 1) {
            Kasse[t]--;
        }
        else {
            Kasse[t] = customers.shift() || 0;
       }
    }
    if(costumers.length == 0 && Math.max(...Kasse) == 0)
        return time;
    time++;
   } */
   
let w = new Array(n).fill(0);
for (let t of costomers) {
    let ids = w.indexOf(Math.min(...w));
    w[idx] += t;
}
return Math.max(...w);

}

/*
    Sie befinden Sich im Supermarkt.
    Es gibt n offene Kassen. 
    Für alle Kassen gibt es eine gemeinsame Warteschlange.
    Sobald eine Kasse leer wird, geht der nächste Kunde sofort hin
    Sie erhalten ein Array mit Kunden, darin sind die Kassierzeiten jedes Kunden vermerkt, 
    also wie lange er oder sie an der Kasse brauchen wird

    Finden Sie die Zeit heraus, bis alle Kunden den Laden verlassen haben
*/

var assert = require('assert');
describe('Supermarktkassen', function () {
    it('Beispiele', function () {
        assert.equal(queueTime([], 1), 0);
        assert.equal(queueTime([1, 2, 3, 4], 1), 10);
        assert.equal(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
        assert.equal(queueTime([1, 2, 3, 4, 5], 20), 5);
    });
});
/*
  Um den Code zu testen, richten Sie eine Testumgebung ein
  1.) Installieren Sie Nodes (enhält npm) https://nodejs.org/en/
  2.) Installieren Sie mocha mit $ npm install --global mocha https://mochajs.org/

  Um einen Test auszuführen, tippen Sie auf der Kommandozeile
  $ mocha <name_der_datei>

*/

