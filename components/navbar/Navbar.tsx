import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/client';

import { blue, defaultTheme } from '../../utils';
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

  > * {
    &:not(:last-child) {
      margin-right: 50px;
    }
  }
`;

const NavbarLink = styled.a<{ color?: string }>`
  color: ${(props) => props.color || defaultTheme.textColorInverted};
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
`;

const UserCircle = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 25px;
  border: none;
  font-weight: bold;
  background-color: ${blue[100]};
  color: ${defaultTheme.primaryColor};
  cursor: pointer;
`;

export const Navbar = () => {
  const router = useRouter();
  const isActive = (pathname: string) => router.pathname === pathname;

  const [session] = useSession();

  const userInitials = session?.user.name.split(' ').reduce((a, c) => a + c[0], '');

  return (
    <NavbarWrapper>
      <NavbarSection>
        <Link href="/">
          <NavbarLink data-active={isActive('/')}>Home</NavbarLink>
        </Link>
      </NavbarSection>
      <NavbarSection>
        {session ? (
          <>
            <Link href="/my-progress/front-page">
              <NavbarLink data-active={isActive('/')}>My progress</NavbarLink>
            </Link>
            <UserCircle onClick={() => signOut()}>{userInitials}</UserCircle>
          </>
        ) : (
          <SecondaryButton>
            <Link href="/api/auth/signin">
              <NavbarLink data-active={isActive('/signup')} color={defaultTheme.primaryColor}>
                Sign in
              </NavbarLink>
            </Link>
          </SecondaryButton>
        )}
      </NavbarSection>
    </NavbarWrapper>
  );
};
