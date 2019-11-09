document.addEventListener('DOMContentLoaded', init);

function init(){

    let btn = document.createElement('BUTTON');
    btn.textContent = "start";

    btn.style.borderRadius = "50%";
    btn.style.padding = "100px";
    btn.style.border = "none";
    btn.style.backgroundColor = getRandomColor();
    btn.style.color = "white";
    btn.id = "btn";
    
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

    function applyColor(ev){
        // console.log(ev.target)
        btn.style.backgroundColor = getRandomColor();
        btn.textContent = "";
        btn.style.padding = getRandomSize();
    }

      document.getElementById('btn').addEventListener("click", applyColor);

      getRandomSize();
    }

    

