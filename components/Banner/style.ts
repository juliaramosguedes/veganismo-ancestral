import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  height: 30rem;
  overflow: hidden;
`;

export const Video = styled.video`
  position: absolute;
  top: -10rem;
  left: 0;
  width: 100%;
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 57rem;
  padding: 4.5rem 12rem 4.5rem 4.5rem;
  background: linear-gradient(90deg, rgba(174, 248, 241, 0.65) 73.55%, rgba(174, 248, 241, 0.531436) 79.58%, rgba(174, 248, 241, 0.406006) 83.31%, rgba(174, 248, 241, 0.199461) 86.41%, rgba(174, 248, 241, 0) 90.77%);
`

export const Title = styled.h1`
  font-weight: 800;
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: ${({theme}) => theme.colors.teal[700]};
`

export const Subtitle = styled.p`
  font-weight: 600;
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: ${({theme}) => theme.colors.teal[700]};
  margin: 1.5rem 0;
`
