let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".copycode")
let rgb1 = "#000"
let rgb2 = "#fff"


/* this variable create random hexvalues */

const hexvalues = () => {
    let myHexvalue = "0123456789abcdef"
    let colors = "#";
    for(let i = 0; i<6; i++){
       colors = colors +(myHexvalue[Math.floor(Math.random()* 16)])
    }
    return colors;
}


/* button 1 here dynamically change hexvalues when user click on button 1 */

const handleButton1 = () => {
    rgb1 = hexvalues();
   btn1.innerText = rgb1;
   document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
   copyDiv.innerHTML = `background-image: linear-gradiant(to right ${rgb1}, ${rgb2})`;
}


/*  button 2 here dynamically change hexvalues when user click on button 2 */

const handleButton2 = () => {
    rgb2 = hexvalues();
   btn2.innerText = rgb2;
   document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2}`;
   copyDiv.innerHTML = `background-image: linear-gradiant(to right ${rgb1}, ${rgb2})`;
}



btn1.addEventListener("click", handleButton1)
btn2.addEventListener("click", handleButton2)


/* function to create copy text */
copyDiv.addEventListener("click", () => {
    navigator.clipboard.writeText(copyDiv.innerText);
});
