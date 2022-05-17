//Global variables
const userGrid = document.querySelector('.grid-user')
const cpuGrid = document.querySelector('.grid-computer')
const genCpu = document.querySelector('#cpuShips') 
const userSquares = []
const cpuSquares = []
const width = 10
const startBtn = document.querySelector('#start')
let currentPlayer = 'user'
let shotFired = -1
let click;
let gameOver = false

const resetBtn = document.querySelector('#reset')
let hit = 0
let cpuHit = 0

//Ships
const ships = [
  {
    name: 'destroyer',
    direction: 0,
    width: 2
  },
  {
    name: 'submarine',
    direction: 0,
    width: 3 
  },
  {
    name: 'cruiser',
    direction: 0,
    width: 3 
  },
  {
    name: 'battleship',
    direction: 0,
    width: 4 
  },
  {
    name: 'carrier',
    direction: 0,
    width: 5 
  },

]
//Randomizes an array and wont repeat the numbers twice. Also it's a generator function
function* shuffle(array) {

  var i = array.length;

  while (i--) {
      yield array.splice(Math.floor(Math.random() * (i+1)), 1)[0];
  }

}

//creates a grid by 
function createBoard(grid, squares) {
    for (let i = 0; i < width*width; i++) {
      const square = document.createElement('div')
      square.dataset.id = i
      grid.appendChild(square)
      squares.push(square)
    }
  }
  createBoard(userGrid, userSquares)
  createBoard(cpuGrid, cpuSquares)

  //adding event listeners for each squaare
  
    

 

// const enemySquare = userGrid.querySelector(`div[data-id='${shotFired}']`)
// enemySquare.classList.add('boom')



//
function addShotFired (){
  userSquares.forEach(square => {
    square.addEventListener('click', () => {
      if(true) {
        click = square
        shotFired = square.dataset.id 
      }
    })
  })

  // click = userSquares.forEach(square => {
  //   square.addEventListener('click', ()=>{
  //     return click = square.dataset.id
  //   })
  // })
  
}
// function cpuShotFired (){
//   cpuSquares.forEach(square => {
//     square.addEventListener('click', () => {
//       if(true) {
//         click = square
//         shotFired = square.dataset.id 
//       }
//     })
//   })
// }

//console.log(ships[0]);

//Functions to generate ships
function genDestroyer(){
  const a = userGrid.querySelector(`div[data-id = '42']`)
  const b = userGrid.querySelector(`div[data-id = '52']`)
  
  
  a.classList.add('ship')
  b.classList.add('ship')
  
}
function genSub(){
  const a = userGrid.querySelector(`div[data-id = '1']`)
  const b = userGrid.querySelector(`div[data-id = '2']`)
  const c = userGrid.querySelector(`div[data-id = '3']`)

  a.classList.add('ship')
  b.classList.add('ship')
  c.classList.add('ship')
}
function genCruiser(){
  const a = userGrid.querySelector(`div[data-id = '38']`)
  const b = userGrid.querySelector(`div[data-id = '48']`)
  const c = userGrid.querySelector(`div[data-id = '58']`)

  a.classList.add('ship')
  b.classList.add('ship')
  c.classList.add('ship')
}
function genbattle(){
  const a = userGrid.querySelector(`div[data-id = '54']`)
  const b = userGrid.querySelector(`div[data-id = '64']`)
  const c = userGrid.querySelector(`div[data-id = '74']`)
  const d = userGrid.querySelector(`div[data-id = '84']`)


  a.classList.add('ship')
  b.classList.add('ship')
  c.classList.add('ship')
  d.classList.add('ship')
  
}
function genCarrier(){
  const a = userGrid.querySelector(`div[data-id = '21']`)
  const b = userGrid.querySelector(`div[data-id = '22']`)
  const c = userGrid.querySelector(`div[data-id = '23']`)
  const d = userGrid.querySelector(`div[data-id = '24']`)
  const e = userGrid.querySelector(`div[data-id = '25']`)


  a.classList.add('ship')
  b.classList.add('ship')
  c.classList.add('ship')
  d.classList.add('ship')
  e.classList.add('ship')
}


// function generate(ship){
//   let randy = shuffle(userSquares)
//   let rando = parseInt(randy.next().value.dataset.id)
  


