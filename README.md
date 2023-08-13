## Analyze the app’s functionality

As a user I want to be able to 
- Cross X and O's on the board
- A board with 3 columns & 3 rows
- Have two players
- Want to know who won, lost, or tied
- Ability to take turns


3 Fun Add Ons would be
- A funny GIF for the winner
- A drawing animation for X and O
- Difficulty setting

## Think about the overall design (look & feel) of the app

- 3 columns
- 3 rows
- Player 1 has X's
- Player 2 has O's
- Title at the top saying who's turn it is
- Simple and easy game
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Delicious+Handrawn&display=swap" rel="stylesheet">
```
```css
font-family: 'Delicious Handrawn', cursive;
```

## Wireframe the UI

Can simply Google this

## Pseudocode
This is pretty much exaclty like Connect 4 just with less slots. Also player wins on 3 connects instead of 4

- Define required constants
    - Player shape constant (X or O)
- Define required variables used to track the state of the game
    - Game board - 1 big array that holds 3 smaller 3 index arrays
    - Turn - 1 || -1 (Player 1 & 2)
    - Winner - null || 1 || -1 || "T"

- Cache DOM elements
    - Message place
    - Play again button
    - Column buttons/ markers

- Upon loading the app should:
    - Init the state vars
    - Create the 3 nested arrays
    - Turn var should be set to 1 (player 1)
    - Winner var should be set to null
- Render changes to the DOM
    - Render the board, should be completely blank
    - Render the message "Player 1's Turn"
    - Do not render the play again button

- Wait for interaction

- Handle a player clicking a column button
    - Update the board array
    - Update the turn var
    - Check for a winner
    - LASTLY, re-render the board with the player's move

- Handle a player clicking the replay button
    - Reset the state vars (back to default on page load functions)
    - LASTLY, re-render the board

- Check for a winner
    -Check for 3 in a row
    - We will use offsets to count the colors of the disc in the arrays

## Identify the application’s state (data)

- game baord - array of 3 nested arrays
```js
let board
```
- turn var
```js
let turn
```
- winner var
```js
let winner
```

## Set up the project
