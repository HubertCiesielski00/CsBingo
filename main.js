
const randomize = (length)=> {

    const tmp = [];

    min = Math.ceil(0);
    max = Math.floor(length);
    let NumbersGenerated = 0;
    while (NumbersGenerated < length){
        let number = Math.floor(Math.random() * (max - min)) + min;
        if(!tmp.includes(number)){
            tmp.push(number);
            NumbersGenerated++;
        }
    }
    return tmp;


}

window.onload = ()=>{
    const Plates = document.querySelectorAll(".plate");

    let PlateQuotes = randomize(quotes.length);

    Plates.forEach((elem, i, obj)=>{
        elem.innerHTML = quotes[PlateQuotes[i]];
    })
}
