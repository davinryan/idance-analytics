import PieChart from './charts/PieChart';
import * as Chart from 'chart.js';

const pieChart: PieChart = new PieChart('Hello Analytics Reporting API V4');

document.getElementById('root').innerHTML = pieChart.greet();

let ctx = document.getElementById("myChart");
var data = {
  labels: [
    "Red",
    "Blue",
    "Yellow"
  ],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56"
      ],
      hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56"
      ]
    }]
};
let myChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: {
    responsive: true
  }
});
