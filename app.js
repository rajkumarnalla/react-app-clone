import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './src/component/header'
import './app.scss'

const cards = [{
  title: "Create a project"
},{
  title: "Create a group"
},{
  title: "Explore public projects"
},{
  title: "learn more about GitLab"
}]

function HomeCard() {
  return (
    <div style={{boxShadow: '0 0 2px grey'}}>
      Home
    </div>
  );
}

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div style={{maxWidth: '1280px', margin: '0 auto'}}>
          <h4 style={{color: '#2e2e2e', padding: '6px 2px', paddingBottom: '15px', borderBottom: '1px solid #e5e5e5', fontSize: '12px'}}>Projects</h4>
          <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {cards.map((el, index) => {
              return (
                <div key={index} style={{flex: 1, flexBasis: '50%', boxShadow: '0 0 2px grey', padding: '50px 30px'}}>{el.title}</div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Home/>, document.getElementById('app'));