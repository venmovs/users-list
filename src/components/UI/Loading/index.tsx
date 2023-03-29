import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import style from './Loading.module.scss';

function Loading() {
  return (
    <div className={style.loading}>
      <Typography variant="h6">
        Loading will take a few seconds..
      </Typography>
      <CircularProgress />
    </div>
  );
}

export default Loading;
