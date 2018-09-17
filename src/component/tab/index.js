import React, { Component } from 'react';
import './tab.scss';

export default class Tab extends Component {
    constructor() {
        super();
        this.activeTab = this.activeTab.bind(this);
    }
    switchTab(path) {
        // this.setState({
        //     activeTabIndex: index
        // })
        this.props.history.push(path)
    }
    activeTab() {
        var tab = this.props.items.filter(el => this.props.pathname === el.path);
        return tab.length ? tab[0].tabIndex : 3;
    }
    render() {
        return (
            <ul className="tab-container">
                {this.props.items ? 
                    this.props.items.map((el, index) => { 
                        return (
                            <li
                                onClick={() => this.switchTab(el.path)}
                                key={index}
                                style={this.props.style}
                                className={this.activeTab() == (index + 1) ? "active" : null}
                            >
                                {el.name}
                            </li>
                        )
                    }) 
                : null}
            </ul>
        );
    }
}