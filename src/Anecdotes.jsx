import { useState } from "react";

export const Anecdotes = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const nextAnecdote = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));
  const vote = () => {
    const clonedVotes = [...votes];
    clonedVotes[selected] += 1;
    setVotes(clonedVotes);
  };

  const mostVotes = Math.max(...votes);

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={nextAnecdote}>next anecdote</button>
      <button onClick={vote}>vote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[votes.indexOf(mostVotes)]}</p>
    </>
  );
};
