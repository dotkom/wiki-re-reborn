import React, { createContext } from 'react';
import { Box, Divider, Flex, Grid, Heading, Text } from 'theme-ui';
import { Article, Portal } from '../../types/types';
import { UnderlinedHeader } from '../layout/components/UnderlinedHeader';
import PortalAlphabeticalArticles from './components/PortalAlphabeticalArticles';
import PortalFeaturedArticle from './components/PortalFeaturedArticle';
import PortalTopArticles from './components/PortalTopArticles';

interface PortalViewProps {
  articles: Article[];
  portal: Portal;
}

export const PortalContext = createContext<Article[]>([]);

const PortalView: React.FC<PortalViewProps> = ({ articles, portal }) => {
  const portalName = portal.name;
  const portalDescription = portal.description;

  return (
    <>
      <Grid columns={[2, '2fr 1fr']}>
        <Box sx={{ gridColumn: 'span 2' }}>
          <UnderlinedHeader size="h1">{portalName} Portal</UnderlinedHeader>
          <Text
            sx={{
              maxWidth: '30rem',
              textAlign: 'center',
              fontFamily: 'body',
              color: 'text',
            }}
          >
            {portalDescription}
          </Text>
        </Box>
        <PortalContext.Provider value={articles}>
          <Box>
            <PortalFeaturedArticle />
          </Box>
          <Box>
            <PortalTopArticles />
          </Box>
          <Box sx={{ gridColumn: 'span 2' }}>
            <PortalAlphabeticalArticles />
          </Box>
        </PortalContext.Provider>
      </Grid>
    </>
  );
};
export default PortalView;
