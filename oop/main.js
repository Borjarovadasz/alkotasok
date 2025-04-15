const seperatorka = document.createElement('hr') // Letrehoz egy <hr> elemet es eltarolja a seperatorka valtozoban
document.body.appendChild(seperatorka) // Hozzaadja a seperatorka elemet a body elemhez

const felementlist = [{ // Definial egy tombot amely tartalmazza a form mezok adatait
    fid: 'Writer', // Az elso mezo id-je
    label: 'Szerzo', // Az elso mezo labelje
},
{
    fid: 'Genre', // A masodik mezo id-je
    label: 'Mufaj', // A masodik mezo labelje
},
{
    fid: 'Title', // A harmadik mezo id-je
    label: 'Cim', // A harmadik mezo labelje
}
]
const manager =new Manager()
const asztal = new Asztal('table', manager); // Letrehoz egy uj Area objektumot 'table' osztalynevvel, managert rakjuk bele es eltarolja az asztal valtozoban
const form = new Form('form', felementlist, manager);// Letrehoz egy uj Area objektumot 'form' osztalynevvel es eltarolja a form valtozoban