import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import style from './error.module.scss';
import { ErrorProps } from './types';

const Error: FC<ErrorProps> = ({ actionLabel, onClick, children }) => (
  <div className={style.error}>
    <Typography color="white">
      {children}
    </Typography>
    <Button onClick={onClick} variant="contained">
      {actionLabel}
    </Button>
  </div>
);

export default Error;
