import { StatisticLine } from "./StatisticLine";

export const Statistics = ({ good, neutral, bad }) => {
  const empyStatistics = () => {
    return good === 0 && neutral === 0 && bad === 0;
  };

  if (empyStatistics()) {
    return <p>No feedback given</p>;
  }

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  const statistics = [
    { text: "good", value: good },
    { text: "neutral", value: neutral },
    { text: "bad", value: bad },
    { text: "all", value: all },
    { text: "average", value: average },
    { text: "positive", value: positive },
  ];

  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          {statistics.map((statistic) => (
            <StatisticLine
              key={statistic.text}
              text={statistic.text}
              value={statistic.value}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
