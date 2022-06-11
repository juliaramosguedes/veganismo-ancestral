import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 72px;
  background-color: ${({ theme }) => theme.colors.teal[700]};
`;

export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
    color: ${({ theme }) => theme.colors.teal[100]};
`
