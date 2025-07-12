import React from 'react';
import { Switch } from 'react-router-dom';
import UploadAudio from './UploadAudio/UploadAudio';
import AudioRecorder from './AudioRecorder/AudioRecorder';
import SentimentReport from './Report/SentimentReport';
import AnalysisButton from './AnalysisButton/AnalysisButton';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Welcome to Dashboard</h2>
      <div className="dashboard-options">
        <UploadAudio />
        <AudioRecorder />
        <SentimentReport />
        <AnalysisButton />
      </div>
    </div>
  );
}

export default Dashboard;
