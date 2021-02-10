import { shade } from 'polished';
import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import Logo from '../../assets/images/logo.png';
import { Container } from './styles';


interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <img src={Logo} alt=""/>
      <p>Logo</p>
      <p>Logo</p>
      <p>Logo</p>

      <Switch
        onChange={toggleTheme}
        checked={title === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.text)}
        onColor={shade(0.15,colors.text)}
        offHandleColor={colors.text}
        onHandleColor={colors.text}
      />
    </Container>
  );
};

export default Header;
