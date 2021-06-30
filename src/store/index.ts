import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';
import { RootState, state } from './state';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: state,
}

export default new Vuex.Store(store)
// export default new Vuex.Store({
//   strict: process.env.NODE_ENV !== 'production',
//   state: {
//     news: [],
//     ask: [],
//     jobs: [],
//     user: {},
//     item: {},
//     list: [],
//   },
//   getters,
//   mutations,
//   actions,
// })
