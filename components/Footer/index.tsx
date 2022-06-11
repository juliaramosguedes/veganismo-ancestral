import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Section, Label, Content } from './style';
import CreditCard from '@/assets/icons/credit-card.svg'
import Instagram from '@/assets/icons/instagram.svg'
import Youtube from '@/assets/icons/youtube.svg'

const Footer: React.FC = () => (
  <Section>
    <div>
      <Label>Formas de pagamento</Label>
      <Content>
        <Image src={CreditCard} alt="Cartão de crédito" />
        <Image src={CreditCard} alt="Cartão de crédito" />
        <Image src={CreditCard} alt="Cartão de crédito" />
        <Image src={CreditCard} alt="Cartão de crédito" />
      </Content>
    </div>
    <div>
      <Label>Endereço</Label>
      <Content>
        <p>Rua das Flores, 16 - Centro - Cananéia/SP</p>
      </Content>
    </div>
    <div>
      <Label>E-mail</Label>
      <Content>
        <Link href="mailto:ola@veganismoancestral.com.br" passHref>
          <a>
          ola@veganismoancestral.com.br
          </a>
        </Link>
      </Content>
    </div>
    <div>
      <Label>Redes sociais</Label>
      <Content>
        <Link href="https://www.instagram.com/veganismoancestral" title="Instagram do Veganismo Ancestral" passHref>
          <a target="_blank">
            <Image src={Instagram} alt="Instagram" />
          </a>
        </Link>
        <Link href="https://www.youtube.com/veganismoancestral" title="Canal do youtube do Veganismo Ancestral" passHref>
          <a target="_blank">
            <Image src={Youtube} alt="Youtube" />
          </a>
        </Link>
      </Content>
    </div>
  </Section>
);

export default Footer;
