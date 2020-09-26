import React, { ReactNode } from 'react';
import { Link as RebassLink, Text, SxStyleProp } from 'rebass';
import Link from 'next/link';

export const Anchor = ({
  href,
  external,
  sx,
  children,
}: {
  href: string | undefined;
  external?: boolean;
  sx?: SxStyleProp;
  children: string | ReactNode;
}) => {
  if (external) {
    return (
      <RebassLink className="anchor" fontSize={2} href={href} sx={{ ...sx, cursor: 'pointer' }}>
        {children}
      </RebassLink>
    );
  }

  return (
    <Link href={href}>
      <Text as="span" variant="anchor" sx={{ ...sx, cursor: 'pointer' }}>
        {children}
      </Text>
    </Link>
  );
};
