document.addEventListener('DOMContentLoaded', function () {
  var grid = []
  // var grid_DOM = document.getElementsByClassName('container')
  // console.log(grid_DOM)
  var player = 1

    // var currentPlayer = playerOne
    // var i
    // var topRowVictory = [0,3,1,4,2]
    // var whoWon = false
  var squareElements = document.querySelectorAll('.container > div')
  squareElements.forEach(function (squareElement) {
    squareElement.addEventListener('click', function () {
      var thisdata = $(this).attr('data-num') // $(this) refers to the div element on which the event (click) happened
      // console.log($(this))
      // console.log(thisdata)
      if (playTurn(thisdata)) {
        if (player === 1) {
          $(this).text('X')
        } else {
          $(this).text('O')
        }
        isGameOver()
        var restartButton = document.querySelector('.button')   //This is being called 9 times. check!
        restartButton.addEventListener('click', function () {
          restart()
          $('.box').empty()
        })
      }
    })
  })

  function playTurn (index) {
    if (grid.includes(index) || isGameOver()) {
      return false
    } else {
      grid.push(index)
      if (player === 1) {
        player = 2
      } else {
        player = 1
      }
      return true
    }
  }

  function restart () {
    player = 1
    grid = []
  }

    // Game is over if someone has won or all grid indexes are filled
  function isGameOver () {
    if (grid.length === 9 || whoWon() !== 0) {
      // restart()
      // alert('game is OVER!!')
      // alert('GAME OVERRRRRRRRRRRRRRRRRRRRRRRRRRRRR')
      $('#myModal').modal()
      $('.modal-para').text('Yayy!! player ' + whoWon() + ', you are the winner!')
      return true
    } else {
      return false
    }
  }

  function someoneHasWon () {
    var twoDimArray = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
    ]

    var playedBy
        // Storing the player positions in a 2D array to compare all the possible outcomes and return player who won
    for (var i = 0; i < grid.length; i++) {
      var position = grid[i]
      var row = Math.floor(position / 3)
      var col = Math.floor(position % 3)
            // Player 1 starts first, hence occupying even indexes
      if (i % 2 === 0) {
        playedBy = 1
      } else {
        playedBy = 2
      }

      twoDimArray[row][col] = playedBy
    }

        // check if values in 1st row are equal (and were played by player 1 or 2)
    if (twoDimArray[0][0] !== 0 && (twoDimArray[0][0] === twoDimArray[0][1]) && (twoDimArray[0][0] === twoDimArray[0][2])) {
      return twoDimArray[0][0]
    }
        // check if values in 2nd row are equal (and were played by player 1 or 2)
    else if (twoDimArray[1][0] !== 0 && (twoDimArray[1][0] === twoDimArray[1][1]) && (twoDimArray[1][0] === twoDimArray[1][2])) {
      return twoDimArray[1][0]
    }
        // check if values in 3rd row are equal (and were played by player 1 or 2)
    else if (twoDimArray[2][0] !== 0 && (twoDimArray[2][0] === twoDimArray[2][1]) && (twoDimArray[2][0] === twoDimArray[2][2])) {
      return twoDimArray[2][0]
    }
        // check if values in 1st column are equal (and were played by player 1 or 2)
    else if (twoDimArray[0][0] !== 0 && (twoDimArray[0][0] === twoDimArray[1][0]) && (twoDimArray[0][0] === twoDimArray[2][0])) {
      return twoDimArray[0][0]
    }
        // check if values in 2nd column are equal (and were played by player 1 or 2)
    else if (twoDimArray[0][1] !== 0 && (twoDimArray[0][1] === twoDimArray[1][1]) && (twoDimArray[0][1] === twoDimArray[2][1])) {
      return twoDimArray[0][1]
    }
        // check if values in 3rd column are equal (and were played by player 1 or 2)
    else if (twoDimArray[0][2] !== 0 && (twoDimArray[0][2] === twoDimArray[1][2]) && (twoDimArray[0][2] === twoDimArray[2][2])) {
      return twoDimArray[0][2]
    }
        // check if values in 1st diagonal are equal (and were played by player 1 or 2)
    else if (twoDimArray[0][0] !== 0 && (twoDimArray[0][0] === twoDimArray[1][1]) && (twoDimArray[0][0] === twoDimArray[2][2])) {
      return twoDimArray[0][0]
    }
        // check if values in 2nd diagonal are equal (and were played by player 1 or 2)
    else if (twoDimArray[0][2] !== 0 && (twoDimArray[0][2] === twoDimArray[1][1]) && (twoDimArray[0][2] === twoDimArray[2][0])) {
      return twoDimArray[0][2]
    }
        // else return 0 to indicate no one has won the game so far
    else {
      return 0
    }
  }

  function whoWon () {
    var result = someoneHasWon()
        // if either player 1 or player 2 have won the game return that
    if (result === 1 || result === 2) {
      return result
    }
        // else if someoneHasWon() returned 0 (i.e, no player has won so far), check if all the moves have been played
    else if (grid.length === 9) {
      // $('#myModal').modal()
      alert('Draw')
      return 3 // draw
    }
        // else return 0
    else {
      // $('#myModal').modal()
      return 0
    }
  }
    // var grid = []
    // var player = 1
    //
    // function restart(){
    // var grid=[];
    // player =1
    // }
    //
    // function isGameOver () {
    // if(whoWon())
    //  {return true}
    // else {return false}
    // }
    //
    //
    // function whoWon() {
    // //Check the grid here
    // //Check the first row
    // if (grid[0] && grid[0] === grid[1] && grid[0] === grid [2]) return grid[0]
    // //Check the second row
    // if(grid[3] && grid[3] === grid[4] && grid[3] === grid[5]) return grid[3]
    // if(grid[6] && grid[6] === grid[7] && grid[6] === grid[5]) return grid[6]
    // if(grid[0] && grid[0] === grid[3] && grid[0] === grid[6]) return grid[0]
    // if(grid[1] && grid[1] === grid[4] && grid[1] === grid[7]) return grid[1]
    // if(grid[2] && grid[2] === grid[5] && grid[2] === grid[8]) return grid[2]
    // if(grid[0] && grid[0] === grid[4] && grid[0] === grid[8]) return grid[0]
    // if(grid[2] && grid[2] === grid[4] && grid[2] === grid[6]) return grid[2]
    // if(grid[6] && grid[6] === grid[7] && grid[6] === grid[5]) return grid[6]
    // if(grid[0] && grid[1] === grid[2] && grid[3] === grid[4] && grid[5] && grid[6] === grid[7] && grid[8]) return [3]
    //
    //
    // return 0
    //
    //
    // }
    //
    // function playTurn (index){
    // //check if grid is empty or not. Cannot click in the same place
    // if(grid[index]){
    // return false}
    // else{
    // return true
    // }
    // //fill the grid with index
    // grid[index] = player
    // //switch player
    // if(player ==1)
    // {
    // player = 2
    // }
    // else
    // {player =1
    // }
    // return true
    // }
})
