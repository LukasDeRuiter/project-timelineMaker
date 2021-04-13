let barCounter = 1;
let barArray = [];
let lengthOfTheCanvas = [];
 /*  add array for colors  */
const _containerHoldingBars = document.getElementById('containerHoldingBarsID');

document.getElementById('addBtnID1').addEventListener('click', function(){
    let newBar1 = document.getElementById('bar1ID');
    let barInputEnd1 = document.getElementById('endYear1');
    let barInputStart1 = document.getElementById('startYear1'); 
    let yearsInsideBar1 = barInputEnd1.value - barInputStart1.value;
    lengthOfTheCanvas.push(yearsInsideBar1);
    barArray.push(newBar1);
    newBar1.style.display =  "none";
})

document.getElementById('newBarBtnID').addEventListener('click',function(){
    barCounter += 1;
    let newBar = document.createElement("div");
    let newBarInputStartLabel = document.createElement("label");
    let newBarInputStart = document.createElement("input");
    let newBarInputEndLabel = document.createElement("label");
    let newBarInputEnd = document.createElement("input");
    let newBarInputColorLabel = document.createElement("label");
    let newBarInputColor = document.createElement("input");
    let newBarInputBtn = document.createElement("button");
    newBar.classList.add("bar");
    newBarInputStart.classList.add("inputYear");
    newBarInputEnd.classList.add("inputYear");
    newBarInputColor.classList.add("inputColor");
    newBarInputBtn.classList.add("inputBtn");
    newBarInputStart.setAttribute('type', 'number');
    newBarInputEnd.setAttribute('type', 'number');
    newBarInputColor.setAttribute('type', 'text');
    newBarInputStartLabel.innerHTML = "What is the starting year of this period?";
    newBarInputEndLabel.innerHTML = "What is the ending year of this period?";
    newBarInputColorLabel.innerHTML = "What color would you like the bar to be?";
    newBarInputBtn.innerHTML = "Add to canvas";
    newBar.setAttribute('ID', `'bar${barCounter}'`);
    newBarInputStart.setAttribute('ID', `startYear${barCounter}`);
    newBarInputEnd.setAttribute('ID', `endYear${barCounter}`);
    newBarInputColor.setAttribute('ID', `chosenColor${barCounter}`);
    newBarInputBtn.setAttribute('ID', `addBtnID${barCounter}`);

    newBarInputBtn.addEventListener('click', function(){
        barArray.push(newBar);
        let yearsInsideBar = newBarInputEnd.value - newBarInputStart.value;
        lengthOfTheCanvas.push(yearsInsideBar);
        newBar.style.display =  "none";

    })
    newBarInputStartLabel.setAttribute('for', `barInputStart${barCounter}`);
    newBarInputEndLabel.setAttribute('for', `barInputEnd${barCounter}`);
    newBarInputColorLabel.setAttribute('for', `chosenColor${barCounter}`);
    newBar.appendChild(newBarInputStartLabel);
    newBar.appendChild(newBarInputStart);
    newBar.appendChild(newBarInputEndLabel);
    newBar.appendChild(newBarInputEnd);
    newBar.appendChild(newBarInputColorLabel);
    newBar.appendChild(newBarInputColor);
    newBar.appendChild(newBarInputBtn);
    _containerHoldingBars.appendChild(newBar);
})

document.getElementById('createCanvasBtnID').addEventListener('click', function(){
    console.log(barArray);
    console.log(lengthOfTheCanvas);

    let canvas = document.getElementById('theTimelineCanvas');
    let ctx = canvas.getContext('2d');
    canvas.height = "150";  
    let  sum = 0;
    for(let i = 0; i < lengthOfTheCanvas.length; i++){
        sum += lengthOfTheCanvas[i];
    }
    console.log(sum);
    canvas.width = `${sum * 10}`; 

    /* make a for loop out of this   */
    ctx.fillStyle = 'orange';
    ctx.fillRect(0, 0, 50, 50);
})