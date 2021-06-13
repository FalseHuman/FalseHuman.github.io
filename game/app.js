const startBtn = document.querySelector('.start')
const screens = document.querySelectorAll('.screen')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#608712', '#DC649F', '#DF3D3D', '#DFD93D']
const timeBtn = document.querySelector('#time-list')
const spanTime = document.querySelector('#time')
const board = document.querySelector('#board')
let time = 0
let count = 0



startBtn.addEventListener('click', (event) => {
    //event.preventDefault()
    screens[0].classList.add('up')

})

timeBtn.addEventListener('click', (event)=>{
    if (event.target.classList.contains('time-btn')){
       time = parseInt(event.target.getAttribute('data-time'))
       screens[1].classList.add('up')
       startGame()
    }
})

board.addEventListener('click', event =>{
    if (event.target.classList.contains('circle')){
        count ++
        event.target.remove()
        circleRandom()
    }
})


function startGame(){
    setInterval(decTime, 1000)
    setTime(time)
    circleRandom()
}

function decTime() {
    if ( time == 0){
        finishGame()
    }else {
        let current = -- time
        if (current < 10){
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(time) {
    spanTime.innerHTML = `00:${time}`

}
function finishGame() {
    spanTime.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Ваш счёт: <span class="time">${count}</span><a href="https://falsehuman.github.io/game/#"> Начать заново</a></h1>`
}

function circleRandom(){
    const circle = document.createElement('div')
    const size = sizeCircle(10,80)
    const {width, height} = board.getBoundingClientRect()
    const x = sizeCircle(0, width - size)
    const y = sizeCircle(0, height - size)
    circle.classList.add('circle')
    circle.style.background = getRandomColor(colors)
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    board.append(circle)
}

function sizeCircle(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

function getRandomColor(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}
