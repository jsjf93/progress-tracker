import styled, { keyframes } from 'styled-components';
import { blue, defaultTheme } from 'utils';

interface Props {
  size: number;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const CircleLoader = styled.div<Props>`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  border-top: 4px solid ${defaultTheme.primaryColor};
  border-right: 2px solid ${blue[100]};
  border-bottom: 2px solid ${blue[100]};
  border-left: 2px solid ${blue[100]};
  border-radius: 50%;
  animation: ${rotate} 0.8s linear infinite;
`;
