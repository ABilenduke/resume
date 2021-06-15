import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  things: [] as string[],
  csrfToken: '',
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  csrfToken: (state) => state.csrfToken,
}

export const mutations: MutationTree<RootState> = {
  SET_CSRF_TOKEN: (state, newCsrfToken: string) => {
    state.csrfToken = newCsrfToken
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }) {
    try {
      const response = await this.$axios.$get('/api/sanctum/csrf-cookie')
      commit('SET_CSRF_TOKEN', response)
    } catch (error) {}
  },
}
