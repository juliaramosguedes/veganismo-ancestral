import styled from 'styled-components';

import theme from '@/styles/theme';

export const BgFlower = styled.div`
  position: absolute;
  left: 0;
  bottom: 130px;
`

export const Title = styled.h2`
  text-align: center;
  color: ${theme.colors.brown[500]};
`

export const Text = styled.p`
  color: ${theme.colors.brown[900]};
`

export const Container = styled.div`
  display: flex;
  gap: 2.25rem;
  margin: 1.5rem 0;

  & > span {
    flex-shrink: 0;
  }
`
