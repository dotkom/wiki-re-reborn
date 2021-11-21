import Link from 'next/link';
import React, { useContext } from 'react';
import { Box, Divider, Flex, Grid } from 'theme-ui';
import { Article } from '../../../types/types';
import { PortalContext } from '../PortalView';

interface PortalAlphabeticalArticlesProps {}

const PortalAlphabeticalArticles: React.FC<PortalAlphabeticalArticlesProps> = () => {
  const articles = useContext(PortalContext);

  const sortedAlphabetically = articles.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  const articlesExist = sortedAlphabetically.length != 0;

  const groupedByFirstLetter: Map<string, Article[]> = sortedAlphabetically.reduce(
    (map, article) => map.set(article.title[0].toUpperCase(), [...(map.get(article.title[0]) || []), article]),
    new Map()
  );

  const columns = (groupedByFirstLetter.size / 2) | 0;

  return (
    <Box>
      <Flex sx={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Alle artikler (A-Å)</h2>
        <Divider sx={{ color: 'secondary', borderBottom: '2px solid', width: '80px' }}></Divider>
      </Flex>
      {articlesExist ? (
        <Grid columns={[columns]}>
          {Array.from(groupedByFirstLetter, ([key, value]) => {
            return (
              <div key={key}>
                <h3>{key}</h3>
                <ul>
                  {value.map((article) => {
                    return (
                      <Link href={`${article.portal.slug.current}/${article.slug.current}`} passHref key={article._id}>
                        <a>
                          <li style={{ color: '#0D5474' }}>{article.title}</li>
                        </a>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </Grid>
      ) : (
        <Flex sx={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <h3>Ingen artikler i denne portalen</h3>
        </Flex>
      )}
    </Box>
  );
};

export default PortalAlphabeticalArticles;
