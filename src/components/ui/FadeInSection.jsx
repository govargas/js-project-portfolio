import React from 'react';
import styled from 'styled-components';
import { useInView } from '../../hooks/useInView';

const _FadeIn = ({ className, children }) => {
  const [ ref, inView ] = useInView(0.2);
  return (
    <div ref={ref} className={`${className} ${inView ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export const FadeInSection = styled(_FadeIn)`
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  &.visible {
    opacity: 1;
    transform: none;
  }
`;