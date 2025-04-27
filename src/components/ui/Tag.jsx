import styled from 'styled-components';

export const Tag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.md}`};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSizes.body};
`;
