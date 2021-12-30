const randomize = (length)=> {

    const tmp = [];

    min = Math.ceil(0);
    max = Math.floor(length);
    let NumbersGenerated = 0;
    while (NumbersGenerated < 26){
        let number = Math.floor(Math.random() * (max - min)) + min;
        if(!tmp.includes(number)){
            tmp.push(number);
            NumbersGenerated++;
        }
    }
    return tmp;
}

const CheckToWin = (buttons, array, xIndex, yIndex) =>{
    
    array[xIndex][yIndex] = true;
    buttons[xIndex * 5 + yIndex].classList.add("plate__clicked");



}

window.onload = ()=>{
    
    let ArrayOfPlatesValues = new Array(5);
    for(let i = 0; i < 5; i++){
        ArrayOfPlatesValues[i]= new Array(5);
    }
   
    Plates = document.querySelectorAll(".plate");
        
    let PlateQuotes = randomize(quotes.length);

    Plates.forEach((elem, i, obj)=>{
        if(i != 12){
        elem.innerHTML = quotes[PlateQuotes[i]];
    }})
    
    for (let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++)
        {

            if(i == 2 && j == 2){
                continue;
            }

            Plates[i*5 + j].addEventListener("click", ()=>{CheckToWin(Plates, ArrayOfPlatesValues, i,j)})
        }
    }
}

