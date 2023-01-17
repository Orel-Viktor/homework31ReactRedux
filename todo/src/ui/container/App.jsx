import { Provider } from 'react-redux'
import { AddTodo } from '../components/AddTodo'
import { TodosList } from '../components/TodosList'
import '../../styles/App.css'
import { store } from '../../engine/config/store'
import { TodoCounter } from '../components/TodosCounter'
import{RemoveItemsButton} from '../components/RemoveItemsButton'

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
                <div><TodoCounter/></div>
                <div><RemoveItemsButton/></div>
            </div>
            
        </Provider>
    )
}

export default App
