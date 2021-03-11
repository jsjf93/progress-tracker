import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/client';
import dayjs from 'dayjs';

import { defaultTheme } from '../../utils';
import { SecondaryButton } from '../buttons/Buttons';

const NavbarWrapper = styled.nav`
  width: 100%;
  height: 60px;
  background-color: ${defaultTheme.primaryColor};
  color: ${defaultTheme.textColorInverted};
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavbarSection = styled.div`
  height: fit-content;
`;

const HomeLink = styled.a`
  color: ${defaultTheme.textColorInverted};
  text-decoration: none;
  cursor: pointer;
`;

export const Navbar = () => {
  const router = useRouter();
  const isActive = (pathname: string) => router.pathname === pathname;

  const [session] = useSession();

  return (
    <NavbarWrapper>
      <NavbarSection>
        <Link href="/">
          <HomeLink data-active={isActive('/')}>Home</HomeLink>
        </Link>
      </NavbarSection>
      <NavbarSection>
        {session ? (
          <SecondaryButton onClick={() => signOut()}>Sign out</SecondaryButton>
        ) : (
          <SecondaryButton>
            <Link href="/api/auth/signin">
              <a data-active={isActive('/signup')}>Sign in</a>
            </Link>
          </SecondaryButton>
        )}
      </NavbarSection>
    </NavbarWrapper>
  );
};
