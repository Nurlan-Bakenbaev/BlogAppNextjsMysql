import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import moment from "moment";

export default function PostCard({ id, desc, title, img, date }) {
  return (
    <div className="max-w-[320px] hover:bg-slate-100 shadow-lg hover:shadow-2xl ">
      <CardMedia
        sx={{ minHeight: 180, minWidth: 280 }}
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
        <Typography variant="body2" color="text.secondary">
          Posted {moment(date).fromNow()}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">
          <FavoriteIcon />
        </Button>
        <button className="p-2 hover:bg-blue-200 rounded-md">
          <Link href={`/post/${id}`}>Learn More</Link>
        </button>
      </CardActions>
    </div>
  );
}
