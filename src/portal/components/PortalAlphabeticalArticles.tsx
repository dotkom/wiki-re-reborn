import React from 'react';
import { Box, Divider, Flex, Grid } from 'theme-ui';
import { Article } from '../../../types/types';

interface PortalAlphabeticalArticlesProps {
  articles: Article[];
}

const PortalAlphabeticalArticles: React.FC<PortalAlphabeticalArticlesProps> = ({ articles }) => {
  const sortedAlphabetically = articles.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  const groupedByFirstLetter: Map<string, Article[]> = sortedAlphabetically.reduce(
    (map, article) => map.set(article.title[0].toUpperCase(), [...(map.get(article.title[0]) || []), article]),
    new Map()
  );

  const columns = (groupedByFirstLetter.size / 2) | 0;

  return (
    <Box>
      <Flex sx={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Alle artikler (A-Å)</h2>
        <Divider sx={{ color: '#F9B759', borderBottom: '2px solid', width: '80px' }}></Divider>
      </Flex>
      <Grid columns={[columns]}>
        {Array.from(groupedByFirstLetter, ([key, value]) => {
          return (
            <div key={key}>
              <h3>{key}</h3>
              <ul>
                {value.map((article) => {
                  return <li key={article._id}>{article.title}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </Grid>
    </Box>
  );
};

export default PortalAlphabeticalArticles;
