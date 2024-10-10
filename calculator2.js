let display = document.getElementById('display');
let clear = document.querySelector('[data-clear]');
let deletebtn = document.querySelector('[data-delete]');


//this function is to add numbers to the display div 
function append(number) {
     display.value += number;
};

function special(value) {

    const currentvalue = display.value;

    //checks if the display is empty
    if (currentvalue == "") {
        //if the display is empty, do nothing
        return;
    }

    //this code checks, if the last value, is the last value
    const lastChar = currentvalue.slice(-1);

    if (lastChar === '+' || lastChar === '-' || lastChar === '*'|| lastChar === '/' ) {
        //this function prevents the special characters from being added multiple times to the 
        return;
    }



    // this adds the special characters, if the function passed every parameters
  display.value +=  value;
;}



//this is to empty the display div
clear.addEventListener('click', function () {
     display.value = "";
} );

//this is to delete one value at a time 
deletebtn.addEventListener('click', function () {
 display.value = display.value.toString().slice(0, -1) })

function getrandomcolor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        
    }
    return color;
}

function changebackground() {
    const colordiv = document.getElementById("colordiv");
    setInterval(() => {
       const newcolor = getrandomcolor(); 
        colordiv.style.background = newcolor;
    }, 1000);
}

window.onload = changebackground;