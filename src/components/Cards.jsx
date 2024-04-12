import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function SetCards(info) {
    return (
      <Card sx={{ maxWidth: 400, margin: '10px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            style={{ width: 400, height: 300 }} // Establecer ancho y alto fijo aquí
            image={info.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {info.nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {info.descripcion}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Comprar
          </Button>
        </CardActions>
      </Card>
    );
  }