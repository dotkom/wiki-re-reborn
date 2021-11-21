import React, { useContext } from 'react';
import { Box, Divider, Flex, Heading, Text } from 'theme-ui';
import { Article, Portal } from '../../../types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { PortalContext } from '../PortalView';
import Link from 'next/link';

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
        minHeight: '316px',
        width: '350px',
      }}
    >
      <Heading sx={{ fontFamily: 'source-serif-pro', fontSize: '20pt', textAlign: 'center', fontWeight: 'normal' }}>
        Mest Leste Artikler
      </Heading>

      <Divider sx={{ color: '#F9B759', borderBottom: '2px solid', width: '80px' }} />

      <Box sx={{ height: 'inherit', width: 'inherit' }}>
        <ol style={{ margin: 0 }}>
          {sorted_list.map((article: Article, key: number) => (
            <li style={{ color: '#0D5474' }} key={key}>
              <Link href={`/${article.portal.slug.current}/${article.slug.current}`}>
                <a>
                  <Flex
                    sx={{ flexDirection: 'row', justifyContent: 'space-between', height: '30px', alignItems: 'center' }}
                  >
                    <Box>
                      <Text sx={{ fontFamily: 'sans-serif-pro', color: 'text' }}>{article.title}</Text>
                    </Box>

                    <Box>
                      <Text sx={{ fontFamily: 'sans-serif-pro', color: 'text', mr: '5px' }}>{article.views}</Text>
                      <FontAwesomeIcon
                        icon={faEye}
                        style={{ width: '22px', height: '14px', color: 'black' }}
                      ></FontAwesomeIcon>
                    </Box>
                  </Flex>
                </a>
              </Link>
            </li>
          ))}
        </ol>
      </Box>
    </Flex>
  );
};

export default PortalTopArticles;
