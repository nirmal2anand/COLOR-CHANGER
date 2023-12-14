document.getElementById('colorButton').addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
    
    const randomColor = getRandomColor();


    document.body.style.backgroundColor = randomColor;
}

function getRandomColor() {

    return '#' + Math.floor(Math.random()*16777215).toString(16);
}
