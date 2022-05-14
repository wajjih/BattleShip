const userGrid = document.querySelector('.grid-user')
const userSquares = []
const width = 10
const currentPlayer = 'user'
let shotFired = -1
let click;
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

function createBoard(grid, squares) {
    for (let i = 0; i < width*width; i++) {
      const square = document.createElement('div')
      square.dataset.id = i
      grid.appendChild(square)
      squares.push(square)
    }
    const awe = Math.floor(Math.random() * userSquares.length)
    console.log(parseInt(awe));
    console.log(awe);
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
function generate(ship){
  let randy = Math.floor(Math.random() * userSquares.length)
  let wood = 0
  wood = randy/9
  for(let i = 0; i < ship.width; i++){
    const square = userGrid.querySelector(`div[data-id = '${randy}']`)
    if(randy + ship.width <= 99 && randy + ship.width >= 94){
      randy-=10
      square.classList.add('ship')
    } else if (randy + ship.width <= 89 && randy + ship.width >= 84) {
      randy-=10
      square.classList.add('ship')
    }else if (randy + ship.width <= 79 && randy + ship.width >= 74) {
      randy-=10
      square.classList.add('ship')
    }else if (randy + ship.width <= 69 && randy + ship.width >= 64) {
      randy-=10
      square.classList.add('ship')
    }else{
      square.classList.add('ship')
      randy++
    }
    
    
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
  

}

function doBoth(){
  addShotFired()
  generate(ships[0])
  checkActual()
  
}
userGrid.addEventListener('click', doBoth)