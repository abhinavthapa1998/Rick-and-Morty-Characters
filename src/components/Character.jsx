import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Character({ character }) {
  return (
    <Card className="hover1" sx={{ maxWidth: 400 }}>
      <CardMedia component="img" image={character.image} alt="" />
      <CardContent className="text-container">
        <Typography variant="h4">{character.name}</Typography>
        <Typography variant="h6" className="status">
          {character.status} - {character.species}
        </Typography>
        <Typography variant="body2">Last seen on: </Typography>
        <Typography variant="body2" >{character.location.name}</Typography>
      </CardContent>
    </Card>
  );
}