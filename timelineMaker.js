let barCounter = 1; // this int is used to determine how much bars should be made.
let barArray = []; // here we store the bar objects
let lengthOfTheCanvas = []; // here we store the total length of the timeline in years
let chosenColorArray = []; // here we store the chosen colors
let endYearsArray = []; // we use this to determine where to place the endyears seen in the timeline
let pixelsPerYear = 10; // this int determines the length per year
let textInputArray = []; // here we store the text per year
let textInBlocks = false; // here we store the boolean that determines whether or not text should be in the bars
const _containerHoldingBars = document.getElementById('containerHoldingBarsID');


// as the first bar is already on the screen when the user starts the webpage, this evenhandler/function is made specially for the first bar
document.getElementById('addBtnID1').addEventListener('click', function(){
    let newBar1 = document.getElementById('bar1ID');
    let bar1Color = document.getElementById('chosenColor1');
    let barInputEnd1 = document.getElementById('endYear1');
    let barInputStart1 = document.getElementById('startYear1'); 
    let textinBar1 = document.getElementById('textInput1')
    let yearsInsideBar1 = barInputEnd1.value - barInputStart1.value;
    lengthOfTheCanvas.push(yearsInsideBar1);
    barArray.push(newBar1);
    chosenColorArray.push(bar1Color.value);
    endYearsArray.push(barInputEnd1 .value);
    textInputArray.push(textinBar1.value);
    newBar1.style.display =  "none";
})

// if the user clicks on the addbarBtn, here we create a new obj/elem for a new bar
document.getElementById('newBarBtnID').addEventListener('click',function(){
    barCounter += 1;
    let newBar = document.createElement("div");
    let newBarInputStartLabel = document.createElement("label");
    let newBarInputStart = document.createElement("input");
    let newBarInputEndLabel = document.createElement("label");
    let newBarInputEnd = document.createElement("input");
    let newBarInputColorLabel = document.createElement("label");
    let newBarInputTextLabel = document.createElement("label");
    let newBarInputColor = document.createElement("input");
    let newBarInputText = document.createElement("input");
    let newBarInputBtn = document.createElement("button");
    newBar.classList.add("bar");
    newBarInputStart.classList.add("inputYear");
    newBarInputEnd.classList.add("inputYear");
    newBarInputColor.classList.add("inputColor")
    newBarInputTextLabel.classList.add("inputTextLabel");
    newBarInputText.classList.add("inputText");
    newBarInputBtn.classList.add("inputBtn");
    newBarInputStart.setAttribute('type', 'number');
    newBarInputEnd.setAttribute('type', 'number');
    newBarInputText.setAttribute('type', 'text');
    newBarInputColor.setAttribute('type', 'text');
    newBarInputStartLabel.innerHTML = "What is the starting year of this period?";
    newBarInputEndLabel.innerHTML = "What is the ending year of this period?";
    newBarInputColorLabel.innerHTML = "What color would you like the bar to be?";
    newBarInputTextLabel.innerHTML = "What text do you want inside the bar?";
    newBarInputBtn.innerHTML = "Add to canvas";
    newBar.setAttribute('ID', `'bar${barCounter}'`);
    newBarInputStart.setAttribute('ID', `startYear${barCounter}`);
    newBarInputText.setAttribute('ID', `textInput${barCounter}`);
    newBarInputEnd.setAttribute('ID', `endYear${barCounter}`);
    newBarInputColor.setAttribute('ID', `chosenColor${barCounter}`);
    newBarInputBtn.setAttribute('ID', `addBtnID${barCounter}`);

    newBarInputBtn.addEventListener('click', function(){
        barArray.push(newBar);
        chosenColorArray.push(newBarInputColor.value);
        let yearsInsideBar = newBarInputEnd.value - newBarInputStart.value;
        lengthOfTheCanvas.push(yearsInsideBar);
        endYearsArray.push(newBarInputEnd.value);
        textInputArray.push(newBarInputText.value);
        newBar.style.display =  "none";

    })
    newBarInputStartLabel.setAttribute('for', `barInputStart${barCounter}`);
    newBarInputTextLabel.setAttribute('for', `textInput${barCounter}`);
    newBarInputEndLabel.setAttribute('for', `barInputEnd${barCounter}`);
    newBarInputColorLabel.setAttribute('for', `chosenColor${barCounter}`);
    newBar.appendChild(newBarInputStartLabel);
    newBar.appendChild(newBarInputStart);
    newBar.appendChild(newBarInputEndLabel);
    newBar.appendChild(newBarInputEnd);
    newBar.appendChild(newBarInputColorLabel);
    newBar.appendChild(newBarInputColor);
    newBar.appendChild(newBarInputTextLabel);
    newBar.appendChild(newBarInputText);
    newBar.appendChild(newBarInputBtn);
    _containerHoldingBars.appendChild(newBar);
})

