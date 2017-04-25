import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';
var poems = [
  {
    poemId: 391,
    startTime: '11/16/09 2:39:26 am EST',
    lines: [
      'The country mice bring their straw banjos',
      'and play a cool rendition of "For Your Love"',
      'by Jenton Jenkins at 1945',
      'Main Street, Anytown, USA',
      'Zielona Gora, lubuskie, Poland',
      'plots and land for sale',
      'anymore'
    ]
  },
  {
    poemId: 390,
    lines: [
      'I HAD A TICKET!',
      'But not anymore.',
      'It ends now.',
      'holy cow',
      'put on the crown.',
    ]
  },
  {
    poemId: 439,
    startTime: '12/15/09 4:41:18 am',
    endTime: '3/2/10 6:01:04 am EST',
    lines: [
      "There's an eight ball, a seven ball. Then, there's you.",
      "It could've been you",
      "complaisant angelic waves swaying amogst stars",
      "never saw the attractive black hole drawing closer",
      "the light lost, lost his mind",
      "as it had accidentally rolled under the couch"
    ]
  }
]
ReactDOM.render(
  <App poems={poems}/>,
  document.getElementById('root')
);
