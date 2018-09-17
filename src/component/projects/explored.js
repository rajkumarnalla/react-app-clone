import React, { Component } from 'react';

import ProjectList from '../project-list';
import Tab from '../tab';
import ProjectTab from './project-tab';

const projects = [{
    group: 'Gems',
    title: 'Proto',
    desc: 'This is an open source project build using reactjs',
    role: 'Maintainer'
}, {
    group: 'Mint',
    title: 'Todo',
    desc: '',
    role: 'Developer'
}, {
    group: 'Gems',
    title: 'Sample',
    desc: '',
    role: 'Developer'
}]

const routes = {
    '/explored': {
        path: '/explored',
        component: projects,
        tabIndex: 3,
        exclude: true
    },
    '/explored/projects/starred': {
        path: '/explored',
        component: projects,
        tabIndex: 3,
    },
    '/explored/projects/all': {
        path: '/explored/projects/all',
        component: projects,
        tabIndex: 3
    }
}

export default class Explored extends Component {
    render() {
        return (
            <div className="dashboard_container">
                <ProjectTab history={this.props.history} routes={routes} pathname={this.props.location.pathname}/>
                {/* <Switch>
                    {Object.keys(routes).map((key, index) => (
                        <Route key={index} exact path={key} component={routes[key].component}/>)
                    )}
                </Switch> */}
                <Tab pathname={this.props.location.pathname} history={this.props.history}
                    items={[{name: 'Trending', path: '/explored', tabIndex: 1},
                        {name: 'Most stars', path: '/explored/projects/starred', tabIndex: 2}, 
                        {name: 'All', path: '/explored/projects/all', tabIndex: 3}]} 
                    style={{padding: '10px', paddingBottom: '11px'}}/>
                <ProjectList data={projects}/>
            </div>
        )
    }
} 