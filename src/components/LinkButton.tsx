import Link from 'next/link';
import React from 'react';

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
};

function LinkButton({ href, children }: LinkButtonProps) {
  return (
    <Link
      href={href}
      style={{
        padding: '4px 8px',
        backgroundColor: 'orange',
        marginRight: '8px',
      }}>
      {children}
    </Link>
  );
}

export default LinkButton;
