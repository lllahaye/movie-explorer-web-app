import React from 'react';
import { Card, CardMedia } from '@mui/material';

const MoviePosterCard = ({ posterPath }) => {
    return (
        <Card sx={{ width: "100%", height: "100%" }}>
            <CardMedia
                component="img"
                sx={{ width: "100%", height: "100%" }}
                image={`https://image.tmdb.org/t/p/w780${posterPath}`}
                alt="Movie poster"
            />
        </Card>
    );
};

export default MoviePosterCard;