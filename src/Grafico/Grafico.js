import React from 'react';
import ApexChart from 'react-apexcharts';

export default function Chart() {
  const data = [10, 41, 35, 51, 49, 62, 69, 91, 148];
  // JSON.parse(localStorage.getItem(chave))
  const peso = JSON.parse(localStorage.getItem('peso'))
  console.log(peso)
  const weights = [
    { "date": "2023-07-25", "weight": 70 },
    { "date": "2023-07-26", "weight": 68 },
    { "date": "2023-07-27", "weight": 67 },
  ];

  const dates = weights.map(item => item.date);
  const weightValues = weights.map(item => item.weight);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

  const options = {
    chart: {
      animations: {
        enabled: false, // Disable animations for smoother interactivity
      },
      toolbar: {
        show: true, // Show the chart toolbar
      },
    },
    xaxis: {
      categories: months, // Months as categories
    },
    yaxis: {
      tooltip: {
        enabled: true,
        formatter: function (value) {
          // Custom tooltip format to show both data and weight
          const index = data.indexOf(value);
          if (index !== -1) {
            const weight = weightValues[index];
            const date = dates[index];
            return `Data: ${value} Weight: ${weight || 'N/A'} Date: ${date || 'N/A'}`;
          }
          return '';
        },
      },
    },
    markers: {
      size: 8, // Customize the size of the markers
      hover: {
        sizeOffset: 4, // Increase marker size on hover for better visibility
      },
    },
  };

  const series = [
    {
      name: 'Data and Weight', // Series name for the legend
      data: data.map((value, index) => ({ x: months[index], y: weightValues[index] || 0 })), // Use weight values in the series data
    },
  ];

  return <ApexChart options={options} series={series} type="scatter" height={350} width={500} />;
}
