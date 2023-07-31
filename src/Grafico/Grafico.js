import React from 'react';
import ApexChart from 'react-apexcharts';

export default function Chart() {
  const data = [10, 41, 35, 51, 49, 62, 69, 91, 148];
  // JSON.parse(localStorage.getItem(chave))
  const weights = JSON.parse(localStorage.getItem('peso')) || [];
  console.log('wheits', weights)

  const dates = weights.map(item => item.date);
  console.log('date', dates)
  const weightValues = weights.map(item => item.weight);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

  const options = {
    chart: {
      animations: {
        enabled: false
      },
      toolbar: {
        show: true
      },
    },
    xaxis: {
      categories: months
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
      data: weights.map((value, index) => ({ x: dates[index], y: weightValues[index] || 0 }))
    },
  ];

  return (
    <div className='grid'>
      <ApexChart options={options} series={series} type="line" height={350} width={500} />
    </div>
  );
}
