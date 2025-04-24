import styled, { css } from 'styled-components';

const base = css`
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSizes.body};
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
`;

const variants = {
  solid: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  `,
  outline: css`
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  `
};

export const Button = styled.a`
  ${base}
  ${({ variant = 'solid' }) => variants[variant]};
  
  img {
    margin-right: ${({ theme }) => theme.space.sm};
    width: 1em;
    height: 1em;
  }
`;