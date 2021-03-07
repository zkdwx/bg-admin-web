export default {
  state: {
    userLang: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'zh_CN'
  },
  getters: {
    userLang(state, getters, rootState) {
      return rootState.app.userLang;
    }
  },
  mutations: {
    setUserLang(state, userLang) {
      state.userLang = userLang;
      localStorage.setItem('lang', userLang);
    }
  },
  action: {
    setUserLanguage({commit}, {userLang}) {
      commit('setUserLang', userLang);
    }
  }
}
