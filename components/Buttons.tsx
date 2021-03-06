import styled from 'styled-components';
import { defaultTheme, typeScale } from '../utils';

const Button = styled.button`
  border-radius: 10px;
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  min-width: 100px;
  cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: white;
`;

export const SecondaryButton = styled(Button)`
  color: ${defaultTheme.primaryColor};
  border: 1px ${defaultTheme.primaryColor} solid;
`;

export const TertiaryButton = styled(Button)`
  color: ${defaultTheme.primaryColor};
  border: none;
  background-color: white;
`;
