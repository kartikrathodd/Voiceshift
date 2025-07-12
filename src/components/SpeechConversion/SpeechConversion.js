import React, { useState } from 'react';
import Sentiment from 'sentiment';
import './SpeechConversion.css';

function SpeechConversion() {
  const [transcript, setTranscript] = useState('');
  const [sentimentReport, setSentimentReport] = useState('');

  // Function to handle speech-to-text conversion
  const convertSpeechToText = () => {
    // Simulate speech-to-text conversion process
    // Replace this with actual implementation using Web Speech API or other libraries
    const speechText = 'This is a sample speech. Replace it with actual speech-to-text result.';
    setTranscript(speechText);
    analyzeSentiment(speechText);
  };

  // Function to analyze sentiment of the text
  const analyzeSentiment = (text) => {
    const sentiment = new Sentiment();
    const analysis = sentiment.analyze(text);
    const report = analysis.score > 0 ? 'Positive' : analysis.score === 0 ? 'Neutral' : 'Negative';
    setSentimentReport(report);
  };

  return (
    <div className="speech-conversion">
      <h3>Speech Conversion and Analysis</h3>
      <button onClick={convertSpeechToText}>Convert Speech to Text</button>
      <div>
        <h4>Transcript:</h4>
        <p>{transcript}</p>
      </div>
      <div>
        <h4>Sentiment Analysis:</h4>
        <p>{sentimentReport}</p>
      </div>
    </div>
  );
}

export default SpeechConversion;
