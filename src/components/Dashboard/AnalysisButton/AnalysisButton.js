import React from 'react';
import { Link } from 'react-router-dom';

function AnalysisButton() {
  return (
    <Link to="/analysis" className="analysis-button">
      Analysis
    </Link>
  );
}

export default AnalysisButton;
