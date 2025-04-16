class Manager{ // Osztaly definialasa Manager neven
    #array; // Privat tomb attributum definialasa
    #addpersoncallback // Privat fuggveny hivatkozas definialasa
    /**
     * Létrehoztunk egy Manager objektumot, és a tömböt üresen inicializáltuk.
     */
    constructor() { // Konstruktor metodus definialasa
        this.#array = [] // Privat tomb inicializalasa uresen
    }
    /**
     * 
     * @param {Function} callback // Callback fuggveny tipus meghatarozasa
     * @callback {mu} // Mure vonatkozo callback definialasa
     */
    setAddpersonCall(callback){ // Callback fuggveny beallitasa
        this.#addpersoncallback = callback // Privat fuggveny hivatkozas hozzarendelve
    }

     /**
      * 
      * @param {Mu} mu // Mu tipusu parameter megadasa
      */
    personadd(mu) { // Uj szemely hozzaadasa
        this.#array.push(mu) // Uj szemely hozzaadasa a tombhoz
        this.#addpersoncallback(mu) // Privat callback fuggveny futtatasa az uj szemellyel
    }
}