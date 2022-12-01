import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, Loader, ChannelCard } from "./";

const Videos = ({ videos }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={"row"}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} marginTop />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
