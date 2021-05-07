import { RiShoppingCart2Line } from 'react-icons/ri';

import brandImg from '../../../assets/brand.svg';

import { Top, Cart } from './styles';

export function Header() {
  return (
    <Top>
      <div>
        <img src={brandImg} alt="brand" /> <h1>OrgaFarm</h1>
      </div>
      <Cart>
        <RiShoppingCart2Line size={20} />
      </Cart>
    </Top>
  );
}
