import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import i from "../assets/images/teacher.jpg"
import "./EditorCard.css"
const EditorCard = ({ key, image }) => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <div className="card-content">
                        <div className="svg-container">
                            <svg width="70" height="60" viewBox="0 0 78 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="39" cy="34" rx="39" ry="34" fill="#D9D9D9" />
                                <path d="M25.623 8.00513L66.5535 33.5016L25.6536 59.0472L25.623 8.00513Z" fill="black" stroke="black" />
                            </svg>
                        </div>
                        <div className="image-container" style={{ height: "200px" }}>
                            <CardMedia
                                component="img"
                                className="editor-image"
                                image={image.image}
                                alt="lecture"
                            />
                        </div>
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ display: "flex", justifyContent: "center" }}>
                            {image.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}
export default EditorCard