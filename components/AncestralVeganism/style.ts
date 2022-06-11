import styled from 'styled-components';

import { Section as BaseSection } from '@/styles/shared';
import theme from '@/styles/theme';

interface ISubtitleProps {
  color?: typeof theme | string;
  maxW?: string;
}

export const Section = styled(BaseSection)`
  background-color: ${({ theme }) => theme.colors.green[700]};
  color: white;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  overflow: hidden;
  z-index: 1;
`;

export const BgFlower = styled.div`
  position: absolute;
  right: -72px;
  top: 320px;
`

export const Title = styled.h2`
  text-align: center;
`

export const Subtitle = styled.h3`
  text-align: center;
  color: ${({ color }: ISubtitleProps) => color || 'white'};
    ${({ maxW }: ISubtitleProps) =>
      maxW ?
      `
        max-width: ${maxW};
        margin: 0 auto;
      `
    :
      'max-width: 100%'
  };
`

export const Slogan = styled.h3`
  text-align: center;
  color: ${theme.colors.yellow[100]};
  max-width: 32rem;
  margin: 0 auto;
`

export const Container = styled.div`
  background-color: rgba(255,255,255, 0.35);
  padding: 2.25rem 1.5rem;
  display: flex;
  gap: 2.25rem;
  border-radius: 1.5rem;
  z-index: 10;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
  max-width: 66rem;
`

export const Videos = styled.div`
  display: flex;
  gap: 3rem;
  overflow-x: scroll;
  margin: 0 -4.5rem;
  &::-webkit-scrollbar {
    display: none;
  }

  iframe {
    flex-shrink: 0;
  }

  iframe:first-child {
    padding-left: 4.5rem;
  }

  iframe:last-child {
    padding-right: 4.5rem;
  }
`
