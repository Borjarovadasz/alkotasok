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
    /**
     * 
     * @returns eredmeny
     */
    generateExportString(){ // Letrehoz a fuggvenyt ami visszater a export stringgel
        const eredmeny = ['writer;title;genre'] // Letrehoz a tombot fejlec sorral
        for(const mu of this.#array){ // Vegigiteral a array elemein
            eredmeny.push(`${mu.writer};${mu.genre};${mu.title}`); // Sorokat osszefuz writer genre title mezokbol
        }
        return eredmeny.join('\n'); // Osszefuz a tomb elemeit uj sorral elvalasztva
    }
    
}

