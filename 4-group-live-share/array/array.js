/** 
 * Use the Map Method in JavaScript
 * 
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * 
 * Initialise the variable electronics to an array containing the values mouse, keyboard, monitor
 * Then map the values from electronics. In the map use the variable x and index followed by an arrow function. Then console log out the sentence:
 * The items is a _item_. Then index is _index_.
 *
 * Using single line comments write what the output would display.
 */

var electronics = ["mouse", "keyboard", "monitor"];

electronics.map((x, index) => console.log(`This item is a ${x}. The index is ${index}`))

//This item is a mouse. The index is 0
//This item is a keyboard. The index is 1
//This item is a monitor. The index is 2