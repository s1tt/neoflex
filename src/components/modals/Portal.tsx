import React from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  console.log('asd');
  return createPortal(children, document.getElementById('root')!);
};

export default Portal;
