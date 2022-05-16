//Global variables
const userGrid = document.querySelector('.grid-user')
const cpuGrid = document.querySelector('.grid-computer')
const genCpu = document.querySelector('#cpuShips') 
const userSquares = []
const cpuSquares = []
const width = 10
const startBtn = document.querySelector('#start')
const currentPlayer = 'user'
let shotFired = -1
let click;

const resetBtn = document.querySelector('#reset')
let hit = 0

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
      if(currentPlayer === 'user') {
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
console.log(ships[0]);
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


function generate(ship){
  let randy = shuffle(userSquares)
  let rando = parseInt(randy.next().value.dataset.id)
  


  //let wood = 0
  //wood = randy/9
  for(let i = 0; i < ship.width; i++){
    let square = userGrid.querySelector(`div[data-id = '${rando}']`)
    console.log(square)
    if(rando+ship.width <= 99 && rando+ship.width >= 93){
      rando-=8
    }

    if (square.classList.contains('ship')) {
      
      rando = randy.next().value.dataset.id
   
      //square = userGrid.querySelector(`div[data-id = '${rando}']`)
      
    }
    square.setAttribute('id', 'ship')
    //square.classList.add('ship')
    square.classList.add(`${ship.name}`)
    
    
    rando++
    
    
    
  }
}

function checkActual(){
  const target = click
  // click = 
  // const target = userGrid.querySelector(`div[data-id = '50']`)
  // let actual = 0
  // target.classList.add('taken')
  // actual = parseInt(target.dataset.id)
  // console.log(target)
  // console.log(actual);
  // console.log(shotFired);
  // //Hit or Miss I guess they never miss huh
  
  // if(actual === parseInt(shotFired)){
  //   target.classList.remove('taken')
  //   target.classList.add('boom')
  // }
  
  // userSquares.forEach(square => {
  //   square.addEventListener('click', ()=>{
  //     if(square.classList.contains('ship')){
  //       // square.classList.remove('ship')
  //       square.classList.add('boom')
  //       hit++
  //       console.log(hit);
  //     } else if (!square.classList.contains('ship')) {
  //       return square.classList.add('miss')
  //     }
  //   })
  // })
  // if (target.classList.contains('ship')) {
  //   target.classList.add('boom')
  //   hit++
    
  // }
  // target.classList.add('ship')
  // console.log(shotFired); 
  //console.log(target.classList.contains('ship')); 

  if (target.classList.contains('ship')) { 
    target.classList.add('boom')
    hit++
  } else if(!target.classList.contains('ship')){
    target.classList.add('miss')
  }
  //console.log(click);  
  
}
function reset(){
  userSquares.forEach(square => {
    const checkDis = document.querySelector('#winner')
    const display = document.createElement('div')
    if(square.classList.contains('ship')){
      square.classList.remove('ship')
    }
    if(square.classList.contains('boom')){
      square.classList.remove('boom')
    }
    if(square.classList.contains('miss')){
      square.classList.remove('miss')
    }
    hit = 0
    checkDis.removeChild(checkDis.firstChild)
    display.textContent = 'Battle Ship'
    checkDis.appendChild(display)

    
  })
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
const randi = shuffle(cpuSquares)

function makeShips(){
  cpuSquares.forEach(square => {
    square.addEventListener('click', () => {
      if(currentPlayer === 'user') {
        square.classList.add('ship') 
      }
    })
  })
  // let randa = randi.next().value
  // console.log(randa);

}

function doBoth(){
  addShotFired()
  checkActual()
  checkWin()
  
}
function generateAll(){
  genDestroyer()
  genSub()
  genCruiser()
  genbattle()
  genCarrier()
}
startBtn.addEventListener('click', makeShips)
userGrid.addEventListener('click', doBoth)
genCpu.addEventListener('click', generateAll)
resetBtn.addEventListener('click', reset)
