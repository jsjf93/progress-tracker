import styled from 'styled-components';
import { defaultTheme, typeScale } from '../../utils';

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helper};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
  warning: () => `
    background-color: ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColorInverted};

    &:hover, &:focus {
      background-color: ${defaultTheme.status.warningColorHover};
      outline: 2px solid ${defaultTheme.status.warningColorHover};
    }

    &:active {
      background-color: ${defaultTheme.status.warningColorActive};
    }
  `,
  error: () => `
    background-color: ${defaultTheme.status.errorColor};
    color: ${defaultTheme.textColorInverted};

    &:hover, &:focus {
      background-color: ${defaultTheme.status.errorColorHover};
      outline: 3px solid ${defaultTheme.status.errorColorHover};
    }

    &:active {
      background-color: ${defaultTheme.status.errorColorActive};
    }
  `,
  success: () => `
    background-color: ${defaultTheme.status.successColor};
    color: ${defaultTheme.textColorInverted};

    &:hover, &:focus {
      background-color: ${defaultTheme.status.successColorHover};
      outline: 3px solid ${defaultTheme.status.successColorHover};
    }

    &:active {
      background-color: ${defaultTheme.status.successColorActive};
    }
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

interface Props {
  size?: 'small' | 'large';
  status?: 'warning' | 'error' | 'success';
}

export const PrimaryButton = styled(Button)<Props>`
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

  ${(props) => (props.size ? BUTTON_MODIFIERS[props.size] : '')}
  ${(props) => (props.status ? BUTTON_MODIFIERS[props.status] : '')}
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
