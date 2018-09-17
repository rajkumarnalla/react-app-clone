import React, {Component} from 'react';

import './project-list.scss';

export default class ProjectList extends Component {
    render() {
        return (
            <section>
                <ul className="project-list-container">
                    {this.props.data.map((el, index) => {
                        return (
                            <li key={index} className="list-item" style={{position: 'relative'}}>
                                <span className="avatar">{el.group.charAt(0).toUpperCase()}</span>
                                <div>
                                    <div className="project-title">
                                        <span>{el.group} / {el.title}</span>
                                        <span>{el.role}</span>
                                    </div>
                                    {el.desc && el.desc != '' ? <span style={{marginTop: '5px'}}>{el.desc}</span> : null}
                                </div>
                                <div style={{position: 'absolute', right: 0}}>
                                    <span style={{textAlign: 'right'}}>
                                        <i style={{fontSize: '16px', verticalAlign: 'text-top'}} 
                                            className="material-icons">star</i>30
                                        <i style={{fontSize: '16px', marginLeft: '13px', verticalAlign: 'text-top'}} 
                                            className="material-icons">language</i>
                                    </span>
                                    <span>updated 5hrs ago</span>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <div style={{border: '1px solid grey', borderRadius: '2px', textAlign: 'center', width: '65px', margin: '0 auto', marginTop: '20px'}}>
                    <button style={{background: 'none', border: 'none', padding: '6px 0'}}>Next</button>
                </div>
            </section>
        )
    }
}