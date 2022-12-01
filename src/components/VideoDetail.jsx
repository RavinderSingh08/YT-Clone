import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  // -ignore
  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle, description },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column" }}>
        <Box flex={1} display="flex" justifyContent="center">
          <Box
            sx={{
              width: "80%",
              marginTop: "0.5em",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant="subtitle1"
                  color="#fff"
                  display="flex"
                  alignItems="center"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "1em", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="1em" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
            <Box
              sx={{
                color: "#fff",
                backgroundColor: "#272727",
                borderRadius: "1rem",
              }}
              p={2}
              mt={2}
            >
              <Typography variant="inherit">
                <pre style={{ whiteSpace: "break-spaces" }}>
                  {showMore
                    ? description
                    : `${description
                        // -ignore
                        ?.slice(0, 180)}`}
                </pre>
                <Typography
                  variant="button"
                  onClick={() => setShowMore(!showMore)}
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  ml={2}
                >
                  {showMore ? "Show less" : "Show more"}
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 5, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
