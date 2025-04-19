// src/components/Articles.jsx
import React from 'react';
import articles from '../data/articles.json';
import ArticleCard from './ArticleCard';

export default function Articles() {
  return (
    <section id="my-words">
      <h2>My Words</h2>
      {articles.map(a => <ArticleCard key={a.id} {...a} />)}
      <button className="button-outline">See more articles</button>
    </section>
  );
}