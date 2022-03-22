import { useState } from 'react';
import Button from './Button';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" />
      <Button text="neutral" />
      <Button text="bad" />
    </div>
  );
};

export default App;
