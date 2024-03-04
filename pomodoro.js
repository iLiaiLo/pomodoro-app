let elem=document.querySelector(".container_menu");
    let content=document.querySelector(".content");
    let image=document.querySelector("#image");
    image.addEventListener("click",hide)
    elem.addEventListener("click",show);
    function show(){
        content.style.marginLeft=`${-200}px`
    }
    function hide(){
        content.style.marginLeft=`0px`
    }

    let set_sec=document.getElementById("set_min");
    let pomo_number=document.getElementById("pomo_number");
    let set_break=document.getElementById("set_break");
    let container=document.querySelector(".circle_container");
    let set_button=document.querySelector(".set_properties");
    let res_button=document.querySelector(".reset_button");
   
    
    
    let Time=document.querySelector(".time");
    let b=document.querySelector(".break");
    let break_request=document.querySelector(".break_request")
    let start_request=document.querySelector(".start_request");
    let start_after_break=document.querySelector(".start_after_break");
    const soundfile=new Audio();
    soundfile.src="alarm.mp3";

   
//-----------------------------------------------------------------------------------------------

 let flag=false;
 var fl=false;
 let time_limit;

 function func(){
    index=0;
    container.innerHTML = "";
for (let i = 0; i < parseInt(pomo_number.value); i++) {
const div = document.createElement("div");
container.appendChild(div);
fl=true;
}
 }
 pomo_number.addEventListener("change",func);
 set_button.addEventListener("click",set_properties);

 let number_of_pomos=parseInt(pomo_number.value);



 function set_properties(){

    
        time_limit=parseInt(set_sec.value);
        time_limit*=60;
        var seconds=time_limit%60;
        var minutes=Math.floor(time_limit/60);
        Time.innerHTML=minutes+":"+seconds.toString().padStart(2,"0");
        time_break=parseInt(set_break.value);
        time_break*=60
        number_of_pomos=parseInt(pomo_number.value);
        let rejex=/^[1-9]\d*$/;

        if(fl==true && (rejex.test(set_break.value)==true && parseInt(set_break.value)>=1 && parseInt(set_break.value)<=5) && (rejex.test(set_sec.value)==true && parseInt(set_sec.value)>=1 && parseInt(set_sec.value)<=15)){
            Time.addEventListener("click",start);
        }
        Time.addEventListener("mouseover", () => {
            Time.classList.add("time-hover")
          });
          Time.addEventListener("mouseout", () => {
            Time.classList.remove("time-hover");
          });
    }
    function playmus(){
        soundfile.play()
     }
  

    let index=0;

    //---------------------------------------------------------------------------------
    function start(){

  
        set_sec.readOnly=true;
        set_break.readOnly=true;

        pomo_number.removeEventListener("change",func);
        set_button.removeEventListener("click",set_properties);
    

    flag=!flag;
    let timer=setInterval(countdown,1000);

    
    setTimeout(()=>{
            start_request.style.display="none";
            start_after_break.style.display="none";},1000)
    
            function f_set(){
            b.style.display="block";
            break_request.style.display="flex";
            start_request.style.display="none";
            start_after_break.style.display="none";
            }
    function countdown(){
        
        if(flag==false){
            clearInterval(timer);
        }
        else{
        var seconds=time_limit%60;
        var minutes=Math.floor(time_limit/60);
        Time.innerHTML=minutes+":"+seconds.toString().padStart(2,"0");
        time_limit--;
        }
        if(time_limit<0){
            
            flag=false;
            clearInterval(timer);
            time_limit=parseInt(set_sec.value);
            time_limit*=60; 
            Time.removeEventListener("click",start);

            playmus()
            
            if(index==number_of_pomos-1){
                clearTimeout(f_set);
                pomo_number.addEventListener("change",func);
                set_button.addEventListener("click",set_properties);
                set_sec.readOnly=false;
                set_break.readOnly=false;
            }
            else{
                setTimeout(f_set,1000);
            }
            

            if(index<number_of_pomos){
                container.children[index].style.background="lightgreen";
            }
            index++
            }  
    }   
    countdown()
}
   




let time_break;

function break_timer(){
 
   

    let timer=setInterval(countdown_break,1000);

    function countdown_break(){
        let start_request=document.querySelector(".start_request");
        let start_after_break=document.querySelector(".start_after_break");

        setTimeout(()=>{b.style.display="none";
        break_request.style.display="none";},1000)

       
        var seconds=time_break%60;
        var minutes=Math.floor(time_break/60);
        Time.innerHTML=minutes+":"+seconds.toString().padStart(2,"0");
        time_break--;
        if(time_break<0){
            clearInterval(timer);
            playmus();
            setTimeout(()=>{b.style.display="none";
            break_request.style.display="none";
            start_request.style.display="flex";
            start_after_break.style.display="block";},1000)
            setTimeout(()=>{Time.addEventListener("click",start)},1000)
            time_break=parseInt(set_break.value);
            time_break*=60;
            

        }
        
    }

    countdown_break()
    
}

var break_listener=function(){
break_timer();
b.removeEventListener("click",break_listener);
}
b.addEventListener("click",break_timer)

var listener = function() {
start();
start_after_break.removeEventListener("click", listener);
};

start_after_break.addEventListener("click", start);






