import { GetServerSideProps } from 'next';
import React from 'react';
import { Article } from '../../../../types/types';
import { fetcher } from '../../../api/hooks';
import ArticleIndex from '../../../article/ArticleIndex';

interface ArticleIndexProps {
  article: Article;
}

const ArticleView: React.FC<ArticleIndexProps> = ({ article }) => {
  return (
    <>
      <ArticleIndex article={article} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { article } = context.query;

  const data = await fetcher(
    encodeURIComponent(`*[_type == "articles" && slug.current == "${article}"][0]{..., portal->}`)
  );
  const validArticle = data.result;

  if (!validArticle) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      article: validArticle,
    },
  };
};
export default ArticleView;
