import React from 'react';

function Section(props) {
  const {
    color,
    size,
    backgroundImage,
    backgroundImageOpacity,
    backgroundImageRepeat,
    children,
    // Passed to section element
    ...otherProps
  } = props;

  return (
    <section
      className={
        'SectionComponent hero section is-block is-relative' +
        (color ? ` is-${color}` : '') +
        (size ? ` is-${size}` : '')
      }
      {...otherProps}
    >
      {props.children}
    </section>
  );
}

export default Section;
