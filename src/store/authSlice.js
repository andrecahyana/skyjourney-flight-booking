import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { auth } from '../firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from 'firebase/auth'

export const registerUser = createAsyncThunk('auth/register', async ({ email, password, fullName }, { rejectWithValue }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    // Note: setting displayName requires updateProfile; for portfolio demo we keep basic info
    return { uid: user.uid, email: user.email, displayName: fullName }
  } catch (err) {
    return rejectWithValue(err.message)
  }
})

export const loginUser = createAsyncThunk('auth/login', async ({ email, password }, { rejectWithValue }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    return { uid: user.uid, email: user.email, displayName: user.displayName || null }
  } catch (err) {
    return rejectWithValue(err.message)
  }
})

export const logoutUser = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await firebaseSignOut(auth)
    return true
  } catch (err) {
    return rejectWithValue(err.message)
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, status: 'idle', error: null },
  reducers: {
    setUser(state, action){ state.user = action.payload }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (s) => { s.status = 'loading'; s.error = null })
      .addCase(registerUser.fulfilled, (s, a) => { s.status = 'succeeded'; s.user = a.payload })
      .addCase(registerUser.rejected, (s, a) => { s.status = 'failed'; s.error = a.payload })

      .addCase(loginUser.pending, (s) => { s.status = 'loading'; s.error = null })
      .addCase(loginUser.fulfilled, (s, a) => { s.status = 'succeeded'; s.user = a.payload })
      .addCase(loginUser.rejected, (s, a) => { s.status = 'failed'; s.error = a.payload })

      .addCase(logoutUser.fulfilled, (s) => { s.user = null; s.status = 'idle' })
  }
})

export const { setUser } = authSlice.actions
export default authSlice.reducer
