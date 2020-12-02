const quotes = [
    {
        text : 'The future belongs to those who believe in the beauty of their dreams',
        maker : 'Eleanor Roosevelt'
    },
    {
        text : 'Take a leap of faith and begin this wondrous new year by believing',
        maker : 'Sarah Ban Breathnach'
    },
    {
        text : 'Strength shows not only in the ability to persist, but the ability to start over',
        maker : 'F. Scott Fitzgerald'
    },
    {
        text : 'The secret of change is to focus all of your energy, not on fighting the old, but on building the new',
        maker : 'Dan Millman'
    },
    {
        text : 'Nothing in the universe can stop you from letting go and starting over',
        maker : 'Guy Finley'
    },
    {
        text : 'It always seems impossible until it’s done',
        maker : 'Nelson Mandela'
    }
]

let selected = Math.floor(Math.random() * quotes.length);

let elementQuoteText = document.querySelector('#quote-text')
elementQuoteText.innerHTML = quotes[selected].text;
let elementQuoteMaker = document.querySelector('#quote-maker')
elementQuoteMaker.innerHTML = ` - ${quotes[selected].maker} -`;
