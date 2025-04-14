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
 

const formdivecske = makeAdiv('form')  // Letrehozunk egy masik divet, aminek az osztalyneve 'form'


containerDivecske.appendChild(tabledivecske) // A 'form' divhez hozzaadjuk a 'table' divet.
containerDivecske.appendChild(formdivecske) // A 'container' divhez hozzaadjuk a 'form' divet.
