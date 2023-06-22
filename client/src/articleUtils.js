export const extractVideoIds = (videos) => {
  const videoIds = videos.map((video) => video.id.videoId);
  return videoIds;
};
