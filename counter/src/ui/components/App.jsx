import { Provider } from 'react-redux'
///engine
import { store } from '../../engine/config/store'

import '../../App.css'
import { Counter,ButtonInc, ButtonDec} from './Counter'


function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <p>
          Clicked: <Counter/>
          <ButtonInc/>
          <ButtonDec/>
        </p>
      </div>
    </Provider>
  )
}

export default App
