import React from 'react';

import './navigation.scss'

export default class NavItem extends React.Component {
  constructor(props) {
    super()
    if (props.item === 'Groups') {
      this.state = {
        showDialog: false
      }
    }
    this.toggleDialog = this.toggleDialog.bind(this);
  }
  componentWillMount() {
    if (this.props.item === 'Groups') {
      document.addEventListener('mousedown', this.toggleDialog, false)
    }
  }
  componentWillUnmount() {
    if (this.props.item === 'Groups') {
      document.removeEventListener('mousedown', this.toggleDialog, false);
    }
  }
  // componentDidUpdate() {
  //   if (this.state && !this.state.showDialog) {
  //     this.toggleDialog();
  //   }
  // }
  toggleDialog() {
    if (this.props.activeIndex === this.props.index) {
      this.setState({
        showDialog: !this.state.showDialog
      })
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
        {this.props.item == 'Groups' && this.state.showDialog ? <div className="group-search">
          <div className="row-container">
            <ul>
              <li>Your groups</li>
              <li>Explore groups</li>
            </ul>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', padding: '12px', flex: 1}}>
              <div style={{flex: 1, height: '30px', width: 'calc(100% - 18px)', maxHeight: '30px', background: 'white', color: 'black', border: '1px solid #e5e5e5'}} className="search-bar">
                <input style={{width: 'inherit', background: 'white', color: 'black'}} className="search-bar-input" type="text" placeholder="Search your groups"/>
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