import { EntityState, createSlice } from '@reduxjs/toolkit'
import { TodoT } from '@src/typing/todo'
import todoEntityAdapter from './todoEntityAdapter'
import { RootState } from '../store'
import { listAllTodo, addTodo, doneTodo } from './todoActions'



export interface State extends EntityState<TodoT> { }
const initialState = todoEntityAdapter.getInitialState({} as State)


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(listAllTodo.fulfilled, (state, action) => {
            todoEntityAdapter.setAll(state, action.payload.data as unknown as TodoT[])
        }),
            builder.addCase(addTodo.fulfilled, (state, action) => {
                todoEntityAdapter.addOne(state, action.payload.data)
            }),
            builder.addCase(doneTodo.fulfilled, (state, action) => {
                todoEntityAdapter.removeOne(state, action.payload.data.id as number)
            })
    }
})


export default todoSlice
export const todoSelectors = todoEntityAdapter.getSelectors<RootState>(state => state.todo)