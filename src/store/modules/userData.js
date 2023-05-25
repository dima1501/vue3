import { useLocalStorage } from '@/mixins/storageMixin';

const state = () => ({
    userInfo: {
        fullName: null,
        age: null,
        children: []
    }
})

const actions = {
    fetchUserData({ commit }) {
        const { data } = useLocalStorage("userData");
        if (data.value) {
            commit('setUserData', data.value)
        }
    }
}

const mutations = {
    setUserData(state, data) {
        state.userInfo = data
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}