
import React from 'react';
import { Pie } from 'react-chartjs-2';
import './SentimentReport.css';

function SentimentReport({ sentimentReport }) {
  const data = {
    labels: ['Positive', 'Negative', 'Neutral'],
    datasets: [
      {
        data: [
          sentimentReport.positive.length,
          sentimentReport.negative.length,
          sentimentReport.neutral.length
        ],
        backgroundColor: ['#36a2eb', '#ff6384', '#ffce56'],
        hoverBackgroundColor: ['#36a2eb', '#ff6384', '#ffce56']
      }
    ]
  };

  return (
    <div className="sentiment-report">
      <h2>Sentiment Analysis Report</h2>
      <div className="chart-container">
        <Pie data={data} />
      </div>
      <button className="download-button">Download Report</button>
    </div>
  );
}

export default SentimentReport;
