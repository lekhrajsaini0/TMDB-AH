import {createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'favouriteMovies',
  initialState: {
    movies: [],
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies.push(action.payload.movie);
    },
    removeMovies: (state, action) => {
      state.movies.splice(state.movies.indexOf(action.payload.movie), 1);
    },
  },
});

export const addMovies = movieSlice.actions.addMovies;
export const removeMovies = movieSlice.actions.removeMovies;
export default movieSlice.reducer;
