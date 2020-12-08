// Mixed Messages
// create a random message when a user runs the program;
// Topic: Short quotes;

// Object of short quotes with authors
let quotes = {
  'Love For All, Hatred For None.': 'Khalifatul Masih III',
  'Every moment is a fresh beginning.': 'T.S Eliot',
  'Change the world by being yourself.': 'Amy Poehler',
  'Die with memories, not dreams.': 'Unknown',
  'Aspire to inspire before we expire.': 'Unknown',
  'Everything you can imagine is real.': 'Pablo Picasso',
  'Whatever you do, do it well.': 'Walt Disney'
}

// Function that iterates trhough the object and return a random message (key) and its author (value) passing an Object of quotes
function randomMessage (obj) {
  // get an array of keys from object.
  let keysArray = Object.keys(obj);

  // get a random number between 0 and length of the previous array and round it to an integer number.
  let randomIndex = Math.floor(Math.random() * keysArray.length);

  // create a nice space to put the author to the extremly rigth of the terminal calculating the lenght of the quotation itself.
  let niceSpace = keysArray[randomIndex].split("").length - quotes[keysArray[randomIndex]].split("").length

  // return the log in the console with interpolations
  return console.log(`Quote of the day:\n${keysArray[randomIndex]}\n`+ ' '.repeat(niceSpace) + `-${quotes[keysArray[randomIndex]]}`);
};

randomMessage(quotes);