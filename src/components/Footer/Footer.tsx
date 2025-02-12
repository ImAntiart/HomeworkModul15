import styled from 'styled-components';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const FooterContainer = styled.div`
  width: 100%;
  height: 150px;
  margin: 50px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dark3);
`;
const FooterWrapperInfo = styled.div`
  border-radius: 100px;
  padding: 0px 4px;
  width: auto;
  height: auto;
  background: var(--red1);
`;
const FooterInfo = styled.h1`
  display: flex;
  margin: 0;
  font-family: var(--font-roboto-r);
  font-weight: 700;
  font-size: 3.2em;
  color: #fff;
`;
const FooterSpanCount = styled.span`
  font-family: var(--font-roboto-r);
  font-weight: 700;
  font-size: 3.2em;
  color: var(--m3-white);
  padding: 10px;
`;
const Footer = () => {
  const { posts } = useTypedSelector((state) => state.posts);

  return (
    <FooterContainer>
      <FooterInfo>Загружено постов </FooterInfo>
      <FooterWrapperInfo>
        <FooterSpanCount>{posts ? posts.length : 0}</FooterSpanCount>
      </FooterWrapperInfo>
    </FooterContainer>
  );
};

export default Footer;
