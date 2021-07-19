
import axios from 'axios'

const config = {
  headers: {
    Authorization: `Bearer ${process.env.API_TOKEN}`,
    'Content-Type': 'application/json;charset=utf-8'
  }
}

export const state = () => ({
  discover: null,
  popular: null,
  top_rated: null,
  upcoming: null,
  similar: null,
  error: null
})

export const actions = {
  fetchDiscoverMovies: async ({ commit }) => {
    commit('SET_ERROR', '')
    await axios.get(`${process.env.BASE_URL}discover/movie`, config)
      .then((response) => {
        commit('SET_DISCOVER_MOVIES', response.data.results)
      })
  },
  fetchPopularMovies: async ({ commit }) => {
    commit('SET_ERROR', '')
    await axios.get(`${process.env.BASE_URL}movie/popular`, config)
      .then((response) => {
        commit('SET_POPULAR_MOVIES', response.data.results)
      })
  },
  fetchTopRatedMovies: async ({ commit }) => {
    commit('SET_ERROR', '')
    await axios.get(`${process.env.BASE_URL}movie/top_rated`, config)
      .then((response) => {
        commit('SET_TOP_RATED_MOVIES', response.data.results)
      })
  },
  fetchUpcomingMovies: async ({ commit }) => {
    commit('SET_ERROR', '')
    await axios.get(`${process.env.BASE_URL}movie/upcoming`, config)
      .then((response) => {
        commit('SET_UPCOMING_MOVIES', response.data.results)
      })
  },
  fetchSimilarMovies: async ({ commit }, id) => {
    commit('SET_ERROR', '')
    await axios.get(`${process.env.BASE_URL}movie/${id}/similar`, config)
      .then((response) => {
        commit('SET_SIMILAR_MOVIES', response.data.results)
      })
  }
}

export const mutations = {
  SET_ERROR: (state, error) => (state.error = error),
  SET_DISCOVER_MOVIES: (state, movies) => (state.discover = movies),
  SET_POPULAR_MOVIES: (state, movies) => (state.popular = movies),
  SET_TOP_RATED_MOVIES: (state, movies) => (state.top_rated = movies),
  SET_UPCOMING_MOVIES: (state, movies) => (state.popular = movies),
  SET_SIMILAR_MOVIES: (state, movies) => (state.similar = movies)
}

export const getters = {
  discover: state => state.discover,
  popular: state => state.popular,
  top_rated: state => state.top_rated,
  upcoming: state => state.upcoming,
  similar: state => state.similar
}
