import React, { ReactElement } from 'react';
import { Box, Divider, Flex, Heading } from 'theme-ui';

interface IProps {
  children: string | string[];
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const UnderlinedHeader = ({ children, size }: IProps): ReactElement => {
  return (
    <Flex sx={{ width: 'initial', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
      <Heading as={size} sx={{ textAlign: 'center' }}>
        {children}
      </Heading>
      <Divider sx={{ color: 'secondary', width: '5rem', margin: '0.5rem auto 1rem', borderBottom: '0.2rem solid' }} />
    </Flex>
  );
};
