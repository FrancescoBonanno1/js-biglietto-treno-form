let distance = document.getElementById("lenght").value;
let name = document.getElementById("recognition").value;
let kilometerP = 0.21 * distance;

if(document.getElementById("minore").value){
    const priceyoung = kilometerP - ((20/100)*kilometerP);
    console.log(`Il prezzo del biglietto è ${priceyoung}`);
}
else if(document.getElementById("vecchio").value){
        const priceold = kilometerP - ((40/100)*kilometerP);
        console.log(`Il prezzo del biglietto è ${priceold}`);
}

let btn = document.getElementById("proceed");
let input = document.getElementsByClassName("calc");