import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ data }) => {
  const valueArray = data.map((point) => point.value);
  const totalMaximum = Math.max(...valueArray);

  return (
    <div className="chart">
      {data.map((dataPoint) => {
        return (
          <ChartBar
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
            key={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
