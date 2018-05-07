import React from 'react';

export default ({ item }) => (
  <li className="howto-item">
    <div className="howto-item__question">{item.question}</div>
    <div className="howto-item__answer">{item.answer}</div>
    <div className="howto-item__snippet">{item.snippet}</div>
  </li>
);
