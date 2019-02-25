import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from './views/home/index'
import Near from './views/near/index'
import Find from './views/find/index'
import Order from './views/order/index'
import Mine from './views/mine/index'
import Login from './views/common/login/login'
import Error from './views/common/error/error'
import Setting from "./views/mine/setting"
import Infos from './views/mine/infos'
import City from "./views/home/city"

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/near'} component={Near}/>
            <Route path={'/find'} component={Find}/>
            <Route path={'/order'} component={Order}/>
            <Route path={'/mine'} component={Mine}/>
            <Route path={'/login'} component={Login}/>
            <Route path={'/error'} component={Error}/>
            <Route path={'/setting'} component={Setting}/>
            <Route path={'/infos'} component={Infos}/>
            <Route path={'/cities'} component={City}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
