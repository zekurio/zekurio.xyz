import React from 'react';
import styled from 'styled-components';
import { AppTheme } from '../../theme/theme';
import { useStore } from '../../services/store';
import { useStoredTheme } from '../../hooks/useStoredTheme';

const ThemeSwitcherContainer = styled.div`
  font-size: 22px;
  cursor: pointer;
  margin-left: auto;
  margin-right: 20px;
  margin-top: 10px;
`;

const ThemeSwitcher: React.FC = () => {

  const { theme, setTheme } = useStore();

  const toggleTheme = () => {
    const newTheme = theme === AppTheme.DARK ? AppTheme.LIGHT : AppTheme.DARK;
    setTheme(newTheme);
  };

  useStoredTheme();

  return (
    <ThemeSwitcherContainer onClick={toggleTheme}>
      {theme === AppTheme.DARK ? '☀️' : '🌑'}
    </ThemeSwitcherContainer>
  );
}

export default ThemeSwitcher;