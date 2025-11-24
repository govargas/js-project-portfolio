import React from "react";

export default function ProjectCard({
  image,
  tags,
  title,
  description,
  demoUrl,
  codeUrl,
}) {
  return (
    <article>
      <img src={image} alt={`${title} screenshot`} />
      <div>
        <div className="tags">
          {tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        {demoUrl && (
          <a href={demoUrl} className="button">
            <img src="/globe.svg" alt="" aria-hidden="true" /> Live demo
          </a>
        )}
        {codeUrl && (
          <a href={codeUrl} className="button">
            <img src="/github.svg" alt="" aria-hidden="true" /> View Code
          </a>
        )}
      </div>
    </article>
  );
}
