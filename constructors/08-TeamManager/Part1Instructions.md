# **Instructions**

* Over the course of this assignment you are going to put together a function which uses constructors and user input to create and manage a team of players.

* Start out by creating a constructor function called "Player" with the following properties and methods...

  * `name`: Property which contains the player's name
  * `position`: Property which holds the player's position
  * `offense`: Property which is a value between 1 and 10 to show how good this player is on offense
  * `defense`: Property which is a value between 1 and 10 to show how good this player is on defense
  * `goodGame`: Method which increases either the player's offense or defense property based upon a coinflip.
  * `badGame`: Method which decreases either the player's offense or defense property based upon a coinflip.
  * `printStats`: Method which prints all of the player's properties to the screen


* HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.
