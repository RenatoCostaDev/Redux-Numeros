import { createStore, combineReducers } from 'redux'
//combineReducers combina tds reducers(funções) p/ gerar a Store (createStore)
import numeros from './reducers/numeros'

const reducers = combineReducers({
    numeros: numeros,
})

function storeConfig() {   //Função q configura novo estado através dos reducers
    return createStore(reducers)
}
export default storeConfig