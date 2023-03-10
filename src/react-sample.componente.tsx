import React, { FC, ReactNode } from 'react';

export interface ReactSampleComponenteProps {
  children?: ReactNode;
};

export const ReactSampleComponente: FC<ReactSampleComponenteProps> = ({
  children
}) => {
  return (
    <>
      <p>ReactSampleComponente: {children ? '' : 'No Content'}</p>
      {children}
    </>
  );
};
