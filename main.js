let distance = document.getElementById("lenght").value;
let name = document.getElementById("recognition").value;
let kilometerP = 0.21 * distance;

if(document.getElementById("minore").value){
    const priceyoung = kilometerP - ((20/100)*kilometerP);
    console.log(`Il prezzo del biglietto è ${priceyoung}`);
}