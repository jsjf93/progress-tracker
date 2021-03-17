import Link from 'next/link';
import styled from 'styled-components';
import { blue, defaultTheme } from 'utils';

const TabContainer = styled.div`
  width: 100%;
  height: 30px;
  background-color: ${blue[200]};
  display: flex;
  justify-content: center;
`;

const TabLink = styled.a`
  padding: 0;
  margin: 0 24px;
  min-width: 150px;
  color: ${defaultTheme.textColorInverted};
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  :active {
    text-decoration: none;
  }

  &:active {
    background-color: ${defaultTheme.textColorInverted};
  }
`;

export const Tabs = () => {
  return (
    <TabContainer>
      <Link href="/my-progress/front-page">
        <TabLink>Front page</TabLink>
      </Link>
      <Link href="/my-progress/matrix">
        <TabLink>Matrix</TabLink>
      </Link>
      <Link href="/my-progress/summary">
        <TabLink>Summary</TabLink>
      </Link>
      <Link href="/my-progress/feedback">
        <TabLink>360 Feedback</TabLink>
      </Link>
    </TabContainer>
  );
};
