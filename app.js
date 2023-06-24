const diceIcon = document.querySelector('.changer');
const adviceNum = document.querySelector('.advice-num');
const paragraph = document.querySelector('.paragraph');

// Display the number of the advice and advice.
// Using async and awaits
async function getData() {
  const response = await axios.get('https://api.adviceslip.com/advice');
  console.log(response);
  console.log('THIS MSG IS AFTER AXIOS.GET!!');
}