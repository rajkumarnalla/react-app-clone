import React, { Component } from 'react';

import './header-search-bar.scss';

export default class HeaderSearchBar extends Component {
    constructor() {
        super();
        this.state = {
            inputFocus: false
        }
        this.handleOnFocus = this.handleOnFocus.bind(this)
        this.handleOnBlur = this.handleOnBlur.bind(this)
    }
    handleOnFocus() {
        this.setState({
            inputFocus: true
        })
    }
    handleOnBlur() {
        this.setState({
            inputFocus: false
        })
    }
    render() {
        return (
            <div className={this.state.inputFocus ? "focus-input search-bar" : "search-bar"}>
                <input onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} className="search-bar-input" type="text" placeholder="Search or jump to..."/>
                <span className="search-bar-btn">
                    <i className="material-icons" style={{fontSize: '18px'}}>search</i>
                </span>
                {this.state.inputFocus ? <div className="search-autocomplete">
                    <span>
                        <i className="material-icons" style={{fontSize: '18px', verticalAlign: 'text-top'}}>search</i> searching for "s"
                    </span>
                    <ul>
                        <li style={{fontWeight: 'bold'}}>Settings</li>
                        <li>User Settings</li>
                        <li>SSH Keys</li>
                        <li>Dashboard</li>
                    </ul>
                    <ul>
                        <li style={{fontWeight: 'bold'}}>Help</li>
                        <li>Permissions Help</li>
                        <li>Public Access Help</li>
                        <li>Rake Tasks Help</li>
                    </ul>
                </div> : null}
            </div>
        )
    }
}