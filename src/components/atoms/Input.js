import styled, { css } from 'styled-components';

const Input = styled.input`
  background: rgba(255,255,255,0.3);
  border-radius: 3px;
  color: #000000;
  border: none;
  padding: .5rem .8rem;
  outline: none;
  transition: all ease-in-out 0.2s;
  font-size: 1rem;
  margin-right: ${props => (props.mr)};
  font-weight: 500;

  &:focus, &:active {
    outline: none;
  }

  &::placeholder {
    color: #212121;
  }

`;

export default Input;
