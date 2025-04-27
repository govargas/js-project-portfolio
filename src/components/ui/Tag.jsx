import styled from 'styled-components';

export const Tag = styled.span`
  display: flex;                          /* flex to center its text */
  align-items: center;
  justify-content: center;
  flex: 1;                                /* equally share available space */
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.md}`};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSizes.body};
`;