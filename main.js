const WasAlreadyDrawn = (param) =>{
    
    //code me
    
}

const GetRandomQuote = (max)=> {
    min = Math.ceil(0);
    max = Math.floor(max);
    let index = Math.floor(Math.random() * (max - min)) + min;
    return quotes[index];
  }

window.onload = ()=>{
    const Plates = document.querySelectorAll(".plate");

    Plates.forEach((elem, i, obj)=>{
        elem.innerHTML = GetRandomQuote(obj.length);
    })
}
