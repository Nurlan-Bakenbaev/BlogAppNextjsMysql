import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
export default function PostCard({ id, desc, title, img }) {
  return (
    <div className="max-w-[320px] hover:bg-slate-100 shadow-lg hover:shadow-2xl ">
      <CardMedia
        sx={{ height: 180, minWidth: 280 }}
        image={`${img || "/posts.jpg"}`}
        title={"Post-Poster"}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <FavoriteIcon />
        </Button>
        <Button size="small">
          <Link href={`/post/${id}`}>Learn More</Link>
        </Button>
      </CardActions>
    </div>
  );
}
