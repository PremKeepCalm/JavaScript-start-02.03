let typLiczba = 10 + 10;

/* typLiczba = '10' + 20 + 10; */  /* jezeli w consoli jest na czarno to jest string, a na niebiesko liczba */
                             /* 102010 - wynik w konsoli. string wszystko bierze */

/* typLiczba = `10 + 10 = ${10 + 10}`; ES6 */  

/* typLiczba = `10 + ` + `10 = ` + (10 + 10);      ES5 */

// typ boolean
/* typLiczba = 4 + 4 === 8;   */

/* console.log(typLiczba); */

// aray

let tablica = ['Michał', 'Inna','Ala ma kota', 'MArtyna', 'Arek'];
tablica[1] = 'Ola ma czarnego kota';
tablica[1] = {imie: 'Ola', ma: 'czarnego kota'};

/* tablica.reverse(); */


tablica.unshift('Ooooops'); // dodajemy element na poczatku;
tablica.shift(); // usuwa element na początku;

tablica.push('Ooooops'); // dodajemy element na poczatku;
tablica.pop();  // usuwamy element na koncu 

tablica.slice(1, 3); //wycina i nie modyfikuje orginalna
/* tablica.splice(1, 3); */ // modyfikuje orginalna

tablica.splice(2, 1, 'Daria');

let tablicaLiczba = [1, 76, 338, -1, 0];

tablicaLiczba = tablicaLiczba.sort((liczba1, liczba2) => {
    return liczba1 - liczba2;
})
console.log(tablicaLiczba); 




console.log(tablica);

/* let przykładowyObjekt = {id: 3, imie: 'Kacper'};

console.log(przykładowyObjekt.id, przykładowyObjekt.imie); */
