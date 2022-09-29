const quotes = [
  {
    quote: "Concentrated power has always been the enemy of liberty.",
    author: "-Ronald Reagan"
  },

  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "-Winston Churchill"
  },

  {
    quote: "If at first you don't succeed, Call an airstrike.",
    author: "-Banksy"
  },

  {
    quote: "Whoever said the pen is mightier than the sword obviously never encountered automatic weapons.",
    author: "-Douglas MacArthur"
  },

  {
    quote: "The truth of the matter is that you always know the right thing to do. The hard part is doing it.",
    author: "-Robert H. Schuller"
  },
  
  {
    quote: "Do not be afraid to give up the good to go for the great",
    author: "-John D. Rockefeller"
  },

  {
    quote: "It is fatal to enter any war without the will to win it.",
    author: "-Douglas MacArthur"
  },

  {
    quote: "Know the enemy and know yourself.",
    author: "-Sun Tzu"
  },

  {
    quote: "Older men declare war. But it is the youth that must fight and die.",
    author: "-Herbert Hoover"
  },

  {
    quote: "A man may die, nations may rise and fall, but an idea lives on.",
    author: "-John F. Kennedy"
  },

  {
    quote: "If we don't end war, war will end us.",
    author: "-H. G. Wells"
  },

  {
    quote: "Only the dead have seen the end of war.",
    author: "-Plato"
  },

  {
    quote: "A leader leads by example not by force.",
    author: "-Sun Tzu"
  },

  {
    quote: "War does not determine who is right - only who is left.",
    author: "-Bertrand Russell"
  },

  {
    quote: "The object of war is not to die for your country but to make the other bastard die for his.",
    author: "-George S. Patton"
  },

  {
    quote: "Nearly all men can stand adversity, but if you want to test a man's character, give him power.",
    author: "-Abraham Lincoln"
  },

  {
    quote: "All wars are civil wars, because all men are brothers.",
    author: "-Francois Fenelon"
  },

  {
    quote: "In war, truth is the first casualty.",
    author: "-Aeschylus"
  },

  {
    quote: "Every man's life ends the same way. It is only the details of how he lived and how he died that distinguish one man from another.",
    author: "-Ernest Hemingway"
  },

  {
    quote: "I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.",
    author: "-Albert Einstein"
  },
];

const quotespan = document.querySelector("#quote span:first-child");
const authorspan = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quotespan.innerText = todaysQuote.quote;
authorspan.innerText = todaysQuote.author;

