import { create } from 'zustand'

export const TrackPreviewStore = create((set) => ({
    body: [
        {
            titleTrack: 'My Track 1',
            userProfile: {
                nick: 'nick_name_here1',
                photoProfile: 'link_photo1'
            }
            ,
            itemsTrack: [
                {
                    title: 'Item 1',
                    note: 'Texto ginormico aqui 1',
                    imageBackground: 'https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg'
                },
                {
                    title: 'Item 2',
                    note: 'Texto ginormico aqui 2',
                    imageBackground: 'https://img.freepik.com/fotos-gratis/respingo-colorido-abstrato-3d-background-generativo-ai-background_60438-2509.jpg'
                }
            ],
            newNoteItem: 'Texto ginormico aqui 1',
            newTitleNote: 'My Note 1'
        },
        {
            titleTrack: 'My Track 2',
            userProfile: {
                nick: 'nick_name_here2',
                photoProfile: 'link_photo2'
            },
            itemsTrack: [
                {
                    title: 'Item 2',
                    note: 'Texto ginormico aqui 2',
                    imageBackground: 'https://img.freepik.com/fotos-gratis/respingo-colorido-abstrato-3d-background-generativo-ai-background_60438-2509.jpg'
                }
            ],
            newNoteItem: 'Texto ginormico aqui 2',
            newTitleNote: 'My Note 2'

        }
    ],
    updateNote: (index, newNote) =>
        set((state) => {
            const updatedBody = [...state.body];
            updatedBody[index].newNoteItem = newNote.note;
            updatedBody[index].newTitleNote = newNote.title;

            return { body: updatedBody };
        }),
}))

