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

const groups = [{
    name: 'Your Groups',
    path: '/groups/personal',
    tabIndex: 1
}, {
    name: 'Explore public goups',
    path: '/groups/all',
    tabIndex: 2
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
                <p className="title">{this.props.title}</p>
                <div style={{position: 'relative'}}>
                    <Tab pathname={this.props.pathname} history={this.props.history} items={this.props.groupTab ? groups : tabs}/>
                    <div className="side-span">
                        <span>
                            <input placeholder="Filter by name..." type="text"></input>
                        </span>
                        <Select/>
                        {this.props.selection ? <button>New Project</button> : null}
                    </div>
                </div>
            </div>
        );
    }
}