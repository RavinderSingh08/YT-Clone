import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Card
    sx={{
      width: { xs: "100%", sm: "300px", md: "320px", lg: "280px" },
      boxShadow: "none",
      background: "#000",
      borderRadius: "8px",
      // boxShadow: "0px 0px 1px #fff",
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        // alt={snippet?.title}
        sx={{
          width: { xs: "100%", sm: "300px", md: "320px", lg: "280px" },
          height: 180,
          boxShadow: "0px 0px 5px #aaa",
        }}
      />
    </Link>
    <CardContent
      sx={{
        backgroundColor: "#60606035",
        height: "106px",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          color="#fff"
          sx={{ wordWrap: "anywhere" }}
        >
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <Typography
          variant="subtitle2"
          sx={{
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            color: "#9a9a9a",
          }}
        >
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize: "1em", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
