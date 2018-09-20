import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.scss'

export default class NavItem extends React.PureComponent {
  constructor(props) {
    super()
    if (props.item === 'Groups') {
      this.state = {
        showDialog: false
      }
      this.inputRef = React.createRef();
    }
    this.toggleDialog = this.toggleDialog.bind(this);
  }
  componentWillMount() {
    if (this.props.item === 'Groups') {
      document.addEventListener('mousedown', (ev) => { 
        if (!ev.target.href && this.props.showGroupFilterDialog) {
          console.log('--------------------------- inside mouse down event ====================')
          this.toggleDialog();
        }
      }, false)
      this.toggleDialog();
    }
  }
  componentWillUnmount() {
    if (this.props.item === 'Groups') {
      document.removeEventListener('mousedown', this.toggleDialog, false);
    }
  }
  componentDidUpdate() {
    if (this.props.item == 'Groups' && this.inputRef.current) {
      this.inputRef.current.focus();
    }
  //   if (this.state && !this.state.showDialog) {
  //   }
  }
  toggleDialog() {
    if (this.props.activeIndex === 1) {
      this.props.toggleDialog('showGroupFilterDialog');
    }
  }
  render() {
    return (
      <div onClick={() => this.props.switchTab(this.props.index)} 
        className={this.props.activeIndex == this.props.index ? 'active-nav flex-row' : 'nav-item flex-row'} 
        style={{alignItems: 'center', position: 'relative'}}>
        <span>
          {this.props.item}
        </span>
        {this.props.index == 0 || this.props.index == 1 ? 
          <span><i className="material-icons" style={{fontSize: '18px'}}>expand_more</i></span> : null}
        {this.props.item == 'Groups' && this.props.showGroupFilterDialog ? <div className="group-search">
          <div className="row-container">
            <ul>
              <li><Link to="/groups/all">Your groups</Link></li>
              <li><Link to="/groups/personal">Explore groups</Link></li>
            </ul>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', padding: '12px', flex: 1}}>
              <div style={{flex: 1, boxShadow: '0 0 8px dodgerblue', height: '30px', width: 'calc(100% - 18px)', maxHeight: '30px', background: 'white', color: 'black', border: '1px solid #e5e5e5'}} className="search-bar">
                <input ref={this.inputRef} style={{width: 'inherit', background: 'white', color: 'black'}} className="search-bar-input" type="text" placeholder="Search your groups"/>
                <span className="search-bar-btn">
                    <i className="material-icons" style={{fontSize: '18px', color: '#e5e5e5 '}}>search</i>
                </span>
              </div>
              <span style={{color: '#707070', fontSize: '16px', padding: '4px'}}>Frequently visited</span>
              <span  style={{color: '#707070', fontSize: '14px', padding: '4px', fontWeight: '400'}}>Groups you often visit will appear here</span>
            </div>
          </div>
        </div> : null}
      </div>
    );
  }
}