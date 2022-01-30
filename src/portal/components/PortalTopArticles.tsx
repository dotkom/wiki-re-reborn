import React, { useContext } from 'react';
import { Box, Divider, Flex, Heading, Text } from 'theme-ui';
import { Article, Portal } from '../../../types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { PortalContext } from '../PortalView';
import Link from 'next/link';
import { UnderlinedHeader } from '../../layout/components/UnderlinedHeader';
import { TopArticlesElement } from './TopArticlesElement';

interface PortalTopArticlesProps {}

const PortalTopArticles: React.FC<PortalTopArticlesProps> = () => {
  const articles = useContext(PortalContext);

  let sorted_list = articles.sort((a, b) => a.views - b.views);
  if (sorted_list.length > 10) {
    sorted_list = sorted_list.slice(0, 10);
  }

  return (
    <Flex
      sx={{
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <UnderlinedHeader size="h2">Mest Leste Artikler</UnderlinedHeader>

      <Flex sx={{ width: 'inherit', flexDirection: 'column', gap: '0.5rem' }}>
        {sorted_list.map((article: Article, key: number) => (
          <TopArticlesElement article={article} index={key} key={key} />
        ))}
      </Flex>
    </Flex>
  );
};

export default PortalTopArticles;
