
import axios from 'axios'

const config = {
  headers: {
    Authorization: `Bearer ${process.env.API_TOKEN}`,
    'Content-Type': 'application/json;charset=utf-8'
  }
}

export const state = () => ({
  data: null,
  error: null
})

export const actions = {
  fetchMovieDetail: async ({ commit }, id) => {
    commit('SET_ERROR', '')
    await axios.get(`${process.env.BASE_URL}movie/${id}`, config)
      .then((response) => {
        commit('SET_MOVIE_DETAIL', response.data.results)
      })
  }
}

export const mutations = {
  SET_ERROR: (state, error) => (state.error = error),
  SET_MOVIE_DETAIL: (state, movie) => (state.data = movie)
}

export const getters = {
  data: state => state.data,
  error: state => state.error
}
