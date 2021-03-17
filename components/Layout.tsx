import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import { Tabs } from './my-progress/tabs/Tabs';
import { Navbar } from './navbar/Navbar';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      {router.pathname.includes('my-progress') && <Tabs />}
      <div className="layout">{props.children}</div>
    </>
  );
};

export default Layout;
