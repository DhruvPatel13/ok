const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".second-hand");

setInterval(() => {
    let currTime = new Date();
    let hour = currTime.getHours(); 
    let minutes = currTime.getMinutes(); 
    let seconds = currTime.getSeconds();

    let hoursRotation = 30 * hour + minutes / 2; 
    let minRotation = 6 *  minutes; 
    let secRotation = 6 * seconds;
    
    hourHand.style.transform = `rotate(${hoursRotation}deg)`;
    minHand.style.transform = `rotate(${minRotation}deg)`;
    secHand.style.transform = `rotate(${secRotation}deg)`;
}, 1000);