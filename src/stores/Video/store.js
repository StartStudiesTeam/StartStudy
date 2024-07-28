import { create } from 'zustand'
import api from '../../Services/api';

export const VideoStore = create((set, get) => ({
    videoId: '',
    getVideo: async (body) => {
        try {
            const response = await api.post("/videos", {
                roadmapId: body.id
            });

            return response;

        } catch (error) {
            return error;
        }
    },
    createVideo: async (body) => {
        try {
            const response = await api.post("/videos", {
                roadmapId: body?.roadmapId,
                video: body?.url,
                title: body?.title,
                description: body?.description,
            });
            return response;

        } catch (error) {
            return error;
        }
    },
    updateVideo: async (body) => {
        try {
            const response = await api.put("/videos", {
                id: body.id,
                title: body.title,
                description: body.description,
            });

            return response;

        } catch (error) {
            return error;
        }
    },
    deleteVideo: async (body) => {
        try {
            const response = await api.delete("/videos", {
                id: body.id,
            });

            return response;

        } catch (error) {
            return error;
        }
    },
    setCurrentId: (id) => set({ roadmapId: id }),
    getCurrentId: () => get().roadmapId,
}))

