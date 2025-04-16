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
        const tableBody = this.#asztalletrehozas(); // Letrehoz a tableBody elemet
        this.manager.setAddpersonCall((Mu) => { // Beallitja a addperson callback-et
        
            const tablerow = document.createElement('tr'); // Letrehoz a sor elemet
        
            const wcell = document.createElement('td'); // Letrehoz a szerzo cellat
            wcell.textContent = Mu.writer; // Beallitja a szerzo cella szoveget
            tableBody.appendChild(wcell); // Hozzaadja a szerzo cellat a tableBody elemhez
        
            const gcell = document.createElement('td'); // Letrehoz a mufaj cellat
            gcell.textContent = Mu.genre; // Beallitja a mufaj cella szoveget
            tableBody.appendChild(gcell); // Hozzaadja a mufaj cellat a tableBody elemhez
        
            const tcell = document.createElement('td'); // Letrehoz a cim cellat
            tcell.textContent = Mu.title; // Beallitja a cim cella szoveget
            tableBody.appendChild(tcell); // Hozzaadja a cim cellat a tableBody elemhez
            tableBody.appendChild(tablerow); // Hozzaadja a sort a tableBody elemhez
        
        });
        
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
    
        const fejcellak = ['Szerzo', 'Cim', 'Mufaj'] // Egy tomb amely tartalmazza a fejlecek szoveget
        for(const fejtext of fejcellak) { // Vegigiteral a fejcellak tomb osszes elemen
            const fejcella = document.createElement('th') // Letrehoz egy th elemet es eltárolja a fejcella valtozoban
            fejcella.innerText = fejtext // Beallitja a th elem szoveget a fejtext ertekere
            headrow.appendChild(fejcella) // Hozzaadja a th elemet a tr elemhez
        } 
        
        const tableBody = document.createElement('tbody'); // Letrehozunk egy tbody elemet
        asztal.appendChild(tableBody); // Hozzaadjuk a tablehez
        return tableBody; //Visszareturolni a tablebodyt
       
    }
    
}
/**
 * Ez az osztaly az Area osztalybol oroklodik, amely egy urlapot hoz letre, tartalmazva input mezoket es egy  gombot.
 */

class Form extends Area { // Egy class Form ami az Area osztalybol oroklodik
    
