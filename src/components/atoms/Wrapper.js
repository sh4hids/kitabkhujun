import styled, {css} from 'styled-components';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  ${props => props.fullbg && props.landing ? css`
    background: url("https://cdn.rawgit.com/sh4hids/kitabkhujun/90678b23f2addae64c6eb04e98d7dc99e91fae74/images/bg.jpg");
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 100vh;
    color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  ` : 'background: #FFF;' }
`;

export default Wrapper;
