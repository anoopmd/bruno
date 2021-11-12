import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconCurrencyBitcoin } from '@tabler/icons';
import classnames from 'classnames';

const Navbar = () => {
  const router = useRouter();
  const route = router.route;

  const getClassNames = (path) => {
    return classnames({
      'font-semibold': route === path
    });
  };

  return (
    <div className="w-full site-navbar">
      <header className="flex items-center justify-between py-4">
        <div>
          <Link href="/">
            <div className="flex items-center cursor-pointer font-bold text-lg">
              <IconCurrencyBitcoin />
              <span className="ml-2">bruno</span>
            </div>
          </Link>
        </div>
        <nav className='flex flex-grow justify-end text-sm'>
          <Link href="/accounts">
            <a className={getClassNames('/')}>Home</a>
          </Link>
          <Link href="/blocks">
            <a className={`ml-6 ${getClassNames('/about')}`}>About</a>
          </Link>
          <Link href="/transactions">
            <a className={`ml-6 mr-1 ${getClassNames('/open')}`}>Open</a>
          </Link>
        </nav>
      </header>
    </div>
  )
};

export default Navbar;