//   //let wood = 0
//   //wood = randy/9
//   for(let i = 0; i < ship.width; i++){
//     let square = userGrid.querySelector(`div[data-id = '${rando}']`)
//     console.log(square)
//     if(rando+ship.width <= 99 && rando+ship.width >= 93){
//       rando-=8
//     }

//     if (square.classList.contains('ship')) {
      
//       rando = randy.next().value.dataset.id
   
//       //square = userGrid.querySelector(`div[data-id = '${rando}']`)
      
//     }
//     square.setAttribute('id', 'ship')
//     //square.classList.add('ship')
//     square.classList.add(`${ship.name}`)
    
    
//     rando++
    
    
    
//   }
// }

function checkActual(){
  const target = click 

  if (target.classList.contains('ship')) { 
    target.classList.add('boom')
    hit++
  } else if(!target.classList.contains('ship')){
    target.classList.add('miss')
  }
  //console.log(click);  
  
}
const randi = shuffle(cpuSquares)
function cpuRandAttack(){
  let randa = randi.next().value.dataset.id
  let square = cpuGrid.querySelector(`div[data-id = '${randa}']`)
  if(square.classList.contains('urShip')){
    square.classList.add('boom')
    cpuHit++
  }else{
    square.classList.add('miss')
  }

}
function reset(){
  const checkDis = document.querySelector('#winner')
  const display = document.createElement('div')
  checkDis.removeChild(checkDis.firstChild)
  display.textContent = 'Battle Ship'
  checkDis.appendChild(display)
  hit = 0
  userSquares.forEach(square => {
    
    if(square.classList.contains('ship')){
      square.classList.remove('ship')
    }
    if(square.classList.contains('boom')){
      square.classList.remove('boom')
    }
    if(square.classList.contains('miss')){
      square.classList.remove('miss')
    }
    
  })
  cpuSquares.forEach(square => {
    if(square.classList.contains('urShip')){
      square.classList.remove('urShip')
    }
    if(square.classList.contains('boom')){
      square.classList.remove('boom')
    }
    if(square.classList.contains('miss')){
      square.classList.remove('miss')
    }
  })
}
function changePlayer(){
  const turn = document.querySelector('#turn')
  const turnContent = document.createElement('div')
  if (currentPlayer === 'user') {
    if (turn.textContent) {
      turn.removeChild(turn.firstChild)
    }
    currentPlayer = 'computer'
    //turn.removeChild(turn.firstChild)
    turnContent.textContent = 'Computer Turn'
    turn.appendChild(turnContent)
    setTimeout(() => { turn.appendChild(turnContent); }, 300);

  } else if(currentPlayer === 'computer'){
    if (turn.textContent) {
      turn.removeChild(turn.firstChild)
    }
    currentPlayer = 'user'
    //turn.removeChild(turn.firstChild)
    turnContent.textContent = 'Your Turn'
    turn.appendChild(turnContent)
    setTimeout(() => { turnContent.textContent = 'Your Turn'; }, 300);
    
  }
  
}
function checkWin(){
  const checkDis = document.querySelector('#winner')
  const display = document.createElement('div')
  if(hit === 17){
    if (checkDis.textContent) {
      checkDis.removeChild(checkDis.firstChild)
    }
    display.textContent = 'You won'
    checkDis.appendChild(display)
  }
}
function checkCpuWin(){
  const checkDis = document.querySelector('#winner')
  const display = document.createElement('div')
  if(cpuHit === 17){
    if (checkDis.textContent) {
      checkDis.removeChild(checkDis.firstChild)
    }
    display.textContent = 'Computer won'
    checkDis.appendChild(display)
  }
}


//under development
function makeShips(){
  cpuSquares.forEach(square => {
    square.addEventListener('click', () => {
      
        square.classList.add('urShip') 
      
    })
  })
  // let randa = randi.next().value
  // console.log(randa);

}

function game(){
  addShotFired()
  checkActual()
  checkWin()
  changePlayer()
  //cpuShotFired()
  cpuRandAttack()
  checkCpuWin()
  changePlayer()

  
}
function generateAll(){
  genDestroyer()
  genSub()
  genCruiser()
  genbattle()
  genCarrier()
}
cpuGrid.addEventListener('click', makeShips)
userGrid.addEventListener('click', game)
genCpu.addEventListener('click', generateAll)
resetBtn.addEventListener('click', reset)
