import styled from 'styled-components';
import NavigationBtns from '../NavigationBtns/NavigationBtns';
import { useResize } from '../../hooks/useResize';

interface Props {
  onNextPageClick: () => void;
  onPrevPageClick: () => void;
  disable: {
    left: boolean;
    right: boolean;
  };
}



const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background: var(--dark3);
  box-sizing: border-box;
  padding: 10px;
  margin: 0 auto;
`;
const HeaderTitle = styled.h1`
  padding-left: 5%;
  margin: 0;
  font-family: var(--font-roboto-r);
  font-size: 3.2em;
  line-height: 1.1;
  color: #fff;
`;

function Header(props: Props) {
  const { onNextPageClick, onPrevPageClick, disable } = props;
  const { isMobile } = useResize();
  return (
    <HeaderContainer
      style={
        isMobile
          ? {
              flexDirection: 'column',
              justifyContent: 'center',
              height: 'auto',
            }
          : {}
      }
    >
      <HeaderTitle style={isMobile ? { fontSize: '2.8em' } : {}}>
        Лента новостей
      </HeaderTitle>
      <NavigationBtns
        onNextPageClick={onNextPageClick}
        onPrevPageClick={onPrevPageClick}
        disable={disable}
      />
    </HeaderContainer>
  );
}

export default Header;
