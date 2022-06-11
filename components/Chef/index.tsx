import React from 'react';
import Image from 'next/image';

import { BgFlower, Title, Text, Container } from './style';
import { Section } from '@/styles/shared';
import Avatar from '@/assets/images/avatar.png';
import FlowerOrange from '@/assets/icons/flower-orange.svg';

const Chef: React.FC = () => (
  <Section id="chef">
    <BgFlower>
      <Image src={FlowerOrange} alt="Flor laranja" />
    </BgFlower>
    <Title>Chef Carla Ioost</Title>
    <Container>
      <Image src={Avatar} alt="Carla Ioost" />
      <div>
        <Text>Carla Ioost iniciou sua trajetória como culinarista e pesquisadora de alimentos e adaptações a partir da necessidade que surgiu no ano de 2008 ao se tornar vegana.</Text>
        <Text>Idealizadora de projetos como o <strong>VidaVeg!</strong>, trabalhando com alimentação vegana através de loja virtual e encomendas; o <strong>Ioost Bistrô Vegano</strong>, em Pelotas (RS), onde atuou por três anos, sendo o primeiro espaço vegano e glúten free do estado; criadora do <strong>Veganismo Ancestral</strong>, fornece refeiçoes inclusivas em Cananéia (SP).</Text>
        <Text>Nossa chef, além das diversas receitas criadas nesses mais de dez anos, ainda está à frente do <strong>Temperando Na Estrada</strong>, projeto que leva saberes aos mais diferentes cantos do país, ministrando cursos, oficinas, palestras e workshops sobre Inteligência Alimentar e alimentação inclusiva.</Text>
      </div>
    </Container>
  </Section>
);

export default Chef;
