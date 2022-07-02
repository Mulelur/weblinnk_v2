import * as React from 'react';
import { FormLabel } from 'app/components/FormLabel';
import styled from 'styled-components/macro';
import { themeActions } from 'styles/theme/slice';
import { useDispatch, useSelector } from 'react-redux';
import { saveTheme } from 'styles/theme/utils';
import { ThemeKeyType } from 'styles/theme/slice/types';
import { selectThemeKey } from 'styles/theme/slice/selectors';
import { Switch } from 'app/components/Switch';

export function ThemeSwitch() {
  const theme = useSelector(selectThemeKey);
  const [v, setV] = React.useState<ThemeKeyType>('system');
  const dispatch = useDispatch();

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    saveTheme(v);
    dispatch(themeActions.changeTheme(v));
  };

  return (
    <Wrapper>
      <Themes>
        <Switch
          id="checkbox"
          label=""
          className="checkbox"
          name="theme"
          onChange={handleThemeChange}
          onClick={() => {
            setV(theme === 'dark' ? 'dark' : 'light');
          }}
          value="dark"
          isSelected={theme === 'dark' ? false : true}
        />
      </Themes>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${FormLabel} {
    margin-bottom: 0.625rem;
  }
`;
const Themes = styled.div`
  display: flex;

  .radio {
    margin-right: 1.5rem;
  }
`;
