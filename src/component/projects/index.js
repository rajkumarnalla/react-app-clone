import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ItemsList from '../items-list';
import ProjectTab from './project-tab';
import Tab from '../tab';
import './projects.scss'

const yourProjects = [{
    group: 'Group 1',
    title: 'Project - G1',
    desc: 'This is an open source project build using reactjs',
    role: 'Maintainer'
}, {
    group: 'Group 2',
    title: 'Project - G2',
    desc: '',
    role: 'Maintainer'
}, {
    group: 'Group 3',
    title: 'Project - G3',
    desc: '',
    role: 'Developer'
}]

const Starred = () => {
    return (
        <div>
            <h3 style={{marginBottom: 0}}>You don't have starred projects.</h3>
            <p style={{fontSize: '14px'}}>Visit project page and press on star icon and it will appear on this page.</p>
        </div>
    )
}

const YourProjects = (props) => {
    return (
        <div>
            <Tab history={props.history} pathname={'/dashboard/projects/all'} items={[{name: 'All', path: '/dashboard/projects/all', tabIndex: 1}, {name: 'Personal', path: '/dashboard/projects/all?personal=true', tabIndex: 2}]} 
                style={{padding: '10px', paddingBottom: '11px'}}/>
            <ItemsList project data={yourProjects}/>
        </div>
    );
}

const routes = {
    '/dashboard/projects/all': {
        component: YourProjects,
        name: 'Your Projects',
    },
    '/dashboard/projects/starred': {
        component: Starred,
        name: 'Starred Projects',
    }
}

export default class Projects extends Component {
    render() {
        return (
            <div className="dashboard_container">
                <ProjectTab title="Projects" selection history={this.props.history} routes={routes} pathname={this.props.location.pathname}/>
                <Switch>
                    {Object.keys(routes).map((key, index) => (
                        <Route key={index} exact path={key} component={routes[key].component}/>)
                    )}
                </Switch>
            </div>
        )
    }
} 