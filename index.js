//Global variables
const userGrid = document.querySelector('.grid-user')
const genCpu = document.querySelector('#cpuShips') 
const userSquares = []
const width = 10
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
//Randomizes the userSquares array and wont repeat the numbers twice. Also it's a generator function
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

  //adding event listeners for each squaare
  
    

 

// const enemySquare = userGrid.querySelector(`div[data-id='${shotFired}']`)
// enemySquare.classList.add('boom')



//
function addShotFired (){
  userSquares.forEach(square => {
    square.addEventListener('click', () => {
      if(currentPlayer === 'user') {
        return shotFired = square.dataset.id
      }
    })
  })
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
  
  userSquares.forEach(square =>{
    square.addEventListener('click', ()=>{
      if(square.classList.contains('ship')){
        // square.classList.remove('ship')
        square.classList.add('boom')
        hit++
        console.log(hit);
      } else if (!square.classList.contains('ship')) {
        return square.classList.add('miss')
      }
    })
  })

}
function reset(){
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
    hit = 0
    
  })
}
function checkWin(){
  const checkDis = document.querySelector('#winner')
  const display = document.createElement('div')
  if(hit === 153){
    if (checkDis.textContent) {
      checkDis.removeChild(checkDis.firstChild)
    }
    display.textContent = 'You won'
    checkDis.appendChild(display)
  }
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
userGrid.addEventListener('click', doBoth)
genCpu.addEventListener('click', generateAll)
resetBtn.addEventListener('click', reset)
