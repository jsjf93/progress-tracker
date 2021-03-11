import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/client';
import dayjs from 'dayjs';
import { Navbar } from './navbar/Navbar';

const Header: React.FC = () => {
  const router = useRouter();
  const isActive = (pathname: string) => router.pathname === pathname;

  const [session] = useSession();

  return (
    <Navbar />
    // <nav>
    //   <div className="left">
    //     <Link href="/">
    //       <a className="bold" data-active={isActive('/')}>
    //         Home
    //       </a>
    //     </Link>
    //     <div>{dayjs().format('DD/MM/YYYY')}</div>
    //   </div>
    //   {session ? (
    //     <div className="right">
    //       <p>
    //         {session.user.name} ({session.user.email})
    //       </p>
    //       <Link href="/create">
    //         <button>
    //           <a>New post</a>
    //         </button>
    //       </Link>
    //       <button onClick={() => signOut()}>
    //         <a>Log out</a>
    //       </button>
    //     </div>
    //   ) : (
    //     <div className="right">
    //       <Link href="/api/auth/signin">
    //         <a data-active={isActive('/signup')}>Log in</a>
    //       </Link>
    //     </div>
    //   )}
    // </nav>
  );
};

export default Header;
