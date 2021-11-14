import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './index.css'
import { StateProvider } from './StateProvider';
import reducer, {initialState} from './reducer';

ReactDom.render(

 <StateProvider initialState={initialState} reducer={reducer}>
  <App></App>
  </StateProvider>
  


  ,document.getElementById('root')
)


