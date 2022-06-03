import * as React from 'react';
import ReactDOM from 'react-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TweetEmbed from 'react-tweet-embed'




import { Button, CardActionArea, CardActions } from '@mui/material';

export default function RoverPage() {
    return (
        <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image=""
                    alt="Rover"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Curiosity
                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Next
                </Button>
                <Button size="small" color="primary">
                    Back
                </Button>
            </CardActions>
        </Card>
    );
}


