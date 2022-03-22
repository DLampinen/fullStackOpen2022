// eslint-disable-next-line
const StatisticLine = ({text, value, symbol}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td style={{ width: '60px' }}>{text}</td>
          <td>
            {value} {symbol}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

// eslint-disable-next-line
const Statistics = ({ good, bad, neutral }) => {
  if (good + bad + neutral === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={good + neutral + bad} />
      <StatisticLine
        text="average"
        value={(good - bad) / (good + neutral + bad)}
      />
      <StatisticLine
        text="positive"
        value={100 * (good / (good + neutral + bad))}
        symbol="%"
      />
    </>
  );
};

export default Statistics;
