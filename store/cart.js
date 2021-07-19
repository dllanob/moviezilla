
export const state = () => ({
  items: [],
  total: 0
})

export const actions = {
  addItemToCart: ({ commit }, item) => {
    const payload = {
      ...item
    }
    commit('ADD_ITEM', payload)
  }
}

export const mutations = {
  ADD_ITEM: (state, item) => (state.items.push(item))
}

export const getters = {
  items: state => state.items,
  total: state => state.error
}
