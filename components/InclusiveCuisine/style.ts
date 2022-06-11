import styled from 'styled-components';
import { Section as BaseSection } from '@/styles/shared';

export const Section = styled(BaseSection)`
  color: ${({ theme }) => theme.colors.green[900]};
  padding-right: 12rem;
`;

export const BgFlower = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 2.25rem;
`

export const Reasons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.25rem;
`

export const Reason = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
