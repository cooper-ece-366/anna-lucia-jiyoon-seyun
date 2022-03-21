import React, { useState } from 'react';
import useInterval from './useInterval';
import react_logo from './react-logo.svg';
import spring_java_logo from './spring-boot-java.jpg';
import './App.css';

function getRandomColor() {
  let colorValues = ["red", "blue", "green"];
  return colorValues[Math.floor(Math.random() * colorValues.length)];
}

function App() {
    const apiUrlPrefix = "http://localhost:8080";
  const tickers = ['AAPL','AMZN','GOOG','NVDA','INTC','FB','ORCL','NFLX'];
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [currentReadableTime, setCurrentReadableTime] = useState('0');
  const [currentTicker, setCurrentTicker] = useState('-');
  const [currentStockPrice, setCurrentStockPrice] = useState('0');
  const [currentVersionString, setCurrentVersionString] = useState('<null>');
  const [quoteText, setQuoteText] = useState('To be or not to be.');
  const [quoteAuthor, setQuoteAuthor] = useState('William Shakespeare');

  const quoteDelay = 3000; // in milliseconds
  const delay = 5000; // in milliseconds
  const versionDelay = 15000; // in milliseconds
  const tickerDelay = 60000; // in milliseconds

  const quoteApiUrl = apiUrlPrefix.concat("/api/quote");
  App.refreshQuote = () => {
    console.log("Refreshing ... quote ...");
    fetch(quoteApiUrl)
      .then(response => response.json())
      .then(data => {
        setQuoteText(data.quote);
        setQuoteAuthor(data.author);
        console.log(data);
      })
      .catch(err => {
        console.log("Cannot connect to API endpoint: %s", quoteApiUrl);
      });
    console.log("Refreshed quote.");  
  }
  useInterval(() => {
    App.refreshQuote();
  }, quoteDelay);

  const timeApiUrl = apiUrlPrefix.concat("/api/time");
  App.refreshTime = () => {
    console.log("Refreshing ... time ...");
    fetch(timeApiUrl)
      .then(response => response.json())
      .then(data => {
        setCurrentTime(data.datetime);
        //let ora = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(currentTime * 1000);
        var ora = new Date(currentTime*1000)
        setCurrentReadableTime(ora.toLocaleString());
        console.log(currentReadableTime);
      })
      .catch(err => {
        console.log("Cannot connect to API endpoint: %s", timeApiUrl);
      });
    console.log("Refreshed time.");  
  }
  useInterval(() => {
    App.refreshTime();
  }, delay);

  App.refreshStockPrice = () => {
    console.log("Refreshing ... %s stock price ...", currentTicker);
    var ticker = tickers[Math.floor(Math.random() * tickers.length)];
    setCurrentTicker(ticker);
    var stockApiUrl = apiUrlPrefix.concat("/api/stock/",ticker);
      fetch(stockApiUrl)
      .then(response => response.json())
      .then(data => {
        setCurrentStockPrice(parseFloat(data.quote.previousClose + data.quote.change).toFixed(2));
        console.log(data);
      })
      .catch(err => {
        console.log("Cannot connect to API endpoint: %s", stockApiUrl);
      });
    console.log("Refreshed %s stock price.", currentTicker);
  }
  useInterval(() => {
    App.refreshStockPrice();
  }, tickerDelay);

  const appVersionApiUrl = apiUrlPrefix.concat("/api/version/");
  App.refreshVersionString = () => {
    console.log("Refreshing ... random string ...");
    fetch(appVersionApiUrl)
      .then(response => response.json())
      .then(data => {
        setCurrentVersionString(data.build_version + data.maven_version);
        console.log(data);
      })
      .catch(err => {
        console.log("Cannot connect to API endpoint: %s", appVersionApiUrl);
      });
    console.log("Refreshed random string.");  
  }
  useInterval(() => {
    App.refreshVersionString();
  }, versionDelay);

  App.buttonClicked = () => {
    console.log('Button was clicked!');
    App.refreshTime();
    App.refreshStockPrice();
    App.refreshVersionString();
    App.refreshQuote();
  }

  return (
    <div className="App">
      <div class="topnav">
        <a class="active" href="/">TONEPOEM</a>
        <a href="/latest">Latest</a>
        <a href="/search">Search</a>
        <a href="/data">Data/API</a>
        <a href="/about">About</a>
      </div>

      <section class="section">
        <h1>What is TONEPOEM</h1>
        <p>A collaborative effort to create a comprehensive and well-classified database of sounds using a concise list of adjectives.</p>

        <h2>Why does it matter?</h2>
        <p>There are few tagged databases of sounds and of those that are documented, the tags are exclusively literal descriptions. Audio tagging is an important task to be able to predict the tags of audio clips. This is only possible through a thoroughly tagged audio-database.</p>

        <h2>How does it work?</h2>
        <p>To contribute to the database of audio tags and explore the audio space, listen to a short randomly-selected audio clip and choose from the word wheel the best adjective associated with the audio. Then learn more about the source of the audio clip which will be revealed.</p>

        <h2>How can I interact with the data?</h2>
        <p>Have fun <i>tagging</i> audio! You can also <i>explore</i> what sounds have been associated with which adjectives. If you’re interested in <i>playing</i> with the data we collect and <i>expanding</i> on the TONEPOEM mission, all tags are made open-source as are the audio databases we pull from. Check out the Data/API tab and feel free to contact us.</p>

      </section>
    </div>
  );
}

export default App;
