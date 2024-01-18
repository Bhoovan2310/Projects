// generate a random color

const randomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let colorId;

const startChangingColor = () => {
    if(!colorId) { /// this is if i press start more than 1 time consicutively
        colorId = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
            console.log(randomColor());
        }, 1000); 
    }
}
const stopChangingColor = () => {
    clearInterval(colorId);
    colorId = null;// this is clean up the value of colorId
    console.log('color Changing has stopped')
    
}


document.querySelector('.start').addEventListener('click', startChangingColor);

document.querySelector('.stop').addEventListener('click', stopChangingColor);
