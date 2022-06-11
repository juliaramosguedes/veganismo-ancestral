import styled from 'styled-components';

import theme from '@/styles/theme';

export const Section = styled.footer`
  padding: 2.25rem 4.5rem 3.75rem;
  background-color: ${theme.colors.orange[900]};
  display: flex;
  justify-content: space-between;
  color: white;
`

export const Label = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #FFC3AC;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.75rem;
`
