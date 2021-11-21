import React, { createContext } from 'react';
import { Box, Divider, Flex, Heading, Text } from 'theme-ui';
import { Article, Portal } from '../../types/types';
import PortalAlphabeticalArticles from './components/PortalAlphabeticalArticles';
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
      <Flex sx={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Heading sx={{ fontFamily: 'source-serif', fontSize: '28pt', textAlign: 'center', fontWeight: 'bold' }}>
          {portalName} Portal
        </Heading>

        <Divider sx={{ color: '#F9B759', borderBottom: '4px solid', width: '80px' }} />
        <Text sx={{ maxWidth: '700px', textAlign: 'center' }}>{portalDescription}</Text>
      </Flex>
      <PortalContext.Provider value={articles}>
        <Box>
          <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <PortalTopArticles />
          </Flex>
          <PortalAlphabeticalArticles />
        </Box>
      </PortalContext.Provider>
    </>
  );
};
export default PortalView;
