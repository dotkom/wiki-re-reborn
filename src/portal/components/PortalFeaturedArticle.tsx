import React, { useContext } from 'react';
import { Box, Divider, Flex, Heading, Text, Image, Paragraph } from 'theme-ui';
import { Article } from '../../../types/types';
import Link from 'next/link';
import { PortalContext } from '../PortalView';
import { UnderlinedHeader } from '../../layout/components/UnderlinedHeader';

interface PortalFeaturedArticleProps {}

const PortalFeaturedArticle: React.FC<PortalFeaturedArticleProps> = () => {
  const articles = useContext(PortalContext);

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
      }}
    >
      <UnderlinedHeader size="h2">Nyeste Artikkel</UnderlinedHeader>

      <Link href={`/${portalSlug}/${articleSlug}`}>
        <a>
          <Flex
            sx={{
              flexDirection: 'row',
            }}
          >
            {featured_image() != '' ? (
              <Box sx={{ minWidth: '13rem', height: '15rem', mr: '1rem' }}>
                <Image src={featured_image()} sx={{ maxWidth: '13rem', minWidth: '11rem', maxHeight: '15rem' }} />
              </Box>
            ) : (
              ''
            )}
            <Box>
              <Heading
                as="h3"
                sx={{
                  fontFamily: 'heading',
                }}
              >
                {featured_article.title}
              </Heading>
              <Paragraph sx={{ fontFamily: 'body', color: 'text' }}>{featured_article.excerpt}</Paragraph>
            </Box>
          </Flex>
        </a>
      </Link>
    </Flex>
  );
};

export default PortalFeaturedArticle;
