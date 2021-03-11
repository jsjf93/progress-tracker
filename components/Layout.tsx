import React, { ReactNode } from 'react';
import { Navbar } from './navbar/Navbar';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    <Navbar />
    <div className="layout">{props.children}</div>
  </div>
);

export default Layout;
