import styled from 'styled-components';
import { defaultTheme, typeScale } from '../utils';

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helper};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
};

const Button = styled.button`
  background-color: ${defaultTheme.textColorInverted};
  border-radius: 10px;
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  min-width: 100px;
  cursor: pointer;
`;

interface ModifierProps {
  size: 'small' | 'large';
}

export const PrimaryButton = styled(Button)<ModifierProps>`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: white;
  transition: background-color 0.1s linear, color 0.1s linear, box-shadow 0.1s linear;

  &:hover {
    background-color: ${defaultTheme.primaryColorHover};
    color: ${defaultTheme.textColorOnPrimary};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.253);
  }

  &:focus {
    outline-offset: 2px;
    outline: 2px solid ${defaultTheme.primaryColor};
  }

  &:active {
    background-color: ${defaultTheme.primaryColorActive};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textColorOnPrimary};
    cursor: not-allowed;
    box-shadow: none;
  }

  ${(props) => BUTTON_MODIFIERS[props.size]}
`;

export const SecondaryButton = styled(Button)`
  color: ${defaultTheme.primaryColor};
  border: 2px ${defaultTheme.primaryColor} solid;

  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.253);
  }

  &:focus {
    outline-offset: 2px;
    outline: 2px solid ${defaultTheme.primaryColor};
  }

  &:active {
    border-color: ${defaultTheme.primaryColorActive};
    color: ${defaultTheme.primaryColorActive};
  }

  &:disabled {
    color: ${defaultTheme.disabled};
    border-color: ${defaultTheme.disabled};
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export const TertiaryButton = styled(Button)`
  color: ${defaultTheme.primaryColor};
  border: none;
`;
