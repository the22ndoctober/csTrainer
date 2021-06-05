let box = document.querySelector('.chess-container')
let counter = document.createElement('h1')
let count = 0
let div = document.createElement('div')
let currentInterval;
let input = document.querySelector('.input')
div.style.position = 'absolute'
div.style.width = '100px'
div.style.color = '#fff'
div.style.backgroundColor = 'gray'
div.style.fontSise = '14px' 
div.classList.add('trans')

counter.style.fontSize = '34px'
document.querySelector('.wrapper').appendChild(counter)
counter.innerHTML = 'Score: 0'

box.addEventListener('mousemove', cordinatesCreator)
box.addEventListener('mouseover', addDiv)
box.addEventListener('mouseout', rmvDiv)

function rmvDiv(target){
  box.removeChild(box.querySelector('div'))
}

function addDiv(target){
  box.appendChild(div)
}

function cordinatesCreator(target){
  box.appendChild(div)
  let offset = {x: parseInt(box.getBoundingClientRect().left, 10)-pageXOffset, 
                y: parseInt(box.getBoundingClientRect().top, 10)-pageYOffset} 
  this.x = target.clientX - offset.x
  this.y = target.clientY - offset.y
  div.style.top = `${this.y}px`
  div.style.left = `${this.x}px`
  div.innerHTML = `x: ${this.x} | y: ${this.y}` 
}


function circleSet(){
  if(box.querySelector('span')){
    box.querySelector('span').remove()
  }
  let circle = document.createElement('span')
  circle.style.width = '40px'
  circle.style.height = '40px'
  circle.style.position = 'absolute'
  circle.style.display = 'block'
  box.appendChild(circle)
  let boxInfo = box.getBoundingClientRect()
  let circleInfo = circle.getBoundingClientRect()
  let size = {width: parseInt(boxInfo.width,10), height: parseInt(boxInfo.height,10)}
  let offset = {x: parseInt(circleInfo.width,10)/2, y: parseInt(circleInfo.height,10)/2}
  circle.style.top = `${size.height/2-offset.y}px`
  circle.style.left = `${size.width/2-offset.x}px`
  circle.style.borderRadius = '100%'
  circle.style.background = 'red'
  return circle
}
circleSet()
let ms = 0
function setRandCircle(){
  if(box.querySelector('span')){
    box.querySelector('span').remove()
  }
  let x = Math.random() * (360 - 40) + 40;
  let y = Math.random() * (360 - 40) + 40;
  let circle = circleSet()
  circle.classList.add('circle')
  circle.addEventListener('click', ()=>{
    counter.innerHTML = `Score: ${++count}`
    clearInterval(currentInterval)
    setRandCircle()
    currentInterval = setInterval(()=>{
      setRandCircle()
    }, ms)   
  })
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  box.appendChild(circle)
}
document.querySelector('.btn').addEventListener('click', ()=>{
  clearInterval(currentInterval)
  ms = input.value
  currentInterval = setInterval(()=>{
    setRandCircle()
  }, ms)
})
document.querySelector('.stop').addEventListener('click', ()=>{
  circleSet()
  clearInterval(currentInterval)
})

input.value = 800
ms = input.value
input.oninput = ()=>{
  if(input.value > 1000){
    input.value = 1000
  }
  if(input.value < 0){
    input.value = 0
  }
  ms = input.value
}



















// let chess = document.querySelector('.chess-container')
// for (let k = 0; k < 8; k++) {
//   let rows = document.createElement('div')
//   rows.classList.add('rows')
//   for (let i = 0; i < 8; i++) {
//     let box = document.createElement('div')
//     box.classList.add('box')
//     if(k%2 == 0){
//       if(i%2 == 0){
//         box.classList.add('box-black')
//       }
//       else{
//         box.classList.add('box-white')
//       }
//     }
//     else{
//       if(i%2 != 0){
//         box.classList.add('box-black')
//       }
//       else{
//         box.classList.add('box-white')
//       }
//     }
    
//     rows.appendChild(box)
//   }
//   chess.appendChild(rows)
// }
// document.querySelectorAll('.box').forEach((box)=>{
//   box.onclick = function (param) {
//     let active = document.querySelector('.active')
//     if(active){
//       active.classList.remove('active')
//     }
//     this.classList.toggle('active')
//     document.querySelectorAll('.active-2').forEach(el=>el.classList.remove('active-2'))
//     let x = searchPosition(this)[0]
//     let y = searchPosition(this)[1] 
//     function changeColor(target) {
//       if(target){       
//         target.classList.toggle('active-2')
//       }
//     } 
//     let rows = document.querySelectorAll('.rows')
//     changeColor(rows[y+1].children[x])
//     changeColor(rows[y+1].children[x-2])
//     changeColor(rows[y-3].children[x])
//     changeColor(rows[y-3].children[x-2])   
//   } 
// })
// function searchPosition(elem) {
//   let rows = elem.parentElement
//   let x = rows.querySelectorAll('.box').entries(box=>box === elem) + 1
//   let y = Array.from(rows.parentElement.querySelectorAll('.rows')).findIndex(row=>row === rows) + 1
//   console.log(x)
//   console.log(y)
//   return [x,y]
// }
