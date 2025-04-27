import styled, { css } from 'styled-components';

const base = css`
  position: relative;
  display: block;
  width: 287px;
  height: 48px;
  padding: 0;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 500;
  border-radius: 12px;
  &:hover { opacity: 0.9; }
`;

const variants = {
  solid: css`
    background: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
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
    position: absolute;
    left: 16px;
    top: 8px;
    width: 32px;
    height: 32px;
  }

  span {
    position: absolute;
    left: ${({ variant }) => (variant === 'solid' ? '63px' : '64px')};
    top: 10px;
    line-height: 1;
  }
`;