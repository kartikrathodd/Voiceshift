import React, { useState } from 'react';
import Sentiment from 'sentiment';
import './AudioRecorder.css';

function AudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [sentimentScore, setSentimentScore] = useState(0);
  const [sentimentReport, setSentimentReport] = useState('');

  const startRecording = () => {
    setIsRecording(true);
    setTranscript('');
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      setTranscript(speechToText);
      analyzeSentiment(speechToText);
    };
    recognition.start();
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const analyzeSentiment = (text) => {
    const sentiment = new Sentiment();
    const analysis = sentiment.analyze(text);
    setSentimentScore(analysis.score);
    setSentimentReport(analysis);
  };

  return (
    <div className="audio-recorder">
      <h2 className="audio-recorder-title">Record Audio</h2>
      <div className={`microphone-animation ${isRecording ? 'animate' : ''}`}></div>
      <button onClick={startRecording} disabled={isRecording}>
        Start Recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        Stop Recording
      </button>
      <div className="transcript">
        <h3>Transcript:</h3>
        <p>{transcript}</p>
      </div>
      <div className="sentiment-report">
        <h3>Sentiment Analysis Report:</h3>
        <p>Sentiment Score: {sentimentScore}</p>
      </div>
    </div>
  );
}

export default AudioRecorder;
