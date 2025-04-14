const array = []; //Letrehozunk egy array-t array neven.

/**
 * 
 * @param {string} classname Classname az osztaly neve ami egy string értéket vár
 * @returns {HTMLDivElement} Maga a div elem
 */

const makeAdiv = (classname) => {  // Egy arrow function, aminek a neve makeAdiv. Egy classname parameter var
    const div = document.createElement('div');   // Letrehozunk egy uj div HTML elemet
    div.className = classname;  // Beallitjuk a div osztaly nevet a beerkezo classname parameter alapjan
    return div;      // Visszaadjuk az ujonnan letrehozott divet
}

 
const containerDivecske = makeAdiv('container'); // Letrehozunk egy divet, aminek az osztalyneve 'container'
document.body.appendChild(containerDivecske)// Hozzaadjuk ezt a 'container' divet a dokumentum body-jahoz
const tabledivecske = makeAdiv('table'); // Letrehozunk egy uj divet, aminek az osztalyneve 'table'

const tableelement = document.createElement('table') // Letrehoz egy table elemet es eltárolja a tableelement valtozoban
tabledivecske.appendChild(tableelement) // Hozzaadja a table elemet a tabledivecske elemhez
const header = document.createElement('thead') // Letrehoz egy thead elemet es eltarolja a header valtozoban
tableelement.appendChild(header)// Hozzaadja a thead elemet a table elemhez
 
const headrow = document.createElement('tr') // Letrehoz egy tr elemet sor es eltarolja a headrow valtozoban
header.appendChild(headrow) // Hozzaadja a tr elemet a thead elemhez

const headcella = ['Szerzo', 'Mufaj', 'Cim'] // Egy tomb amely tartalmazza a fejlecek szoveget

for(const cellatext of headcella) { // Vegigiteral a headcella tomb osszes elemen
    const headercellak = document.createElement('th') // Letrehoz egy th elemet es eltarolja a headercellak valtozoban
    headercellak.innerText = cellatext // Beallitja a th elem szoveget a cellatext ertekere
    headrow.appendChild(headercellak) // Hozzaadja a th elemet a tr elemhez
}
 
const tbody = document.createElement('tbody') // Letrehozunk egy tbody elemet
tableelement.appendChild(tbody) // Hozzaadjuk a tablehez

const formdivecske = makeAdiv('form')  // Letrehozunk egy masik divet, aminek az osztalyneve 'form'

const formocska = document.createElement('form')  // Letrehozunk egy form elemet
formdivecske.appendChild(formocska) // Hozzaadja a formocska elemet a formdivecske elemhez

const fieldelementek = [{ // Definial egy tombot amely mezok adatait tartalmazza
    id: 'Writer', // Az elso mezo azonositoja
    label: 'Szerzo', // Az elso mezo cimkeje
},
{
    id: 'Genre', // A masodik mezo azonositoja
    label: 'Mufaj', // A masodik mezo cimkeje
}, 
{
    id: 'title', // A harmadik mezo azonositoja
    label: 'cim', // A harmadik mezo cimkeje
}] 

for(const element of fieldelementek) { // Vegigiteral a fieldelementek tomb osszes elemen
    const mezo = makeAdiv('field') // Letrehoz egy field osztalyu divet es eltárolja a mezo valtozoban
    formocska.append(mezo) // Hozzaadja a mezo elemet a formocska elemhez
    const label = document.createElement('label') // Letrehoz egy label elemet es eltárolja a label valtozoban
    label.htmlFor =  element.id // Beallitja a label elemhez tartozo input azonositot az element.id ertekere
     label.textContent = element.label; // Beallitja a label elemenek szoveget az element.label ertekere
     mezo.appendChild(label) // Hozzaadja a label elemet a mezo elemhez
     const input = document.createElement('input') // Letrehoz egy input elemet es eltárolja az input valtozoban
     input.id = element.id  // Beallitja az input elem azonositot az element.id ertekere
     mezo.appendChild(document.createElement('br')) // Hozzaad egy sortores elemet a mezo elemhez
     mezo.appendChild(input) // Hozzaadja az input elemet a mezo elemhez
}


const formbutton = document.createElement('button')// Letrehoz egy button elemet es eltárolja a formbutton valtozoban
formbutton.textContent = "Hozzáadás!"  // Beallitja a gomb szoveget Hozzaadas szovegre
formocska.appendChild(formbutton) // Hozzaadja a formbutton elemet a formocska elemhez


formocska.addEventListener('submit', (e) => { // Hozzaad egy eventlistener-t amely a formocska submit esemenyet figyeli
    e.preventDefault(); // Megelozi az alapertelmezett submit viselkedest
    const ertekobj = {} // Letrehoz egy ures objektumot amely az input mezok ertekeit fogja tarolni
    const inputertekek = e.target.querySelectorAll('input'); // Lekeri az osszes input elemet a formocska bol
    for(const inputertek of inputertekek ) { // Vegigiteral az inputertekek elemein
        ertekobj[inputertek.id] = inputertek.value // Az input id-t kulcsnak es az erteket erteknek tarolja az objektumban
    }
    
    array.push(ertekobj) // Hozzaadja az ertekobj objektumot az array hoz
    const asztalsor = document.createElement('tr') // Letrehoz egy tr elemet es eltárolja az asztalsor valtozoban
    tbody.appendChild(asztalsor) // Hozzaadja az asztalsor elemet a tbody hoz

    const writercella = document.createElement('td') // Letrehoz egy td elemet es eltárolja a writercella valtozoban
    writercella.textContent = ertekobj.Writer; // Beallitja a td elem szoveget az ertekobj Writer ertekere
    asztalsor.appendChild(writercella) // Hozzaadja a writercella elemet az asztalsor hoz

    const genrecella = document.createElement('td') // Letrehoz egy td elemet es eltárolja a genrecella valtozoban
    genrecella.textContent = ertekobj.Genre; // Beallitja a td elem szoveget az ertekobj Genre ertekere
    asztalsor.appendChild(genrecella)  // Hozzaadja a genrecella elemet az asztalsor hoz

    const titlecella = document.createElement('td') // Letrehoz egy td elemet es eltárolja a titlecella valtozoban
    titlecella.textContent = ertekobj.Genre; // Beallitja a td elem szoveget az ertekobj Genre ertekere
    asztalsor.appendChild(titlecella) // Hozzaadja a titlecella elemet az asztalsor hoz
})


containerDivecske.appendChild(tabledivecske) // A 'form' divhez hozzaadjuk a 'table' divet.
containerDivecske.appendChild(formdivecske) // A 'container' divhez hozzaadjuk a 'form' divet.

