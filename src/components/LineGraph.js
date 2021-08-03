import React from "react";
import { Line } from "react-chartjs-2";

function LineGraph(props) {
  return (
    <div
      style={{
          height: "600px",
          width: "600px",
          margin: '50px auto'
      }}
      >
        <Line
          data={{
              labels: props.label.map(l => l.substr(0, 10)),
              datasets: [
                {
                  label: "Corona Virus Dataset",
                  fill: true,
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderCapStyle: "butt",
                  borderColor: "rgba(75,192,192,1)",
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBackgroundColor: "#fff",
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBorderWidth: 1,
                  pointHitRadius: 10,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointHoverRadius: 5,
                  pointRadius: 1,
                  data: props.yAxis,
                },
              ],
            }
          }
        />
    </div>
  );
}

export default LineGraph;
