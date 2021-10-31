import Link from 'next/link';
import React from 'react';
import { Box, Heading, Text } from 'theme-ui';
import { Article } from '../../types/types';

interface ArticlePreviewProps {
  data: Article;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ data }) => {
  const { title, excerpt, slug, portal } = data;
  const articleSlug = slug.current;
  const portalSlug = portal.slug.current;

  return (
    <Link href={`/${portalSlug}/${articleSlug}`}>
      <a>
        <Box
          sx={{
            height: 200,
            width: 300,
            border: '1px solid',
            borderColor: 'gray',
            borderRadius: 5,
            padding: 20,
            textAlign: 'center',
          }}
        >
          <Heading sx={{ fontFamily: 'source-sans', mb: 10 }}>{title}</Heading>
          <Text sx={{ color: 'text' }}>{excerpt}</Text>
        </Box>
      </a>
    </Link>
  );
};

export default ArticlePreview;
