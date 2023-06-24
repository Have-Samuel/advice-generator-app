const diceIcon = document.querySelector('.changer');
const adviceNum = document.querySelector('.advice-num');
const paragraph = document.querySelector('.paragraph');

// Display the number of the advice and advice.
const response = axios.get('https://api.adviceslip.com/advice');
