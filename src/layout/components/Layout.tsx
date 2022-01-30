import React, { ReactElement } from 'react';
import { Box } from 'theme-ui';

interface IProps {
  children: ReactElement | ReactElement[];
}

export const Layout = ({ children }: IProps): ReactElement => {
  return <Box sx={{ width: '50rem', margin: '2rem auto 0' }}>{children}</Box>;
};
