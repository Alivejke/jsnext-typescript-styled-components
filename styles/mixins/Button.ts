import styled from 'styled-components';

const Button = styled.a`
  border: 0;
  display: inline-block;
  font-size: 15px;
  text-decoration: none;
  padding: 16px 24px 16px;
  border-radius: 4px;
  box-sizing: border-box;
  text-align: center;
  min-width: 156px;
  outline: none;
  background-color: ${({theme}) => theme.colors.brand};
  color: ${({theme}) => theme.colors.contrast};

  :hover {
    background-color: ${({theme}) => theme.colors.brandFade};
    color: ${({theme}) => theme.colors.contrast};
    transition: background 0.3s ease-out,transform 0.3s;
  }
`;

export default Button;