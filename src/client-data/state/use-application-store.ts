import create from 'zustand';

type ApplicationStore = {
  isDialogOpen: boolean;
  setIsDialogOpen: () => void;
};

export const useApplicationStore = create<ApplicationStore>((set, get) => ({
  isDialogOpen: false,
  setIsDialogOpen: () => set(() => ({ isDialogOpen: !get().isDialogOpen })),
}));
