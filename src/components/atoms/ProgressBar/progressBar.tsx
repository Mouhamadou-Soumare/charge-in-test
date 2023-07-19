import React, { useEffect, useState } from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './progressBar.scss';

const CircularProgressWithLabel = (props: CircularProgressProps & { value: number }) => {
  const { value, ...otherProps } = props;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 70 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }} className="progress-bar">
      <CircularProgress
        variant="determinate"
        value={100}
        sx={{ color: 'grey' }}
        size={100}
        thickness={6}
        {...otherProps}
      />
      <CircularProgress
        variant="determinate"
        value={progress}
        sx={{
          color: '#308fe8',
          position: 'absolute',
          left: 0,
        }}
        size={100}
        thickness={6}
        {...otherProps}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary" className='number'>
          {`${Math.round(progress)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

const CircularWithValueLabel = () => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
};

export default CircularWithValueLabel;
