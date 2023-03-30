import React from 'react';

export interface ErrorProps {
  actionLabel: string,
  onClick: () => void,
  children: React.ReactNode,
}