    #formfieldarray;
    /**
     * Ez a konstruktor letrehoz egy urlapot sok mezovel amikhez a szulo ertekeit hozzadja.
     * @param {string} className   A parameter ami egy string tipusu erteket var className neven
     * @param {Array} fieldecske
     * @param {Manager} manager
     */
    constructor(className, felementlist, manager) { // Egy constructor fuggveny ami egy classname parametert var
        super(className, manager) // Meghivja az oszto osztaly constructorat
        this.#formfieldarray = []; //
        const formocsoka = document.createElement('form')  // Letrehoz egy form elemet es eltarolja a formocsoka valtozoban
        this.div.appendChild(formocsoka) // Hozzaadja a form elemet a div elemhez

        for(const felement of felementlist) { // Vegigiteral a felementlist tomb elemein
            const formfield = new FormField(felement.fid, felement.label)
            this.#formfieldarray.push(formfield); // Hozzaadjuk A formfield objektumot az array-hez
            formocsoka.appendChild(formfield.getdiv()); // Hozzaadjuk A formfield div-et a formocska elemhez
            
        }
        
            const gomb = document.createElement('button') // Letrehoz egy button elemet es eltarolja a gomb valtozoban
            gomb.textContent = 'Hozzaadas' // Beallitja a gomb szoveget Hozzaadas ertekre
            formocsoka.appendChild(gomb) // Hozzaadja a gombot a formhoz
            formocsoka.addEventListener('submit', (e)=> { // Esemenyfigyelo hozzaadasa a submit esemenyhez
                    e.preventDefault() // Megakadalyozza az alapertelmezett urlap bekuldest
                    const vobject = {} // Letrehoz egy ures objektumot
             
                    let valid = true // Beallitja a valid erteket true-ra
                    for(const formfield of this.#formfieldarray) { // Vegigiteral a formfield tomb elemein
                        formfield.hiba = ""; // Beallitja a hiba ures ertekre
                        if(formfield.value === "") { // Ellenorzi hogy a formfield value ures-e
                            formfield.hiba = 'Kotelezo Megadni' // Beallitja a hiba szoveget
                            valid = false // Beallitja a valid erteket false-ra
                        }
                        vobject[formfield.id] = formfield.value // Hozzaadja a mezo azonositot es erteket az objektumhoz
                    }
                    
                    if(valid) { // Ellenorzi hogy a valid true-e
                        const Mu = new Mu(vobject.writer, vobject.title, vobject.genre) // Letrehoz a Mu objektumot a begyujtott adatok alapjan
                        this.manager.personadd(Mu) // Hozzaadja a Mu objektumot a managerhez
                    }
                })
            }
        }
            

        /**
         * Ez az osztaly az Areaból öröklődik és egy Feltöltés-t készítünk. 
         */
        class Feltoles extends Area{ // Egy osztaly ami kiterjeszti a Area osztalyt

            /**
             * Ez a konstruktor letrehoz egy urlapot sok mezovel amikhez a szulo ertekeit hozzadja.
             * @param {string} className   A parameter ami egy string tipusu erteket var className neven
             * @param {Manager} manager
             * */ 
           constructor(className,manager) { // Konstruktor ami ket parameterrel dolgozik
                super(className,manager); // Meghivja a szuloosztaly konstruktorat
                const input = document.createElement('input') // Letrehoz a input elemet
                input.id = 'fileinput' // Beallitja a input id-t fileinput-ra
                input.type = 'file' // Beallitja a input tipusat file-ra
                this.div.appendChild(input) // Hozzaadja a input elemet a div-hez
                input.addEventListener('change', (e) => { // Esemenyfigyelo hozzaadasa a input valtozasahoz
                    const file = e.target.files[0] // Lekeri a elso fajlt a valtozasnal
                    const fileolvaso = new FileReader() // Letrehoz a FileReader objektumot
                    fileolvaso.onload = () => { // Esemenyfigyelo a FileReader betoltesere
                        const filesorok = fileolvaso.result.split('\n') // Fajl tartalmat sorokra bontja
                        const fejtorles = filesorok.slice(1) // Fejlec eltavolitasa
                        for(const sor of fejtorles) { // Vegigiteral a sorokon
                            const vagottsor = sor.trim() // Vonal metszese szokoz eltavolitasaval
                            const mezok = vagottsor.split(';') // Sorokat mezokre bontja pontosvesszo szerint
                            const mu = new Mu(mezok[0], mezok[1], mezok[2]) // Letrehoz a Mu objektumot mezok alapjan
                            this.manager.personadd(mu) // Hozzaadja a Mu objektumot a managerhez
                        }
                    }
                    fileolvaso.readAsText(file); // Beolvassa a fajlt szovegkent
                })
            }
        }
           
    

class FormField {
    #id; // privat id valtozo
    #inputelement; // privat input elem
    #labelelement; // privat label elem
    #hibaElement; // privat hiba elem


    get id(){ // getter ami visszaadja az id erteket
        return this.#id; // visszaadjuk az id valtozot
    }

    get value(){ // getter ami visszaadja az input element erteket
        return this.#inputelement.value; // visszaadjuk az input mezot
    }

    set hiba(value){ // setter ami a hiba elem szoveget allitja
        this.#hibaElement.textContent = value; // beallitjuk az error szoveget
    }

    constructor(id, labelc){ // konstruktor id es label szoveget var
        this.#id = id; // az id beallitasa
        this.#labelelement = document.createElement('label'); // letrehozunk egy label elemet
        this.#labelelement.htmlFor = id; // hozzarendeljük az id-t
        this.#labelelement.textContent = labelc; // beallitjuk a label szoveget
        this.#inputelement = document.createElement('input'); // letrehozunk egy input elemet
        this.#inputelement.id = id; // beallitjuk az input id-t
        this.#hibaElement = document.createElement('span'); // letrehozunk egy span elemet
        this.#hibaElement.className = 'error'; // beallitjuk az osztaly nevet
    }

    getdiv(){ // fuggveny ami div-t ad vissza
        const div = makeAdiv('field'); // div letrehozasa field osztallyal
        const bro1 = document.createElement('br') // elso sortores
        const bro2 = document.createElement('br') // masodik sortores
        const htmlElements = [this.#labelelement, bro1, this.#inputelement, bro2, this.#hibaElement]; // elemek listaja
        for(const element of htmlElements){ // vegigiteralunk az elemeken
            div.appendChild(element); // div-hez hozzadjuk az elemeket
        }
        return div; // visszaadjuk a div-et
    }

}
