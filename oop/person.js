class Ember{ // Osztaly definialasa Ember neven
    #writer // Privat attributum a szerzo szamara
    #genre // Privat attributum a mufaj szamara
    #title // Privat attributum a cim szamara

    /**
         * Visszaadja a szerzo nevet
         * @returns {string} A szerzo neve  ami  egy string
         */
    get writer() { // a writer privat valtozora
        return this.#writer; // Visszater a privat valtozoval
    }

    /**
     * Visszaadja a mufajt
     * @returns {string} A mufaj neve ami egy string
     */
    get genre() { // a genre privat valtozora
        return this.#genre; // Visszater a privat valtozoval
    }

    /**
     * Visszaadja a cimet
     * @returns {string} A cim ami egy string
     */
    get title() { // a title privat valtozora
        return this.#title; // Visszater a privat valtozoval
    }

    constructor(writer,genre, title) { // Konstruktor metodus az osztalyhoz
        this.#writer = writer // Inicializalja a szerzo attributumot
        this.#genre = genre // Inicializalja a mufaj attributumot
        this.#title  = title // Inicializalja a cim attributumot
    }
}