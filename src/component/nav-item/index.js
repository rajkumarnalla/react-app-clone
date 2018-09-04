import React from 'react';

import './navigation.scss'

export default class NavItem extends React.Component {
  render() {
    return (
      <span onClick={() => this.props.switchTab(this.props.index)} 
        className={this.props.activeIndex == this.props.index ? 'active-nav flex-row' : 'nav-item flex-row'} 
        style={{alignItems: 'center'}}>
        <span>
          {this.props.item}
        </span>
        {this.props.index == 0 || this.props.index == 1 ? 
          <span><i className="material-icons" style={{fontSize: '18px'}}>expand_more</i></span> : null}
      </span>
    );
  }
}