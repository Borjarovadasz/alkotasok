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

const asztal = new Asztal('table'); // Letrehoz egy uj Area objektumot 'table' osztalynevvel es eltarolja az asztal valtozoban
const form = new Form('form', felementlist);// Letrehoz egy uj Area objektumot 'form' osztalynevvel es eltarolja a form valtozoban