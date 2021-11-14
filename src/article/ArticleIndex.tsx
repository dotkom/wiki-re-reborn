import React from 'react';
import { Article } from '../../types/types';
import { Box, Flex, Heading, Paragraph } from 'theme-ui';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

interface ArticleIndexProps {
  article: Article;
}

const ArticleIndex: React.FC<ArticleIndexProps> = ({ article }) => {
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
        margin: '30px 50px',
      }}
    >
      <Box
        sx={{
          pb: '10px',
        }}
      >
        <Heading as="h1" sx={{ fontFamily: 'source-sans', mb: '5px', fontSize: '34pt' }}>
          {title}
        </Heading>
        <small suppressHydrationWarning>Publisert: {parseDate(_createdAt)}</small>
        <small suppressHydrationWarning>
          {isUpdated(_createdAt, _updatedAt) ? ', sist endret: ' + parseDate(_updatedAt) : ''}
        </small>
      </Box>
      <Box
        sx={{
          paddingRight: '20%',
        }}
      >
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
                <Paragraph
                  variant="block"
                  sx={{ color: 'text', fontSize: '16px', fontFamily: 'source-sans', margin: 'revert' }}
                >
                  {props.children}
                </Paragraph>
              );
            },
            a: ({ node, ...props }) => {
              return <Link href={`${props.href}`}>{props.title}</Link>;
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
    <Heading as={headerType as React.ElementType<any>} sx={{ fontFamily: 'source-sans', margin: '30px 0 8px 0' }}>
      {props.children}
    </Heading>
  );
};

export default ArticleIndex;
