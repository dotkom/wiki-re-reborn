import React from 'react';
import { Article } from '../../../types/types';

interface PortalAlphabeticalArticlesProps {
  articles: Article[];
}

const PortalAlphabeticalArticles: React.FC<PortalAlphabeticalArticlesProps> = ({ articles }) => {
  const sortedAlphabetically = articles.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  const groupedByFirstLetter: Map<string, Article[]> = sortedAlphabetically.reduce(
    (map, article) => map.set(article.title[0], [...(map.get(article.title[0]) || []), article]),
    new Map()
  );

  return (
    <>
      {Array.from(groupedByFirstLetter, ([key, value]) => {
        return (
          <div key={key}>
            <h2>{key}</h2>
            <ul>
              {value.map((article) => {
                return <li key={article._id}>{article.title}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default PortalAlphabeticalArticles;
