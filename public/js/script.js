import { quotes } from '../../data/quotes.js';

let oldQuote;

const getNewQuote = () => {
  if (quotes.length <= 1) return 0;

  let newIndex;

  do {
    newIndex = Math.floor(Math.random() * quotes.length);
  } while (quotes[newIndex] === oldQuote);

  return newIndex;
}


const getQuote = async () => {
  try {
    const newIndex = getNewQuote();
    const newQuote = quotes[newIndex];

    oldQuote = newQuote;

    const quote = document.querySelector('#quote').textContent = `"${newQuote.text}"`;
    const author = document.querySelector('#author').textContent = `-${newQuote.source}`;

  } catch (error) {
    console.log(error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  getQuote();
});

document.getElementById('new-quote').addEventListener('click', getQuote);