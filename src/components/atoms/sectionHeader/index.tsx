import React from 'react';
import { Heading } from 'rebass';

function SectionHeader(props) {
  // Render nothing if no title or subtitle
  if (!props.title && !props.subtitle) {
    return null;
  }

  return (
    <header className={'SectionHeader' + (props.className ? ` ${props.className}` : '')}>
      {props.title && <Heading variant="h1">{props.title}</Heading>}

      {props.subtitle && (
        <p className={'subtitle' + (props.size > 4 ? ' is-6' : '')}>
          <span className="SectionHeader__no-classname">{props.subtitle}</span>
        </p>
      )}
    </header>
  );
}

export default SectionHeader;
