import './App.css';
import React, {useState} from 'react';
import x from './assets/x.png'
import telegram from './assets/telegram.png'
import whatsapp from './assets/whatsapp.png'
import SharePost from './SharePost';

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }
  const [quote, setQuote] = useState(quoteData)

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      });
  }

  const text = quote.author + " once said: " + quote.content

  const copy = () => {
    navigator.clipboard.writeText(text)
    alert('copied')
  }

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
      </div>
      <div className='socialShare'>
        <p className='share'>Share</p>
        <ul className='socialMedia'>
          <li><SharePost type='Telegram' icon={telegram} text={text}/></li>
          <li><SharePost type='Whatsapp' icon={whatsapp} text={text}/></li>
          <li><SharePost type='x' icon={x} text={text}/></li>
        </ul>
      </div>
    </>
  )
}


export default App;
