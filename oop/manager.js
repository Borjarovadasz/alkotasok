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
     * @callback {ember} // Emberre vonatkozo callback definialasa
     */
    setAddpersonCall(callback){ // Callback fuggveny beallitasa
        this.#addpersoncallback = callback // Privat fuggveny hivatkozas hozzarendelve
    }

     /**
      * 
      * @param {Ember} ember // Ember tipusu parameter megadasa
      */
    personadd(ember) { // Uj szemely hozzaadasa
        this.#array.push(ember) // Uj szemely hozzaadasa a tombhoz
        this.#addpersoncallback(ember) // Privat callback fuggveny futtatasa az uj szemellyel
    }
}