// here we allow the user to select how many pixel per year should be in the timeline
document.getElementById('10').addEventListener('click', function(){
    pixelsPerYear = 10;
    console.log(pixelsPerYear);
});
document.getElementById('20').addEventListener('click', function(){
    pixelsPerYear = 20;
    console.log(pixelsPerYear);
});
document.getElementById('40').addEventListener('click', function(){
    pixelsPerYear = 40;
    console.log(pixelsPerYear);
});
document.getElementById('80').addEventListener('click', function(){
    pixelsPerYear = 80;
    console.log(pixelsPerYear);
});


// here we allow the user to choose between text or no text in the blocks
document.getElementById('textInBlocks').addEventListener('click', function(){
    textInBlocks = true;
    let labelArray = document.getElementsByClassName('inputTextLabel');
    let textArray = document.getElementsByClassName('inputText');
    for(let i = 0; i < textArray.length; i++){
        labelArray[i].style.display = "flex";
        textArray[i].style.display = "flex";
    }
})

document.getElementById('noTextInBlocks').addEventListener('click', function(){
    textInBlocks = false;
    let labelArray = document.getElementsByClassName('inputTextLabel');
    let textArray = document.getElementsByClassName('inputText');
    for(let i = 0; i < textArray.length; i++){
        labelArray[i].style.display = "none";
        textArray[i].style.display = "none";
    }
})

// here we start creating the canvas, the animations are there to smoothen the experience
document.getElementById('createCanvasBtnID').addEventListener('click', function(){
    let barContainer = document.getElementById('bigBarContainerID');
    let titleContainer = document.getElementById('titleContainerID');
    titleContainer.style.animation = "dissappear 2s 1";
    barContainer.style.animation = "dissappear 2s 1";
    barContainer.onanimationend = function (){
        barContainer.style.display = "none";
        titleContainer.style.display = "none";
    }
    let buttonContainer = document.getElementById('btnAndOptionsContainer');
    let loadingContainer = document.getElementById('loadingContainerID');
    buttonContainer.style.animation = "dissappear 2s 1";
    buttonContainer.onanimationend = function (){
        buttonContainer.style.display = "none";
        loadingContainer.style.display = "flex";
        loadingContainer.style.animation = "appear 2s 1";
        loadingContainer.onanimationend = function(){
        console.log('yes2');
            let loadingBar = document.getElementById('loadingBar2ID');
            loadingBar.style.animation = "animateLoadingBar 5s linear 1";
            setTimeout(function (){
                document.getElementById('loadingTextID').innerHTML = "Loading complete!"
            }, 4000)
            loadingBar.onanimationend = function (){
                loadingContainer.style.animation = "dissappear 2s 1";
                loadingContainer.onanimationend = function(){
                    loadingContainer.style.display = "none";
                    let theCanvas = document.getElementById('canvasContainerID');
                    theCanvas.style.display = "flex";
                    theCanvas.style.animation= "appear 1s 1";
                }
            }
        }
    }

    let canvas = document.getElementById('theTimelineCanvas');
    let ctx = canvas.getContext('2d');
    canvas.height = "100";  
    let  sum = 0;
    for(let i = 0; i < lengthOfTheCanvas.length; i++){
        sum += lengthOfTheCanvas[i];
    }
    canvas.width = `${40 + (sum * pixelsPerYear)}`; 

    ctx.fillStyle = "black";
    ctx.font = "20px serif";
    ctx.strokeText(`${document.getElementById('startYear1').value}`, 10, 25);
    let  sum2 = 0;
    for(let i = 0; i < barArray.length; i++){
        ctx.fillStyle = `${chosenColorArray[i]}`;
        ctx.fillRect(`${20 + (sum2 * pixelsPerYear)}`, 50, `${lengthOfTheCanvas[i] * pixelsPerYear}`, 50);
        if(textInBlocks == true){
            ctx.font = "20px serif";
            ctx.fillStyle = "black";
            ctx.strokeText(`${textInputArray[i]}`,`${20 + (sum2 * pixelsPerYear)}` , 75, `${lengthOfTheCanvas[i] * pixelsPerYear}`);
        }
        sum2 += lengthOfTheCanvas[i];
        ctx.fillStyle = "black";
        ctx.font = "20px serif";
        ctx.strokeText(`${endYearsArray[i]}`, `${(sum2 * pixelsPerYear)- 10}`, 25);    

    }
})

