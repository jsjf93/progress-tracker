import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { blue, defaultTheme } from 'utils';

const TabContainer = styled.div`
  width: 100%;
  height: 30px;
  background-color: ${blue[200]};
  display: flex;
  justify-content: center;
`;

type TabLinkProps = {
  active: boolean;
}

const TabLink = styled.a<TabLinkProps>`
  padding: 0;
  margin: 0 24px;
  min-width: 150px;
  color: ${props => props.active ? defaultTheme.primaryColor : defaultTheme.textColorInverted};
  background-color: ${props => props.active ? defaultTheme.textColorInverted : 'transparent'};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  :active {
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Tabs = () => {
  const router = useRouter();

  return (
    <TabContainer>
      <Link href="/my-progress/front-page">
        <TabLink active={router.pathname.includes('front-page')}>Front page</TabLink>
      </Link>
      <Link href="/my-progress/matrix">
        <TabLink active={router.pathname.includes('matrix')}>Matrix</TabLink>
      </Link>
      <Link href="/my-progress/summary">
        <TabLink active={router.pathname.includes('summary')}>Summary</TabLink>
      </Link>
      <Link href="/my-progress/feedback">
        <TabLink active={router.pathname.includes('feedback')}>360 Feedback</TabLink>
      </Link>
    </TabContainer>
  );
};
