import React from 'react';
import { render } from 'react-dom';
import App from '../components/App';

document.addEventListener('DOMContentLoaded', () => {
  console.log('dom content loaded');
  const container = document.body.appendChild(document.createElement('div'));
  render(<App/>, container);
});
