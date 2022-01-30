import React from 'react';
import { Article } from '../../types/types';
import { Box, Flex, Heading, Paragraph, Image } from 'theme-ui';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

interface ArticleViewProps {
  article: Article;
}

const ArticleView: React.FC<ArticleViewProps> = ({ article }) => {
  const { title, _createdAt, _updatedAt, body } = article;

  const parseDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const isUpdated = (dateCreated: string, dateUpdated: string) => {
    return !(parseDate(dateCreated) == parseDate(dateUpdated));
  };

  return (
    <Flex
      sx={{
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Box>
        <Heading as="h1" sx={{ fontFamily: 'heading', mb: '0.5rem', fontSize: '34pt' }}>
          {title}
        </Heading>
        <small suppressHydrationWarning>Publisert: {parseDate(_createdAt)}</small>
        <small suppressHydrationWarning>
          {isUpdated(_createdAt, _updatedAt) ? ', sist endret: ' + parseDate(_updatedAt) : ''}
        </small>
      </Box>
      <Box sx={{}}>
        <ReactMarkdown
          plugins={[remarkGfm]}
          children={body}
          components={{
            h1: renderHeading,
            h2: renderHeading,
            h3: renderHeading,
            h4: renderHeading,
            h5: renderHeading,
            h6: renderHeading,
            p: ({ node, ...props }) => {
              return (
                <Paragraph sx={{ color: 'text', fontFamily: 'body', margin: 'revert' }}>{props.children}</Paragraph>
              );
            },
            a: ({ node, ...props }) => {
              return <Link href={`${props.href}`}>{props.title}</Link>;
            },
            img: ({ node, ...props }) => {
              return (
                <Flex sx={{ justifyContent: 'center' }}>
                  <Image src={`${props.src}`} alt={`${props.alt}`} />
                </Flex>
              );
            },
          }}
        ></ReactMarkdown>
      </Box>
    </Flex>
  );
};

const renderHeading = (props: any) => {
  const headerType = 'h' + props.level;
  return (
    <Heading as={headerType as React.ElementType<any>} sx={{ fontFamily: 'heading' }}>
      {props.children}
    </Heading>
  );
};

export default ArticleView;
