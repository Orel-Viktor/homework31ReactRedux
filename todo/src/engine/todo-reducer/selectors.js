export const todosSelectors = Object.freeze(
    {
        items: (state) => state.todos.items,
        loading: (state) => state.todos.loading,
        todosValue:(state)=> state.todos.todosValue
    }
)