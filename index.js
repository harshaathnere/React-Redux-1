// // import redux from 'redux'
// // import { createStore } from "redux"

 const redux = require('redux')
 const reduxLogger = require('redux-logger')
 const createStore = redux.createStore
 const combineReducers = redux.combineReducers
 const applyMiddlerware = redux.applyMiddleware
 const logger= reduxLogger.createLogger()
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM ='BUY_ICECREAM'


 function buyCake(){
     return{
        type: BUY_CAKE,
        info: 'First redux action'
    }
 }
 function buyIceCream(){
     return{
         type:BUY_ICECREAM
     }
 }

 const intialState={
     numOfCakes: 10,
     numOfIceCream: 20
 }
 const intialCakeState={
    numOfCakes: 10,
 }
 const intialIceCreamState={
    numOfIceCream: 20
 }
 const cakeReducer = (state=intialCakeState, action) =>{
     switch(action.type){
      case BUY_CAKE: return{
          ...state,
   numOfCakes: state.numOfCakes -1
      }

      
      default:  return state
     }

 }
 const iceCreamReducer = (state=intialIceCreamState, action) =>{
    switch(action.type){
     case BUY_ICECREAM: return{
         ...state,
         numOfIceCream: state. numOfIceCream -1
     }

     
     default:  return state
    }

}
const rootReducer= combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
 const store = createStore( rootReducer, applyMiddlerware(logger))
 console.log('Initial state' , store.getState())
 const unsubscribe=store.subscribe(()=> console.log('Updated state', store.getState()))
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 store.dispatch(buyCake())

 store.dispatch( buyIceCream())
 store.dispatch( buyIceCream())
 store.dispatch( buyIceCream())
 
 unsubscribe()