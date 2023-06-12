import { createStore } from 'vuex'
import router from '@/router'
import { auth } from '@/firebase'
import { 
  createUserWithEmailAndPassword,
  
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

export default createStore({
  state: {
    user: null
  },
  getters: {
  },
  mutations: {
    SET_USER(state,user) {
      state.user = user
    },
    CLEAR_USER(state) {
      state.user = null
    }
  },
  actions: {
    async login({commit}, details) {
      const { email, password } = details
      try {
         await signInWithEmailAndPassword(auth, email, password)
      }
      catch (error) {
        switch (error.code) {
          case 'auth/invalid-email':
            alert('Invalid email address format.')
            break
          case 'auth/user-disabled':
            alert('User disabled.')
            break
          case 'auth/user-not-found':
            alert('User not found.')
            break
          case 'auth/wrong-password':
            alert('Wrong password.')
            break
          default:
            alert('An error occurred. Please try again.')
            break
        }
        return
      }
      commit('SET_USER', auth.currentUser)
      router.push('/')
    },
    async loginWithGoogle({commit}) {
      const provider = new GoogleAuthProvider()
      try {
        await signInWithPopup(auth, provider)
      }
      catch (error) {
        alert('An error occurred. Please try again.')
        return
      }
      commit('SET_USER', auth.currentUser)
      router.push('/')
    },
   
    async register({commit}, details) {
      const { email, password } = details
      try {
        await createUserWithEmailAndPassword(auth, email, password)
      }
      catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert('Email already in use.')
            break
          case 'auth/invalid-email':
            alert('Invalid email address format.')
            break
          case 'auth/operation-not-allowed':
            alert('Operation not allowed.')
            break
          case 'auth/weak-password':
            alert('Password is not strong enough.')
            break
          default:
            alert('An error occurred. Please try again.')
            break
        }
        return
      }
      commit('SET_USER', auth.currentUser)
      router.push('/')
    },
    async logout({commit}) {
      try {
        await signOut(auth)
      }
      catch (error) {
        alert('An error occurred. Please try again.')
        return
      }
      commit('CLEAR_USER')
      router.push('/login')
    },
    fetchUser({commit}) {
      auth.onAuthStateChanged(async user => {
        if(user === null) {
          commit('CLEAR_USER')
        }
        else {
          commit('SET_USER', user)
          if(router.isReady() && router.currentRoute.value.path === '/login') {
            router.push('/')
          }
        }
    }
    )}

  },

  modules: {
  }
})

