import { useRouter } from 'next/router';
import React from 'react';
import { animated, config, useSpring } from 'react-spring';
import { Tabs } from './my-progress/tabs/Tabs';
import { Navbar } from './navbar/Navbar';

const Layout: React.FC = (props) => {
  const router = useRouter();

  const animation = useSpring({
    from: { transform: 'translateY(-60px)' },
    to: { transform: 'translateY(0)' },
    config: config.slow,
  });

  return (
    <>
      <animated.div style={animation}>
        <Navbar />
        {router.pathname.includes('my-progress') && <Tabs />}
      </animated.div>

      <div className="layout">{props.children}</div>
    </>
  );
};

export default Layout;
