import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Menu, Nav } from './style';
import Avatar from '@/assets/images/avatar.png';
import Bag from '@/assets/icons/bag.svg';

const Navbar: React.FC = () => (
  <Nav>
    <Link href="/" passHref>
      <a>
        <Image src={Avatar} alt="Chef Carla Ioost" width="48px" height="48px" />
      </a>
    </Link>
    <Menu>
      <Link  href="/#veganismo-ancestral" passHref>
      <a>Veganismo Ancestral</a>
      </Link>
      <Link href="/#chef" passHref><a>Carla Ioost</a></Link>
      <Link href="/eventos" passHref><a>Eventos</a></Link>
      <Link href="/cardapio" passHref><a>Cardápio</a></Link>
      <Link href="/carrinho" passHref><a><Image src={Bag} alt="Carrinho de compras" /></a></Link>
    </Menu>
  </Nav>
);

export default Navbar
