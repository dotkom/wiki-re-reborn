import React from 'react';
import { Box, Divider, Flex, Heading, Text, Image, Paragraph } from 'theme-ui';
import { Article } from '../../../types/types';
import Link from 'next/link';

interface PortalFeaturedArticleProps {
  articles: Article[];
}

const PortalFeaturedArticle: React.FC<PortalFeaturedArticleProps> = ({ articles }) => {
  let featured_article = articles[0];
  articles.forEach((article) => {
    const featured_date = new Date(featured_article._createdAt);
    const new_date = new Date(article._createdAt);
    if (featured_date < new_date) {
      featured_article = article;
    }
  });

  const articleSlug = featured_article.slug.current;
  const portalSlug = featured_article.portal.slug.current;

  const featured_image = () => {
    const regex_array = featured_article.body.match(/(https?:\/\/.*\.(?:png|jpg))/i);
    if (regex_array == null) {
      return '';
    }
    return regex_array[0];
  };

  return (
    <Flex
      sx={{
        alignItems: 'center',
        flexDirection: 'column',
        width: '666px',
        minHeight: '316px',
      }}
    >
      <Heading sx={{ fontFamily: 'source-serif-pro', fontSize: '24pt', textAlign: 'center', fontWeight: 'normal' }}>
        Nyeste Artikkel
      </Heading>

      <Divider sx={{ color: '#F9B759', borderBottom: '2px solid', width: '140px', mb: '20px' }} />

      <Link href={`/${portalSlug}/${articleSlug}`}>
        <a>
          <Flex
            sx={{
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            {featured_image() != '' ? (
              <Box sx={{ minWidth: '220px', height: '240px', mr: '20px' }}>
                <Image src={featured_image()} sx={{ minWidth: '220px', height: '240px' }} />
              </Box>
            ) : (
              ''
            )}
            <Box sx={{ minHeight: '240px' }}>
              <Heading
                sx={{
                  fontFamily: 'source-serif-pro',
                  fontSize: '24pt',
                  textAlign: 'left',
                  fontWeight: 'normal',
                  mb: '10px',
                }}
              >
                {featured_article.title}
              </Heading>
              <Paragraph sx={{ fontFamily: 'source-sans-pro', color: 'text', fontSize: '14pt' }}>
                {featured_article.excerpt}
              </Paragraph>
            </Box>
          </Flex>
        </a>
      </Link>
    </Flex>
  );
};

export default PortalFeaturedArticle;
