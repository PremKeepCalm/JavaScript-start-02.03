let uzytkownicy = [
    {
        imie: 'Kaja',
        nazwisko: 'Nowak'
    }, {
        imie: 'Karol',
        nazwisko: 'Kowalski'
    }, {
        imie: 'Mariusz',
        nazwisko: 'Witowski'
    }
];

console.log(uzytkownicy[0].imie, uzytkownicy[1].imie, uzytkownicy[2].imie);

//petla for

// for (let index = 0; index < uzytkownicy.length; index++) {
//     console.log(uzytkownicy[index].imie);           // 
// }

//while
// let numer = 10;

// while (numer > 0) {
//     console.log(numer);  //bardziej do liczb
//     numer--;
// }

//petla forEach 

uzytkownicy.forEach((element, index) => {
    if (element.imie === 'Kaja') {
        element.kolorOczu = 'niebieski';
      } else if (element.imie === 'Karol') {
        element.kolorOczu = 'piwny'; 
      } else if (element.imie === 'Mariusz') {
        element.kolorOczu = 'zielony';
      }
});


// petla do .. while ()

let numer2 = 5;
do {
    console.log(numer2)
} while (numer2-- > 3);


console.log(uzytkownicy);



