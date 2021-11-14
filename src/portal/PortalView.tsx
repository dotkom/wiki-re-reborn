import React from 'react';
import { Article } from '../../types/types';
import PortalAlphabeticalArticles from './components/PortalAlphabeticalArticles';

interface PortalViewProps {
  articles: Article[];
}

const PortalView: React.FC<PortalViewProps> = ({ articles }) => {
  return (
    <>
      <PortalAlphabeticalArticles articles={articles} />
    </>
  );
};
export default PortalView;
