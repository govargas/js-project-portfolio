import styled from 'styled-components';
import { media } from '../../styles/media';

export const Headline = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  margin-bottom: ${({ theme }) => theme.space.lg};
  text-align: center;
  color: ${({ inverse, theme }) =>
    inverse ? theme.colors.background : theme.colors.text};
  
  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes.h1};
  }
`;