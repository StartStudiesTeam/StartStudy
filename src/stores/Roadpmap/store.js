import { create } from 'zustand'
import api from '../../Services/api';

export const RoadmapStore = create((set, get) => ({
    roadmapId: '',
    getRoadmap: async (body) => {
        try {
            const response = await api.get("/roadmap", {
                roadmapId: body.id
            });

            return response;

        } catch (error) {
            return error;
        }
    },
    getRoadmaps: async (body) => {
        try {
            const response = await api.get("/roadmaps", {
                roadmapId: body.id
            });

            return response;

        } catch (error) {
            return error;
        }
    },
    createRoadmap: async (body) => {
        try {
            const response = await api.post("/roadmap", {
                email: body?.id,
                title: body?.title,
                description: body?.description,
            });

            return response;

        } catch (error) {
            return error;
        }
    },
    updateRoadmap: async (body) => {
        try {
            const response = await api.put("/roadmap", {
                id: body.id,
                title: body.title,
                description: body.description,
            });

            return response;

        } catch (error) {
            return error;
        }
    },
    deleteRoadmap: async (body) => {
        try {
            const response = await api.delete("/roadmap", {
                id: body.id,
            });

            return response;

        } catch (error) {
            return error;
        }
    },
    setCurrentRoadmapId: async (id) => set({ roadmapId: id }),
    getCurrentRoadmapId: async () => get().roadmapId,
}))

