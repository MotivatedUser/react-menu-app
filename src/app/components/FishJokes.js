import { useState } from "react";

const FishJokes = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const jokes = [
      "What do you call a fish that wears a bowtie? Sole-dier.",
      "Why did the fish blush? Because it saw the ocean's bottom.",
      "What do you get when you cross a fish and an elephant? Swimming trunks!",
      "Why did the fisherman put peanut butter on his fishing rod? To catch a jellyfish!",
      "What is a fish's favorite instrument? The bass guitar!",
      "What do you call a fish that doesn't share its toys? Shelfish.",
      "What do you call a fish with no eye? Fsh!",
      "Why don't fish like basketball? Because they're afraid of the net!",
      "What did the fish say when it swam into a wall? Dam!",
      "How do you make a fish laugh? Tell it a whale of a tale!",
      "Why did the fish go on vacation? So it could see the ocean view!",
      "What do you call a fish that's good at basketball? A slam dunkin' fish!",
      "What do you get when you cross a fish and a kangaroo? A jumpy fish!",
      "Why did the fish join a band? Because it already had scales!",
      "How does a fish know its weight? It goes to the scales!",
      "Why don't fish play poker? Because they're afraid of the hook!",
      "What do you call a fish that's good with numbers? A math-a-marlin!",
      "Why don't fish go on vacation? Because they're always in school!",
      "What do you call a fish that wears a crown? Salmon Royalty!",
      "What do you call a fish that's afraid of the dark? A fish that needs a nightlight!"

    ];
  
    const handleClick = () => {
      setCurrentIndex(currentIndex === jokes.length - 1 ? 0 : currentIndex + 1);
    };
  
    return (
      <div className="joke-container" onClick={handleClick}>
        <h2 className="joke-text" >{jokes[currentIndex]}</h2>
        <p className="joke-text" >Click to grab another joke</p>
      </div>
    );
  };
  
  export default FishJokes;

//   This component uses the useState hook to keep track of the current index of the joke being displayed. It then displays the current joke in an h2 element and updates the index when the component is clicked. The handleClick function checks if the current index is at the end of the array of jokes and resets it to 0 if it is, otherwise it increments it by 1. This allows the jokes to be cycled through one at a time when the component is clicked.
  
  
  
  
  