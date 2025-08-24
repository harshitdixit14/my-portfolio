import React from 'react';
import TimelineCard from './TimelineCard';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './timeline.css';

const educationData = [
  {
    title: 'Schooling',
    description: 'Completed schooling from KV IIT Kanpur acquired the basic skills of python programming and computer fundamentals (2014–2020)',
  },
  {
    title: 'B.Tech in Computer Science',
    description: 'bachelor in Computer Science from PSIT Kanpur acquired skills that improved my problem solving skills (2021–2025)',
  },
  // {
  //   title: 'Developing at CDIS IIT Kanpur',
  //   description: 'Developing software solutions at CDIS IIT Kanpur (July 2025–Present)',
  // },
];

const Timeline = () => {
  return (
    <Card
      sx={{
        width: '95%',
        margin: 'auto',
        mt: '2rem',
        p: '1.5rem',
        borderRadius: '1rem',
        overflow: 'hidden',
        color: '#fff',
        backgroundColor: 'rgba(222, 196, 196, 0.15)',
        backdropFilter: 'blur(0.75rem)',
        WebkitBackdropFilter: 'blur(0.75rem)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 0.25rem 1.875rem rgba(0, 0, 0, 0.1)',
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'monospace',
            mb: '1rem',
            fontSize: { xs: '1.5rem', sm: '1.875rem' }, // responsive
            fontWeight: 'bold',
          }}
        >
          📅 Timeline
        </Typography>

        <Box className="scroll-container">
          <Box className="scroll-content">
            {educationData.map((item, index) => (
              <div className="scroll-card" key={index}>
                <TimelineCard title={item.title} description={item.description} />
              </div>
            ))}

            <Typography
              variant="h4"
              sx={{
                fontFamily: 'monospace',
                fontSize: { xs: '2rem', sm: '3.125rem' }, // 32px–50px
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                textAlign: 'center',
                mt: '1rem',
              }}
            >
              To be continued ...
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Timeline;
