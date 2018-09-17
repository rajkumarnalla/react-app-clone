import React, { Component } from 'react';

import './select.scss'

export default class Select extends Component {
    constructor() {
        super();
        this.state = {
            showItems: false,
            inputText: 'Oldest update'
        }
        this.toggleItems = this.toggleItems.bind(this);
    }
    componentWillMount() {
        document.addEventListener('mousedown', this.toggleItems, false);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.toggleItems, false);
    }
    toggleItems(e) {
        this.setState({
            showItems: e.target.className === 'select-input' ? true : false
        })
    }
    render() {
        return (
            <div className="select">
                <span className="select-input">
                    {this.state.inputText}
                    <i style={{float: 'right'}} className="material-icons">keyboard_arrow_down</i>
                </span>
                <ul style={this.state.showItems ? {display: 'block'} : null} className="select-items">
                    <li>Sort by</li>
                    <li>Last updated</li>
                    <li>Name</li>
                    <li><i style={{position: 'absolute', left: '5px', fontSize: '15px', fontWeight: 'bold', top: '10px'}} className="material-icons">done</i>Oldest updated</li>
                    <li>Oldest created</li>
                    <li>Last created</li>
                    <li><i style={{position: 'absolute', left: '5px', fontSize: '15px', fontWeight: 'bold', top: '10px'}} className="material-icons">done</i>Hide archived projects</li>
                    <li>Show archived projects</li>
                    <li>Show archived projects only</li>
                    <li><i style={{position: 'absolute', left: '5px', fontSize: '15px', fontWeight: 'bold', top: '10px'}} className="material-icons">done</i>Owned by anyone</li>
                    <li>Owned by me</li>
                </ul>
            </div>
        );
    }
}