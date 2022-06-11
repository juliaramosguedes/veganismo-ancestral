import React from 'react';
import Image from 'next/image';

import { BgFlower, Reason, Reasons, Section, Title } from './style';
import IconInclusive from '@/assets/images/icon-inclusive.png';
import IconOrganic from '@/assets/images/icon-organic.png';
import IconSustainable from '@/assets/images/icon-sustainable.png';
import IconVegan from '@/assets/images/icon-vegan.png';
import FlowerYellow from '@/assets/icons/flower-yellow.svg';

const InclusiveCuisine: React.FC = () => (
  <Section>
    <Title>Culinária Inclusiva</Title>
    <p>
      Cozinhar é, antes de tudo, um ato social e político.<br />
      Quando você cozinha, no que e em quem você pensa?<br />
      A comida é essencial para a vida e deveria ser para todos.<br />
      Ao preparar nossas refeições, nós consideramos os animais, nosso planeta e, claro, todas as pessoas que precisam se alimentar.<br />
      Por isso, fazemos uma comida:
    </p>
    <Reasons>
      <Reason>
        <Image src={IconVegan} alt="Culinária Vegana" />
        <h3>
          Vegana
        </h3>
      </Reason> <Reason>
        <Image src={IconOrganic} alt="Culinária orgânica" />
        <h3>
          Orgânica
        </h3>
      </Reason> <Reason>
        <Image src={IconSustainable} alt="Culinária sustentável" />
        <h3>
          Sustentável
        </h3>
      </Reason> <Reason>
        <Image src={IconInclusive} alt="Culinária sem glúten, sem lactose e sem açúcar" />
        <h3>
          Sem glúten<br />
          Sem lactose<br />
          Sem açúcar<br />
        </h3>
      </Reason>
    </Reasons>
    <BgFlower>
      <Image src={FlowerYellow} alt="Flor amarela" />
    </BgFlower>
  </Section>
);

export default InclusiveCuisine;
