const bottonePiu= document.createElement("button");
const bottoneReset= document.createElement("button");
const bottoneMeno= document.createElement("button");
const div= document.querySelector('#container');
const containerCounter= document.querySelector('#counter');
const counter=document.createElement("p");

function CreazioneBottoni(bottonePiu, bottoneReset, bottoneMeno, div){
bottonePiu.textContent='+';
bottoneReset.textContent='Reset';
bottoneMeno.textContent='-';
div.appendChild(bottonePiu);
div.appendChild(bottoneReset);
div.appendChild(bottoneMeno);
bottonePiu.style.width="50px";
bottoneMeno.style.width="50px";
bottonePiu.style.borderRadius="10px";
bottoneMeno.style.borderRadius="10px";
bottoneReset.style.borderRadius="10px";
}

function InitCounter(counter){
counter.textContent='0';
containerCounter.appendChild(counter);
}

CreazioneBottoni(bottonePiu, bottoneReset, bottoneMeno, div);

InitCounter(counter);

let i=0;
bottonePiu.addEventListener('click', (e) =>{
    i++;
    counter.textContent=i;
})
bottoneReset.addEventListener('click', (e) =>{
    i=0;
    counter.textContent=i;
})
bottoneMeno.addEventListener('click', (e) =>{
    i--;
    counter.textContent=i;
})

