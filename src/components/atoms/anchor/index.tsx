import React, { FC } from 'react';
import { Link as RebassLink, Text } from 'rebass';
import Link from 'next/link';

interface AnchorProps {
  external?: boolean;
  sx?: any;
  href: string | undefined;
}

export const Anchor: FC<AnchorProps> = ({ href, external, sx, children }) => {
  if (external) {
    return (
      <RebassLink fontSize={2} href={href} {...sx}>
        {children}
      </RebassLink>
    );
  }

  return (
    <Text {...sx}>
      <Link href={href}>{children}</Link>
    </Text>
  );
};
