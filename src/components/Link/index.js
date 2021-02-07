import React from 'react';
import NextLink from 'next/link';
import Proptypes from 'prop-types';

function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <a {...props}>
        {children}
      </a>
    </NextLink>
  );
}

Link.propTypes = {
  href: Proptypes.string.isRequired,
  children: Proptypes.node.isRequired,
};

export default Link;
