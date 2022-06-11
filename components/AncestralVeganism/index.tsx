import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Section, BgFlower, Title, Subtitle, Container, Content, Videos, Slogan } from './style';
import { Button } from '@/styles/shared';
import FlowerRed from '@/assets/icons/flower-red.svg';
import Ebook from '@/assets/images/ebook.png';
import theme from "@/styles/theme";

const AncestralVeganism: React.FC = () => (
  <Section id="veganismo-ancestral">
    <BgFlower>
      <Image src={FlowerRed} alt="Flor vermelha" />
    </BgFlower>
  <Title>Veganismo Ancestral</Title>
    <Slogan>&quot;Buscar no <strong>passado</strong> uma forma mais sã de existir, para aplicar no <strong>presente</strong> e assim transformar o <strong>futuro</strong>.&quot;</Slogan>
    <p>Levamos uma nova consciência alimentar e em todos os níveis, respeitando todas as formas de vida,  defendendo nossos irmãos animais e nosso <strong>planeta</strong>. Buscando nas culturas ancestrais como ayurvédica, chinesa, alimentação indigena e também nos saberes antigos de nossos avós, encontramos uma maneira mais feliz e simples de nutrir nosso corpo. Uma nova forma de pensar, agir e viver está acontecendo e exatamente <strong>agora</strong> uma mudança chegou pra <strong>ficar</strong>! Propomos uma revolução eficaz e amorosa que começa pelo prato, onde através de <strong>escolhas mais éticas</strong> e com consciência do que estamos ingerindo, sejamos fieis ao nosso lema principal:
      “Porque a <strong>comida</strong> sacia o corpo, mas somente o <strong>alimento</strong> nutre o espírito”.</p>
    <Container>
      <Image src={Ebook} alt="E-book Entre Caldeirões e Alquimias" width={235} height={296}/>
      <Content>
      <Subtitle>Entre Caldeirões e Alquimias</Subtitle>
      <p>Conheça o nosso livro de culinária inclusiva.
        Com a simplicidade da cozinha de casa, com seus métodos e técnicas ancestrais, apresentamos uma culinária livre de crueldade animal, que inclui e agrega as mais diversas restrições alimentares. Trazemos soluções práticas, acessíveis, saudáveis e além de, é claro, super deliciosas.</p>
      <Link href="https://hotmart.com/pt-br/marketplace/produtos/entre-caldeiroes-e-alquimias/M39967340T" passHref>
        <Button as="a" target="_blank" bgColor={theme.colors.yellow[100]} color={theme.colors.brown[900]}>Comprar e-book</Button>
      </Link>
      </Content>
    </Container>
    <Subtitle>Youtube</Subtitle>
    <p>Conheça nosso canal no Youtube onde compartilhamos receitas, entrevistas e muito mais.</p>
    <Videos>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/-DlM26dMPhs" title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/8_cFiPNhv8M" title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/-2rB75g7lnw" title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/xIoTc1VtDHM" title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/8_OkoYDEF0k" title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/OfOGTuheRJs" title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
    </Videos>
  </Section>
);

export default AncestralVeganism;
