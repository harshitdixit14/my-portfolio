import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const TimelineCard = ({ title, description }) => (
  <Card
    sx={{
      width: { xs: '16rem', sm: '18rem' }, // 256px–288px
      minHeight: '11.25rem', // 180px
      m: '0.5rem',
      backgroundColor: 'rgba(200, 220, 255, 0.7)',
      color: '#fff',
      boxShadow: 3,
      borderRadius: '0.75rem',
      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: 6,
      },
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backdropFilter: 'blur(0.5rem)',
      WebkitBackdropFilter: 'blur(0.5rem)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    }}
  >
    <CardContent>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{
          fontFamily: 'monospace',
          fontWeight: 'bold',
          fontSize: '1.25rem', // 20px
          color: '#000',
          letterSpacing: '0.05rem',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontFamily: 'monospace',
          fontSize: '0.875rem', // 14px
          color: '#000',
          opacity: 0.85,
          lineHeight: 1.6,
        }}
      >
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default TimelineCard;
