
// prendiamo gli elementi dal DOM
const dom_FOR_JS = document.querySelector('#for_js > :empty');
const dom_WHILE_JS = document.querySelector('#while_js > :empty');

// creiamo una lista di tipo array gia ordinata con '.sort()'
const LISTA_SPESA = ['5 loaves of bread', '2kg pasta', '3 bottles of tomato juice', '3kg tomatoes', '1kg carrots', '3kg potatoes', 'butter', '1.5kg meat', '3 packs of salad', '2L oil', 'vinegar', '3 bax of water', '2 packs of sunflower seeds', '3 packs popcorn'].sort();


// inseriamo nel dom_for_js la stringa fatta dentro alla funzione che chiameremo
for (let f = 0; f < LISTA_SPESA.length; f++) {
    // nel elemento dom scelto inseriamo più volte la funzione con l'indice del loop presente
    dom_FOR_JS.innerHTML += elementDOM(f);
}


// inseriamo nel dom_while_js la stringa fatta dentro alla funzione che chiameremo
let w = 0;
while (w < LISTA_SPESA.length) {
    // nel elemento dom scelto inseriamo più volte la funzione con l'indice del loop presente
    dom_WHILE_JS.innerHTML += elementDOM(w);
    w++;
}


// funzione che vera presa per ogni loop con un valore da inserire = al indice del loop
function elementDOM (index) {

    // creaiamo una nuova variabile per essere usata come classe per l'elemento che creiamo
    let color = 'white';
    // SE l'indice e divisibile per 2 con resto di 0 = cioè pari
    if(index % 2 === 0){
        // cambiamo valore della variabile
        color = 'azure';
    }

    // creaiamo un elemento per DOM di tipo stringa che vera inserita più volte
    const element_DOM_create = `
    <li class='${color}'>
        <span class='colore_ol'>
            ${index + 1}:
        </span> 
        ${LISTA_SPESA[index]}
    </li>
    `;

    // ritorniamo alla funzione il nostro risultato che ci serve per i loop
    return element_DOM_create;
}