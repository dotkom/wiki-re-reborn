import { GetServerSideProps } from 'next';
import React from 'react';
import { Article } from '../../../../types/types';
import { fetcher } from '../../../api/hooks';
import ArticleView from '../../../article/ArticleView';
import { Layout } from '../../../layout/components/Layout';

interface ArticleIndexProps {
  article: Article;
}

const ArticleIndex: React.FC<ArticleIndexProps> = ({ article }) => {
  return (
    <Layout>
      <ArticleView article={article} />
    </Layout>
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
export default ArticleIndex;
