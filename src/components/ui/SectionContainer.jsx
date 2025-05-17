// src/components/ui/SectionContainer.jsx
import styled from 'styled-components';
import { media } from '../../styles/media';

export const Section = styled.section`
  width: 100%;
  margin: 0 auto;

  /* Mobile & tablet: 64px top/bottom, 24px left/right */
  padding: ${({ theme }) => `${theme.space.xxl} ${theme.space.lg}`};

  /* Desktop (≥1024px): 128px on all sides */
  ${media.lg} {
    padding: 128px;
  }
`;