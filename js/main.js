	/*----- constants -----*/


	/*----- state variables -----*/

    let board // array of 7 nested arrays
    let turn // 1 || -1
    let winner // null || 1 || -1 || 'T'

	/*----- cached elements  -----*/


	/*----- event listeners -----*/

    init()

// function start our game 
function init() {
    // assign our vars to the starting values
    board = [
			[0, 0, 0], // col 0
			[0, 0, 0], // col 1
			[0, 0, 0] // col 2
		]
    turn = 1
    winner = null
    render()
}

	/*----- functions -----*/
