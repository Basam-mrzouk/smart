const allcounter=document.querySelectorAll(".counter");

allcounter.forEach(counter =>(
    counter.addEventListener("click",()=>{
        let counterCont = parseInt(counter.innerHTML);
        if(counterCont > 0){
            counterCont -- ;
            counter.innerHTML = counterCont;
            if(counterCont===0){
                counter.classList.add("finish")
            }
        }
    })
))