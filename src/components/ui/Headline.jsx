import styled from 'styled-components';
import { media } from '../../styles/media';

export const Headline = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  margin-bottom: ${({ theme }) => theme.space.lg};
  
  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes.h1};
  }
`;