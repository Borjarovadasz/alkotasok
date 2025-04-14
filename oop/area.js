/**
 * Az area osztály diveket hoz létre amit egy tetszőleges containerhez hozzáfűz.
 */
class Area { // Egy class Area neven
    #div; //Letrehozunk egy privat div-et
    
    /**
     * Getter a privat valtozohoz
     * @returns {HTMLDivElement} Ezt adja vissza
     */
    get div() { // Egy getter ami visszaadja a div elemet
        return this.#div;  // Visszaadja a privat #div elemet ami az osztaly resze
    }
    
    
    /**
     * 
     * @param {string} classname A constructor bejovo erteke a classname ami egy string
     * 
     */
    constructor(classname) { // Egy constructor fuggveny ami egy classname parametert var
        let containerDivecske = document.querySelectorAll('.containeroop');  // Megprobalja megkeresni az osszes olyan elemet aminek az osztalyneve 'containeroop'
        if(!containerDivecske) { // Ha nem talal ilyen elemet akkor lép be az if-be
            containerDivecske = document.createElement('div') // Letrehoz egy uj div elemet
            containerDivecske.classname = 'containeroop' // Beallitja az osztalynevet 'containeroop'-ra
            document.body.appendChild(containerDivecske) // Hozzaadja a body elemhez az uj divet
        }
        this.#div = document.createElement('div'); // Letrehoz egy masik div elemet
        this.#div.className = classname; // Beallitja az osztalynevet a kapott classname parameter alapjan
        containerDivecske.appendChild(this.#div) // Hozzaadja az uj divet a 'containeroop' divhez
    }
}
/**
 * Az Asztal osztaly az Area osztalybol oroklodik, es fejcella elemekkel rendelkezo tablat hoz letre
 */

class Asztal extends Area { 
    constructor(styleclass) {// Egy constructor fuggveny ami egy styleclass parametert var
        super(styleclass); // Meghivja a szuloosztaly constructor fuggvenyet a styleclass parameterrel
        const asztal = document.createElement('table') // Letrehoz egy table elemet es eltárolja az asztal valtozoban
        this.div.appendChild(asztal) // Hozzaadja az asztal elemet a div elemhez amely a jelenlegi osztalyhoz tartozik
        const head = document.createElement('thead') // Letrehoz egy thead elemet es eltárolja a head valtozoban
        asztal.appendChild(head) // Hozzaadja a thead elemet az asztal elemhez
        const headrow = document.createElement('tr') // Letrehoz egy tr elemet sor es eltárolja a headrow valtozoban
        head.appendChild(headrow) // Hozzaadja a tr elemet a thead elemhez

        const fejcellak = ['Szerzo', 'Mufaj', 'Cim'] // Egy tomb amely tartalmazza a fejlecek szoveget
        for(const fejtext of fejcellak) { // Vegigiteral a fejcellak tomb osszes elemen
            const fejcella = document.createElement('th') // Letrehoz egy th elemet es eltárolja a fejcella valtozoban
            fejcella.innerText = fejtext // Beallitja a th elem szoveget a fejtext ertekere
            headrow.appendChild(fejcella) // Hozzaadja a th elemet a tr elemhez
        }
        const tableBody = document.createElement('tbody'); // Letrehozunk egy tbody elemet
        tableElement.appendChild(tableBody); // Hozzaadjuk a tablehez
    }
}