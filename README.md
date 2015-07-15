# Project 1 - Concentration Game

**Objective:** Build a concentration game using HTML, CSS, JS, and jQuery.

## User Stories
1. As a user I should be able to see a board with cards so I can have a visual representation of what is happening
2. As a user I should be able to click on a card and have it turn over so I can compare images between cards
3. As a user I should be able to see the cards I already matched to know how close I am to winning
4. As a user I should be able to see the number of turns I've already taken to know how well I'm doing
5. As a user I should be able to see my score when I win to compare with previous scores or scores of others
6. As a user I should be able to reset the game if I don't like the way the current game is going
7. As a user I should be able to choose a difficulty setting so I choose my experience.

## How To Play
Open the game in Chrome, Safari, or Firefox (The game was not tested for IE). Click on cards to reveal their image. Find matching images. Once you do, those cards stay flipped over. When the entire board is flipped, you win. 

##Building of the Game.
This game is built with HTML, CSS, JavaScript and jQuery.
My cards are objects that have two properties: image and class. The cards are put in one array in duplicates and shuffled. Instead of tables, I used divs that display as table-cells. My board is populated from scratch at the start of every game. Each div has a class corresponding to the class property of each card. When a card is clicked my program gets it's class and finds a card object with that class; it then accesses the image stored in the card object and diplays it in the clicked div. When cards are matched, their event listeners are removed.

##Unsolved Problems
~~The game does not play in Firefox browser.~~
