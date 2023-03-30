import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import style from './loading.module.scss';

function Loading() {
  return (
    <div className={style.loading}>
      <Typography color="white">
        Loading will take a few seconds..
      </Typography>
      <CircularProgress />
    </div>
  );
}

export default Loading;
