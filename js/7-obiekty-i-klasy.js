class Osoba {
    constructor(name, surname) {
        this.baseName = name;
        this.baseSurname = surname;
    }

    przedstawOsobe() {
        return `Mam na imię ${this.baseName} ${this.baseSurname}`;
    }
}
let maks = new Osoba('Maks', 'Kowalski');
maks.kolorOczu = 'niebieskie'; 

maks.jakiJestKolorOczu = () => {
    return this.kolorOczu;
}
console.log(maks.przedstawOsobe());
/* console.log(maks.jakiJestKolorOczu()); */
