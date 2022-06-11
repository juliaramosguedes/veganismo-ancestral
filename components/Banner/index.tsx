import React, { useRef } from 'react';
import Link from 'next/link';

import { Container, Header, Subtitle, Title, Video } from './style';
import { Button } from '@/styles/shared';
import theme from "@/styles/theme";

const Banner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const setPlayBack = () => {
     if (videoRef?.current) videoRef.current.playbackRate = 0.4;
  };

  return (
    <Header>
      <Video autoPlay loop muted onPlay={setPlayBack} ref={videoRef}>
        <source src="videos/cananeia.mp4"  type="video/mp4" />
      </Video>
      <Container>
        <Title>Refeições inclusivas em Cananéia SP</Title>
        <Subtitle>Delivery de refeições frescas
          veganas, sustentáveis e antialergênicas
          para todas as pessoas, com ou sem
          restrições alimentares</Subtitle>
        <Link href="/cardapio" passHref>
          <Button as="a" color={theme.colors.teal[500]} bgColor="white">Conheça o cardápio</Button>
        </Link>
      </Container>
    </Header>
  );
}

export default Banner;
