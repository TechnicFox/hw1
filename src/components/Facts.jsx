import { useState } from 'react';
import styles from './Facts.module.css';

const Facts = () => {
  const facts = [
    'Kyiv is one of the oldest cities in Eastern Europe, with a history spanning over 1,500 years.',
    'The city has been the capital of Ukraine since 1918.',
    'Kyiv Metro is the deepest metro system in the world, with some stations reaching depths of up to 105 meters.',
    'The city is home to the largest Orthodox church in the world, St. Volodymyr\'s Cathedral.',
    'Kyiv hosted the Eurovision Song Contest in 2017.'
  ];

  return (
    <div className={styles.facts}>
      <h2>Facts</h2>
      <ul>
        {facts.map((fact) => (
          <li>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default Facts;