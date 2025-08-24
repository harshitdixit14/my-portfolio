import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, description, tech, github, live }) => (
  <Card
    sx={{
      width: '1000px',
      minHeight: 220,
      margin: 2,
      backgroundColor: 'rgba(200, 220, 255, 0.7)',
      boxShadow: 3,
      borderRadius: 3,
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: 6,
      },
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
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
          fontSize: '20px',
          color: '#000000ff',
          letterSpacing: '1px',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontFamily: 'monospace',
          fontSize: '14px',
          color: '#000000ff',
          opacity: 0.8,
          lineHeight: 1.6,
          marginBottom: 1,
        }}
      >
        {description}
      </Typography>

      {/* Tech stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '10px' }}>
        {tech.map((t, i) => (
          <span
            key={i}
            style={{
              padding: '2px 8px',
              fontSize: '12px',
              borderRadius: '12px',
              backgroundColor: 'rgba(0,0,0,0.1)',
              color: '#000',
              fontFamily: 'monospace',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <a href={github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none', color: '#000', fontSize: '14px' }}>
          <FaGithub /> Code
        </a>
        <a href={live} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none', color: '#000', fontSize: '14px' }}>
          <FaExternalLinkAlt /> Live
        </a>
      </div>
    </CardContent>
  </Card>
);

export default ProjectCard;
