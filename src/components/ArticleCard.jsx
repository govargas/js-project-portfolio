import React from 'react';

export default function ArticleCard({ date, title, excerpt, url }) {
  return (
    <article className="article-card">
      <small>{date}</small>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <a href={url} className="button">
        <img src="/globe.svg" alt="" aria-hidden="true" /> Read article
      </a>
    </article>
  );
}