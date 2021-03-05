import styled from 'styled-components';

const primary300 = '#2357db';
const primary400 = '#2C3B61';

const Button = styled.button`
  border-radius: 10px;
  padding: 12px 24px;
  font-size: 1rem;
  min-width: 100px;
  cursor: pointer;
  font-family: 'Comfortaa';
`;

export const PrimaryButton = styled(Button)`
  background-color: ${primary300};
  border: none;
  color: white;
`;

export const SecondaryButton = styled(Button)`
  color: ${primary300};
  border: 1px ${primary300} solid;
`;

export const TertiaryButton = styled(Button)`
  color: ${primary300};
  border: none;
  background-color: white;
`;
