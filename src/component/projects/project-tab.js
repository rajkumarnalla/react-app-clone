import React, { Component } from 'react';

import Tab from '../tab';
import Select from '../select';

const tabs = [{
    name: 'Your Projects',
    path: '/dashboard/projects/all',
    tabIndex: 1
}, {
    name: 'Starred Projects',
    path: '/dashboard/projects/starred',
    tabIndex: 2
}, {
    name: 'Explored Projects',
    path: '/explored',
    tabIndex: 3
}]

export default class ProjectTab extends Component {
    constructor() {
        super();
        this.activeTab = this.activeTab.bind(this);
    }
    activeTab() {
        return this.props.routes[this.props.pathname] ? this.props.routes[this.props.pathname].tabIndex : 1
    }
    render() {
        return (
            <div>
                <p className="title">Projects</p>
                <div style={{position: 'relative'}}>
                    <Tab pathname={this.props.pathname} history={this.props.history} items={tabs}/>
                    <div className="side-span">
                        <span>
                            <input placeholder="Filter by name..." type="text"></input>
                        </span>
                        <Select/>
                        <button>New Project</button>
                    </div>
                </div>
            </div>
        );
    }
}