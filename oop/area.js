/**
 * Az area osztály diveket hoz létre amit egy tetszőleges containerhez hozzáfűz.
 */
class Area { // Egy class Area neven
    /**
     * 
     * @param {string} classname A constructor bejovo erteke a classname
     * 
     */
    constructor(classname) { // Egy Constructor Fuggveny Ami Egy Classname Parametert Var
        let containerDivecske = document.querySelectorAll('.containeroop');  // Megprobalja megkeresni az osszes olyan elemet aminek az osztalyneve 'containeroop'
        if(!containerDivecske) { // Ha nem talal ilyen elemet akkor lép be az if-be
            containerDivecske = document.createElement('div') // Letrehoz egy uj div elemet
            containerDivecske.classname = 'containeroop' // Beallitja az osztalynevet 'containeroop'-ra
            document.body.appendChild(containerDivecske) // Hozzaadja a body elemhez az uj divet
        }
        const divecske = document.createElement('div'); // Letrehoz egy masik div elemet
        divecske.className = classname; // Beallitja az osztalynevet a kapott classname parameter alapjan
        containerDivecske.appendChild(divecske) // Hozzaadja az uj divet a 'containeroop' divhez
    }
}