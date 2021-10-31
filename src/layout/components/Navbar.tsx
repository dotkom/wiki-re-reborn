import React from 'react';
import { Box, Flex, Link as ThemeLink, Input } from 'theme-ui';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../public/Online_hvit_o.png';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Box color="white" bg="primary" sx={{ height: '60px' }}>
      <Flex sx={{ height: 'inherit' }}>
        <Box sx={{ flex: '1 1 auto', margin: 'auto 0 auto 2ch' }}>
          <Image src={logo} height={30} width={30} alt="Online Logo" />
        </Box>
        <Box sx={{ height: '40px', margin: 'auto 0', width: '250px', borderRadius: '20px' }} bg="primary-dark">
          <Input
            sx={{
              height: '40px',
              margin: 'auto 0',
              minWidth: '250px',
              border: 'none',
              borderRadius: '20px',
            }}
          />
          <FontAwesomeIcon
            icon={faSearch}
            style={{
              width: '18px',
              margin: '10px',
              position: 'relative',
              left: '210px',
              top: '-40px',
              color: 'primary',
            }}
          />
        </Box>
        <Flex sx={{ margin: 'auto 0' }}>
          <Link href="/" passHref>
            <ThemeLink href="#" p={3}>
              Hjem
            </ThemeLink>
          </Link>
          <Link href="/collaborate" passHref>
            <ThemeLink href="#" p={3}>
              Bidra
            </ThemeLink>
          </Link>
          <Link href="/portal" passHref>
            <ThemeLink href="#" p={3}>
              Portal
            </ThemeLink>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
