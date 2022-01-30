import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { Box, Flex, Grid, Text } from 'theme-ui';
import { Article } from '../../../types/types';

interface TopArticlesElementProps {
  article: Article;
  index: number;
}

export const TopArticlesElement = ({ article, index }: TopArticlesElementProps) => {
  return (
    <Link href={`/${article.portal.slug.current}/${article.slug.current}`}>
      <a>
        <Grid columns={[3, '2ch auto 2.8rem']} sx={{}}>
          <Text sx={{ color: 'primary', width: '2rem', textAlign: 'right' }}>{`${index + 1}. `}</Text>
          <Text>{article.title}</Text>

          <Box>
            <Text>{article.views}</Text>
            <FontAwesomeIcon icon={faEye} style={{ width: '2rem', height: '1rem', color: 'black' }}></FontAwesomeIcon>
          </Box>
        </Grid>
      </a>
    </Link>
  );
};
