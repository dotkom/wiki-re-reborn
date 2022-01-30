import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { Article, Portal } from '../../../types/types';
import { fetcher, useArticlesByPortalSlug } from '../../api/hooks';
import { Layout } from '../../layout/components/Layout';
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
    <Layout>
      <PortalView portal={portal} articles={data.result} />
    </Layout>
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
