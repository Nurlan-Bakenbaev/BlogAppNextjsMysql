import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
export default function PostCard() {
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardMedia
        sx={{ height: 180 }}
        image="https://plus.unsplash.com/premium_photo-1668404817591-f16aec3e1d08?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="poster"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Post
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          maiores!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <FavoriteIcon />
        </Button>
        <Button size="small">
          <Link href={"/post"}>Learn More</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
