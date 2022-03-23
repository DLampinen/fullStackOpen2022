import { useState } from 'react';
import Button from './Button';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ];

  const [selected, setSelected] = useState(0);
  const zeroArray = new Array(anecdotes.length).fill(0);
  const [vote, setVote] = useState(zeroArray);

  const handleRandomClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVoteClick = () => {
    const copyVote = [...vote]; // make a copy of state array
    copyVote[selected] += 1;
    setVote(copyVote); // update state array
    console.log('Copy of state array is now:', copyVote);
  };

  // find the anecdote with the most votes and return the index
  const findMostVotes = () => {
    const max = Math.max(...vote);
    return vote.indexOf(max);
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>
        {anecdotes[selected]} <br /> has {vote[selected]} votes
      </p>
      <Button onClick={handleVoteClick} text="vote" />
      <Button onClick={handleRandomClick} text="next anecdote" />
      <h2>Anecdote with the most votes</h2>
      <p>
        {anecdotes[findMostVotes()]} <br /> has {vote[findMostVotes()]} votes
      </p>
    </div>
  );
};

export default App;
