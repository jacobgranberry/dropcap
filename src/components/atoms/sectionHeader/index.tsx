import React from 'react';
import { Heading, Box } from 'rebass';

function SectionHeader(props) {
  // Render nothing if no title or subtitle
  if (!props.title && !props.subtitle) {
    return null;
  }

  return (
    <Box as="header" className="auth-section-header">
      {props.title && (
        <Heading variant="h1" sx={{ textAlign: 'left' }}>
          {props.title}
        </Heading>
      )}

      {props.subtitle && (
        <p className={'subtitle' + (props.size > 4 ? ' is-6' : '')}>
          <span className="SectionHeader__no-classname">{props.subtitle}</span>
        </p>
      )}
    </Box>
  );
}

export default SectionHeader;
