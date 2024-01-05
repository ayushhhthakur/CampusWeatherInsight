import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import dataSample from "./data.json";

const generateDateLabels = (numDays) => {
  const dateLabels = [];
  const today = new Date();

  for (let i = numDays - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(today.getDate() - i);
    dateLabels.push(date.toDateString());
  }

  return dateLabels;
};

const Analytics = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = dataSample; // Use the imported data directly
        console.log('JSON Data:', jsonData);

        const dateLabels = generateDateLabels(jsonData.length);
        const dataValues = jsonData.map(item => item.value);

        const ctx = document.getElementById('myChart');
        if (chartRef.current) {
          chartRef.current.destroy();
        }

        chartRef.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: dateLabels,
            datasets: [{
              label: 'Temperature Analysis',
              data: dataValues,
              borderWidth: 1,
              backgroundColor: 'skyblue'
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <div>
        <canvas id="myChart" style={
            {
                width: '100%',
                height: '400px'
            }
        }></canvas>
      </div>
    </div>
  );
}

export default Analytics;
