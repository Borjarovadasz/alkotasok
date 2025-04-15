/**
 * Az area osztály diveket hoz létre amit egy tetszőleges containerhez hozzáfűz.
 */
class Area { // Egy class Area neven
    #div; //Let rehozunk egy privat div-et
    #manager;
    /**
     * Getter a privat valtozohoz
     * @returns {HTMLDivElement} Ezt adja vissza
     */
    get div() { // Egy getter ami visszaadja a div elemet
        return this.#div;  // Visszaadja a privat #div elemet ami az osztaly resze
    }
    /**
     * @returns {Manager}
     */
    get manager() {
        return this.#manager
    }
    
    /**
     *  @param {Manager} manager A manager objektum ami a Person objektumokat kezeli
     * @param {string} className A constructor bejovo erteke a classname ami egy string
     * 
     */
    constructor(className, manager) { // Egy constructor fuggveny ami egy classname parametert var
        this.#manager = manager;//Beallitjuk a manager privat valtozot a parameterre
        const container = this.#getcontainerdiv();
        this.#div = document.createElement('div')
        this.#div.className = className; // Beallitja a privat #div osztalynevet a kapott classname ertekere
        container.appendChild(this.#div); // Hozzaadja a privat #div elemet a container elemhez
        
    }
    #getcontainerdiv() { // Egy privat metodus ami valoszinuleg visszaadja a container divet
        let containerDivecske = document.querySelector('.containeroop');  // Megprobalja megkeresni az osszes olyan elemet aminek az osztalyneve 'containeroop'
        if(!containerDivecske) { // Ha nem talal ilyen elemet akkor lép be az if-be
            containerDivecske = document.createElement('div') // Letrehoz egy uj div elemet
            containerDivecske.className = 'containeroop' // Beallitja az osztalynevet 'containeroop'-ra
            document.body.appendChild(containerDivecske) // Hozzaadja a body elemhez az uj divet
        }
        return containerDivecske; //Visszaadja a containerdivecsket
    }
     
}
/**
 * Az Asztal osztaly az Area osztalybol oroklodik, es fejcella elemekkel rendelkezo tablat hoz letre
 */

class Asztal extends Area { 
    
    /**
     * Ez a konstruktor urlapot hoz letre mezokkel, es hozzaadja a szulo div elemhez.
     * @param {string} className  A parameter ami egy string tipusu erteket var className neven
     * @param {Manager} manager A manager objektum ami a Person objektumokat kezeli
     */
    constructor(className, manager) {// Egy constructor fuggveny ami egy styleclass parametert var
        super(className, manager); // Meghivja a szuloosztaly constructor fuggvenyet a styleclass parameterrel
        const tableBody = this.#asztalletrehozas(); 
        this.manager.setAddpersonCall((ember) => {

            const tablerow = document.createElement('tr')

            const wcell = document.createElement('td')
            wcell.textContent = ember.writer
            tableBody.appendChild(wcell)

            
            const gcell = document.createElement('td')
            gcell.textContent = ember.genre
            tableBody.appendChild(gcell)

            const tcell = document.createElement('td')
            tcell.textContent = ember.title
            tableBody.appendChild(tcell)
            tableBody.appendChild(tablerow)
        
        })
    }

     /**
      * Ez a fuggveny letrehoz egy tablat fejleccel es visszater a tbodyval
      * @returns {HTMLTableSectionElement} A tableBody elememel ter vissza ami egy HTMLTableSectionElement
      */
    #asztalletrehozas() {
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
        } const tableBody = document.createElement('tbody'); // Letrehozunk egy tbody elemet
        asztal.appendChild(tableBody); // Hozzaadjuk a tablehez
        return tableBody; //Visszareturolni a tablebodyt
       
    }
    
}
/**
 * Ez az osztaly az Area osztalybol oroklodik, amely egy urlapot hoz letre, tartalmazva input mezoket es egy  gombot.
 */

class Form extends Area { // Egy class Form ami az Area osztalybol oroklodik
    
    /**
     * Ez a konstruktor letrehoz egy urlapot sok mezovel amikhez a szulo ertekeit hozzadja.
     * @param {string} className   A parameter ami egy string tipusu erteket var className neven
     * @param {Array} fieldecske
     * @param {Manager} manager
     */
    constructor(className, felementlist, manager) { // Egy constructor fuggveny ami egy classname parametert var
        super(className, manager) // Meghivja az oszto osztaly constructorat
        const formocsoka = document.createElement('form')  // Letrehoz egy form elemet es eltarolja a formocsoka valtozoban
        this.div.appendChild(formocsoka) // Hozzaadja a form elemet a div elemhez
        

    for(const felement of felementlist) { // Vegigiteral a felementlist tomb elemein
        const fieldecske = makeAdiv('field');  // Letrehoz egy field divet es eltarolja a fieldecske valtozoban
        formocsoka.appendChild(fieldecske) // Hozzaadja a fieldecske divet a formhoz
        const labelecske = document.createElement('label') // Letrehoz egy label elemet es eltarolja a labelecske valtozoban        
        labelecske.htmlFor = felement.fid // Beallitja a label htmlFor erteket a felement id-jere
        labelecske.textContent = felement.label  // Beallitja a label szoveget a felement label ertekere
        fieldecske.append(labelecske) // Hozzaadja a label elemet a fieldecske divhez

        const inputocska = document.createElement('input') // Letrehoz egy input elemet es eltarolja az inputocska valtozoban
        inputocska.id = felement.fid // Beallitja az input id erteket a felement id-jere
        fieldecske.appendChild(document.createElement('br')) // Hozzaad egy sortorest a fieldecske divhez
        fieldecske.appendChild(inputocska) // Hozzaadja az input elemet a fieldecske divhez
        fieldecske.addEventListener('submit', (e)=> { // Esemenyfigyelo hozzaadasa a submit esemenyhez
            e.preventDefault() // Megakadalyozza az alapertelmezett urlap bekuldest
            const iputfield = e.target.querySelectorAll('input') // Kivalasztja az osszes input mezo az urlapbol
            const vobject = {} // Letrehoz egy ures objektumot
            for(const element of iputfield) { // Bejarja az osszes input mezot
                vobject[element.fid] = element.value // Hozzaadja a mezo azonositot es erteket az objektumhoz
            }
            
            const ember = new Ember(vobject.writer, vobject.genre, vobject.title) // Letrehoz egy uj Ember objektumot a begyujtott adatok alapjan
            this.manager.personadd(ember) // Hozzaadja az Ember objektumot a managerhez
        })
        

    const gomb = document.createElement('button') // Letrehoz egy button elemet es eltarolja a gomb valtozoban
    gomb.textContent = 'Hozzaadas' // Beallitja a gomb szoveget Hozzaadas ertekre
    formocsoka.appendChild(gomb) // Hozzaadja a gombot a formhoz
    }

   
}