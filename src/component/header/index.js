import React from 'react';

import NavItem from './nav-item';
import { Link } from 'react-router-dom';

import './header.scss'
import HeaderSearchBar from './header-search-bar';

const tabs = ["Projects", "Groups", "Activity", "Milestones", "Snippets"]

function IconButton(props) {
  return (
    <div className={props.activeIconBtn == props.id ? "active-nav  icon-btn" : "nav-item  icon-btn"} 
    onClick={() => props.handleClick(null, props.id)}>
      <i className="material-icons" style={props.iconStyle}>{props.icon}</i>
    </div>
  );
}

function PullDownButton(props) {
  return (
    <div className={props.activeIconBtn == props.id ? "active-nav header-pull-down" : "nav-item header-pull-down"} 
      onClick={() => props.handleClick(null, props.id)}>
      <i className="material-icons" style={{color: '#d1d1f0', 'fontSize': '18px'}}>{props.icons[0]}</i>
      <i className="material-icons" style={{fontSize: '18px'}}>{props.icons[1]}</i>
    </div>
  );
}

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0
    }
    this.switchTab = this.switchTab.bind(this);
    this.toggleDialog = this.toggleDialog.bind(this);
  }
  switchTab(index, id) {
    this.setState({
      showGroupFilterDialog: index == 1 ? true : false,
      activeIndex: index,
      activeIconBtn: id
    })
  }
  toggleDialog(key) {
    this.setState({
      [key]: !this.state[key]
    })
  }
  render() {
    return (
      <header className="header">
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', float: 'left', height: 'inherit'}}>
          {tabs.map((el, index) => 
            <NavItem key={index} toggleDialog={this.toggleDialog} showGroupFilterDialog={this.state.showGroupFilterDialog} 
              switchTab={this.switchTab} activeIndex={this.state.activeIndex} item={el} index={index}/>
          )}
        </div>
        <div style={{float: 'right', color: '#d1d1f0', height: 'inherit'}}>
          <PullDownButton activeIconBtn={this.state.activeIconBtn} handleClick={this.switchTab} 
            id="ic-btn-1" icons={['add_box', 'expand_more']}/>
          <HeaderSearchBar />
          <IconButton activeIconBtn={this.state.activeIconBtn} handleClick={this.switchTab} 
            id="ic-btn-2" iconStyle={{fontSize: '18px'}} icon="stay_current_portrait"/>
          <IconButton activeIconBtn={this.state.activeIconBtn} handleClick={this.switchTab} 
            id="ic-btn-3" iconStyle={{fontSize: '18px'}} icon="merge_type"/>
          <IconButton activeIconBtn={this.state.activeIconBtn} handleClick={this.switchTab} 
            id="ic-btn-4" iconStyle={{fontSize: '18px'}} icon="calendar_today"/>
          <PullDownButton activeIconBtn={this.state.activeIconBtn} handleClick={this.switchTab} 
            id="ic-btn-5" icons={['person', 'expand_more']}/>
        </div>
      </header>
    );
  }
}