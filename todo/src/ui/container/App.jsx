import { Provider } from 'react-redux'
import { AddTodo } from '../components/AddTodo'
import { TodosList } from '../components/TodosList'
import '../../styles/App.css'
import { store } from '../../engine/config/store'

function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <h1>TODO</h1>
                <AddTodo />
                <br />
                <h2>TODOS</h2>
                <br />
                <hr />
                <TodosList />
            </div>
        </Provider>
    )
}

export default App
