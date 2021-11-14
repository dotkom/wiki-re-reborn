import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { Article, Portal } from '../../../types/types';
import { fetcher, useArticlesByPortalSlug } from '../../api/hooks';
import PortalView from '../../portal/PortalView';

interface PortalIndexProps {
  portal: Portal;
}

const PortalIndex: React.FC<PortalIndexProps> = ({ portal }) => {
  const {
    name,
    category,
    slug: { current },
  } = portal;
  const { data, loading, error } = useArticlesByPortalSlug(current);

  if (loading) return <>Loading...</>;
  if (error) return <>Error...</>;

  return (
    <>
      {/* <h1>{name} portal</h1>
      {data.result.map((article: Article, key: number) => (
        <Link href={`/${current}/${article.slug.current}`} key={key} passHref>
          <div>
            <a>{article.title}</a>
            <p>{article.excerpt}</p>
          </div>
        </Link>
      ))} */}
      <PortalView />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { portal } = context.query;

  const data = await fetcher(encodeURIComponent(`*[_type == "portals" && slug.current == "${portal}"][0]`));
  const validPortal = data.result;

  if (!validPortal) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      portal: validPortal,
    },
  };
};

export default PortalIndex;
