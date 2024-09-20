export interface Roadmap {
  id: string;
  title: string;
  description: string;
  user: User;
  videosRoadmap: RoadmapItems[];
  createdAt: string;
  updatedAt: string;
}
export interface RoadmapItems {
  id: string;
  roadmapId: string;
  videos: Video;
}

interface Video {
  id: string;
  title: string;
  description: string;
  video: string;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  nickName: string;
  email: string;
}
