import styled from 'styled-components';

const Button = styled.button`
  background: rgba(255,255,255,0.3);
  border-radius: 3px;
  color: #212121;
  border: none;
  padding: .5rem 1rem;
  outline: none;
  transition: all ease-in-out 0.2s;
  text-transform: uppercase;
  font-size: 1rem;

  &:focus, &:active {
    outline: none;
  }

  &:hover {
    background: #689f38;
    color: #fff;
    cursor: pointer;
  }
`;

export default Button;
