const Btn = document.querySelector("#Btn");
const waga = document.querySelector("#waga");
const wzrost = document.querySelector("#wzrost");
const WartoscWskaznika = document.querySelector("#WartoscWskaznika");
const WartoscKategoria = document.querySelector("#WartoscKategoria");

Btn.addEventListener('click', function(event){
    event.preventDefault();

    const wagaP = waga.value;
    const wzrostP = wzrost.value * 0.01;
    const bmi = wagaP / (wzrostP * wzrostP);
    const bmiOkrogle = bmi.toFixed(2);

    let kategoria;
    let kategoriaOpis;

    if (bmiOkrogle < 18.5) {
        kategoria = 1;
    }
    else if (bmiOkrogle >= 18.5 && bmiOkrogle < 25) {
        kategoria = 2;
    }
    else if (bmiOkrogle >= 25 && bmiOkrogle < 30) {
        kategoria = 3;
    }
    else if (bmiOkrogle >= 30 && bmiOkrogle < 35) {
        kategoria = 4;
    }
    else if (bmiOkrogle >= 35 && bmiOkrogle < 40) {
        kategoria = 5;
    }
    else {
        kategoria = 6;
    }

    switch (kategoria) {
        case 1:
            kategoriaOpis = 'Masz niedowagę';
            break;

        case 2:
            kategoriaOpis = 'Masz wagę w normie';
            break;

        case 3:
            kategoriaOpis = 'Masz nadwagę';
            break;

        case 4:
            kategoriaOpis = 'Masz otyłość 1 st.';
            break;

        case 5:
            kategoriaOpis = 'Masz otyłość 2 st.';
            break;

        case 6:
            kategoriaOpis = 'Masz otyłość 3 st.';
            break;
    }

    if (kategoria == 2) {
        WartoscKategoria.style.color = 'green';
    }
    else {
        WartoscKategoria.style.color = 'red';
    }

    WartoscWskaznika.textContent = `Twój BMI = ${bmiOkrogle}`;
    WartoscKategoria.textContent = `${kategoriaOpis}`;
});