import styled from 'styled-components';

export const Section = styled.section`
  padding: ${({ theme }) => theme.space.xl} ${({ theme }) => theme.space.md};
  max-width: 1200px;
  margin: 0 auto;
`;