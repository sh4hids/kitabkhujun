import styled, {css} from 'styled-components';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  ${props => props.fullbg ? css`
    background: url("https://cdn.rawgit.com/sh4hids/rabbana-dua/gh-pages/img/bg.jpg");
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 100vh;
    color: #FFF;
  ` : 'background: #FFF;' }
`;

export default Wrapper;
