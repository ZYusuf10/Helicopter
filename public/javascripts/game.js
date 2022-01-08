//Make the game area
let gameArea = document.getElementById("gameArea");
gameArea.style.width="800px";
gameArea.style.height = "500px";


/*add the helicopter and allow it to be thusted upwards. 
  if left allown it will fall to the ground in an accelerating manner.
  */
let copter = document.getElementById("copter");
copter.style.width="100px";

copterPosition =  10;
copterDownwardVelocity = 10
function gravitateDown(){
    copterPosition+=copterDownwardVelocity;
    copterDownwardVelocity += 1;
    copter.style.top = copterPosition+"px";
    if(copterPosition > 450){
        alert("copter crushed. Press Space to hover.");
        clearInterval(gTime);
    }   
}
document.addEventListener('keydown', thrustUp);
function thrustUp(e){
    if(e.keyCode == "32"){
        copterDownwardVelocity = -5;
    }
    if(copterPosition < 10){
        copterPosition = 10;
    }
}
gTime = setInterval(gravitateDown, 100);


//add background objects to mimic moving forward.
let ssArray = [];
ssArray[0] = "/images/ss1.png";
ssArray[1] = "/images/ss2.png";
ssArray[2] = "/images/ss3.png";
ssArray[3] = "/images/ss4.png";
ssArray[4] = "/images/ss4.png";
ssArray[5] = "/images/ss5.png";
ssArray[6] = "/images/ss6.png";
ssArray[7] = "/images/ss7.png";
class background{
    constructor(x, y){
        let elem = document.createElement("img");
        //chooce from skyscraper array images randomly
        const randIndex = Math.floor(Math.random() * ssArray.length);
        elem.src = ssArray[randIndex];
        elem.style.width = "150px";
        elem.style.height = "100px";
        elem.setAttribute("class", "backO");
        gameArea.appendChild(elem);
        elem.style.top = y+"px";
        elem.style.left = x+"px";
        //all background objects move to the left.
        function moveLeft(){
            x-= 1;
            elem.style.left = x+"px";
            
        }
        setInterval(moveLeft, 20);
    }
}
ground = new background(650, 400);
//add a new skyscraper to the background every now and then randomly.
function addBackObject(){
    ground = new background(650, 400);
}
setInterval(addBackObject, 3000);

function restart(){
    //reload the page
    document.location.reload();
}
