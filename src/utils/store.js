import { create } from "zustand";

export const userStore = create((set) => ({
  user: null,
  setUser: (userState) => set(() => ({ user: userState })),
  logoutUser: () => set(() => ({ user: null })),
}));

export const useMovieStore = create((set) => ({
  nowPlayingMovies: [],
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  trailer: null,
  setNowPlayingMovies: (movieData) => set({ nowPlayingMovies: movieData }),
  setPopularMovies: (movieData) => set({ popularMovies: movieData }),
  setTopRatedMovies: (movieData) => set({ topRatedMovies: movieData }),
  setUpcomingMovies: (movieData) => set({ upcomingMovies: movieData }),
  setTrailer: (trailerData) => set({ trailer: trailerData }),
}));

export const useGPTStore = create((set) => ({
  showGPTSearch: false,
  setToggleGPT: () => set((state) => ({ showGPTSearch: !state.showGPTSearch })),
}));

export const useLanguage = create((set) => ({
  lanuage: "en",
  setLanguage: (lang) => set({ lanuage: lang }),
}));
