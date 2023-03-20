
//Generate a random quote from any speaker
const generateQuoteRandom = () => {
    fetch('https://officeapi.akashrajpurohit.com/quote/random')
      .then( res => res.json())
      .then(data => { 
        writeQuote(data); 
        writeSpeaker(data);
      })
  }

  const landingPageQuote = document.getElementById('randomQuote');
  const landingPageSpeaker = document.getElementById('randomQuoteSpeaker');

  const writeQuote = (quote) => {
    
    landingPageQuote.classList.add('text-style');
    landingPageQuote.innerHTML = '"'+quote.quote+'"';
  }
  
  const writeSpeaker = (quote) => {
    landingPageSpeaker.classList.add('text-style');
    landingPageSpeaker.innerHTML = '—'+quote.character;
  }



  //Generate a random quote from the specific speaker in the results page.
  const generateQuoteSpecific = () => {
    fetch('https://officeapi.akashrajpurohit.com/quote/random')
      .then( res => res.json())
      .then(data => { 
        writeQuoteSpecific(data); 
        writeSpeakerSpecific(data);
        console.log('quote is running?')
      })
  }

  const resultRandomQuote = document.getElementById('resultRandomQuote');
  const resultRandomQuoteSpeaker = document.getElementById('resultRandomQuoteSpeaker');

  const writeQuoteSpecific = (quote) => {
    
    resultRandomQuote.classList.add('text-style');
    resultRandomQuote.innerHTML = '"'+quote.quote+'"';
  }
  
  const writeSpeakerSpecific = (quote) => {
    resultRandomQuoteSpeaker.classList.add('text-style');
    resultRandomQuoteSpeaker.innerHTML = '—'+quote.character;
  }