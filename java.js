document.addEventListener('DOMContentLoaded', init);

function init(){

    let btn = document.createElement('BUTTON');
    let p = document.createElement('p');


    btn.textContent = "start";
    btn.style.borderRadius = "50%";
    btn.style.padding = "100px";
    btn.style.border = "none";
    btn.style.backgroundColor = getRandomColor();
    btn.style.color = "white";
    btn.style.outline = "none";

    btn.id = "btn";
    
    p.textContent = 0;

    document.body.appendChild(p);
    document.body.appendChild(btn);


    function getRandomColor(ev) {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    function getRandomSize(){
        let max = 100;
        let min = 20;
        let random = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(random);
        return random + "px";
    }  

    function getRandomLocationWidth(){
        let max = 300;
        let min = 0;
        let random = Math.floor(Math.random() * (max - min + 1) + min);
        console.log("width" + " " + random);
        return random + "px";
    } 

    function getRandomLocationHeight(){
      let max = 600;
      let min = 0;
      let random = Math.floor(Math.random() * (max - min + 1) + min);
      console.log("height" + " " + random);
      return random + "px";
  } 

    function applyColor(ev){
        // console.log(ev.target)
        btn.style.backgroundColor = getRandomColor();
        btn.textContent = "";
        btn.style.padding = getRandomSize();
        btn.style.marginLeft = getRandomLocationWidth();
        btn.style.marginTop = getRandomLocationHeight();
        btn.style.outline = "none";
    }

    document.getElementById('btn').addEventListener("click", applyColor);
  }

    

