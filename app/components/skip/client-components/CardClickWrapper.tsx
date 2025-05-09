'use client';
import React, { useRef } from 'react';
import { useSkipStore } from '@/app/store/skipStore';
import { SkipCardProps } from '@/app/types/Skip';

type ClientSkipCardWrapperProps = {
  skip: SkipCardProps['skip'];
  children: React.ReactNode;
};

const ClientSkipCardWrapper: React.FC<ClientSkipCardWrapperProps> = ({ skip, children }) => {
  const selectSkip = useSkipStore((state) => state.selectSkip);
  const isDisabled = !skip.allowed_on_road && !skip.allows_heavy_waste;
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    // Don't handle click if it's disabled
    if (isDisabled) return;

    // Don't handle click if the click was on the button itself
    const target = e.target as Node;
    const buttonElement = wrapperRef.current?.querySelector('button');

    if (buttonElement && (buttonElement === target || buttonElement.contains(target))) {
      return;
    }

    // Otherwise, select the skip
    selectSkip(skip);
  };

  return (
    <div
      ref={wrapperRef}
      onClick={handleClick}
      className={`w-full ${isDisabled ? '' : 'cursor-pointer'}`}
    >
      {children}
    </div>
  );
};

export default ClientSkipCardWrapper;
