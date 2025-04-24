import styled from 'styled-components';

export const Tag = styled.span`
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-right: ${({ theme }) => theme.space.sm};
`;