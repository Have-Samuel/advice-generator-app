/* eslint-disable no-undef */
const diceIcon = document.querySelector('.changer');
const adviceNum = document.querySelector('.advice-num');
const paragraph = document.querySelector('.paragraph');

function getAdvice() {
  axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      // console.log(response.data.slip.advice);
      adviceNum.innerHTML = `ADVICE #${response.data.slip.id}`;
      paragraph.innerHTML = response.data.slip.advice;
    });
}

diceIcon.addEventListener('click', getAdvice);