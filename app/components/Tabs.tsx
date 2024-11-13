// components/Tabs.tsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TabProps } from '../types/customtypes';

const Tab: React.FC<TabProps> = ({ href, label, isActive }) => (
  <Link
    href={href}
    className={`px-4 py-2 font-medium text-sm ${
      isActive ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
    }`}
  >
    {label}
  </Link>
);

const Tabs: React.FC = () => {
  const pathname = usePathname(); // Get current path
  
  return (
    <div className="flex border-b border-gray-300">
      <Tab href="/credit-score" label="Credit Score" isActive={pathname === '/credit-score'} />
      <Tab href="/tab2" label="Tab 2" isActive={pathname === '/tab2'} />
      <Tab href="/tab3" label="Tab 3" isActive={pathname === '/tab3'} />
    </div>
  );
};

export default Tabs;
