import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { MenuBar } from '../components/menu/MenuBar'
import TaskList from '../pages/taskList/index'
import { TaskView } from '../pages/task/index'
import Header from '../components/Header'
import { Home } from '../pages/home/index'
import TaskToday from '../pages/tasksToday/index'
//----transições das páginas ----
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Routes = ()=>
<BrowserRouter>
    <Header />
    <MenuBar />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/task-list/:id' component={TaskList} />
        <Route path="/task/:id" component={TaskView} />
        <Route path="/task-today" component={TaskToday} />
    </Switch>
</BrowserRouter>

export default Routes