import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DepartmentState {
  title: string | null;
  description: string;
  status: 'idle' | 'loading' | 'success' | 'error';
  error: string | null;
}

const initialState: DepartmentState = {
  title: null,
  description: '',
  status: 'idle',
  error: null,
};

const departmentSlice = createSlice({
  name: 'department',
  initialState,
  reducers: {
    updateDepartment(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
  },
  extraReducers: {},
});

export const { updateDepartment } = departmentSlice.actions;
export default departmentSlice.reducer;
