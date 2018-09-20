import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ItemsList from '../items-list';
import ProjectTab from '../projects/project-tab';
import './groups.scss'

const yourProjects = [{
    group: 'Server',
    desc: 'Group cotains server application of various technologies',
    role: 'Maintainer'
}, {
    group: 'docs',
    desc: 'applications docs',
    role: 'Maintainer'
}, {
    group: 'UI developer',
    desc: 'Ui developers group contains frontend apps',
    role: 'Developer'
}]

const GroupsList = (props) => {
    return (
        <ItemsList group data={yourProjects}/>
    );
}

const routes = {
    '/groups/all': {
        component: GroupsList,
        name: 'Your Groups',
    },
    '/groups/personal': {
        component: GroupsList,
        name: 'Explore Public Groups',
    }
}

export default class Groups extends Component {
    render() {
        return (
            <div className="dashboard_container">
                <ProjectTab groupTab title="Groups" history={this.props.history} routes={routes} pathname={this.props.location.pathname}/>
                <Switch>
                    {Object.keys(routes).map((key, index) => (
                        <Route key={index} exact path={key} component={routes[key].component}/>)
                    )}
                </Switch>
            </div>
        )
    }
} 