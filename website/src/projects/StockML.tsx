import { ProjectPage } from '../ProjectPage';

export function StockML() {
  return (
    <ProjectPage
      title="Stock Volatility ML Model"
      date="January 2024"
      tech={['Python', 'TensorFlow', 'Pandas', 'Scikit-learn']}
      image="/stockmlpic.png"
      description="A machine learning model designed to forecast stock market volatility using supervised learning techniques. This project combines financial data analysis with advanced ML algorithms to predict market movements and help make informed trading decisions."
      features={[
        'Real-time data processing pipeline for market data',
        'LSTM neural network architecture for time series prediction',
        'Feature engineering for technical indicators',
        'Backtesting framework for model validation',
        'Interactive visualization dashboard for results',
        'Automated trading signal generation'
      ]}
      repoUrl="https://github.com/nelonmelons/stock-ml"
      demoUrl="https://stock-ml-demo.example.com"
    />
  );
} 