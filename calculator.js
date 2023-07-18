 let sound1=new Audio();
sound1.src="sounds/sound1.mp3";
let sound2=new Audio();
sound2.src="sounds/sound2.wav";
input=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');
let string="";
let arr=Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            input.value = string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
        string += e.target.innerHTML;
        input.value = string;
        }
    })
});