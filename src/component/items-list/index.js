import React, {Component} from 'react';

import './items-list.scss';

const ProjectItem = (props) => {
    const iconSection = (<div>
        <span style={{textAlign: 'right', marginRight: '15px', display: 'flex', alignItems: 'cener'}}>
            <i style={{fontSize: '16px'}} 
                className="material-icons">star</i><span style={{fontSize: '14px'}}>30</span>
            <i style={{fontSize: '16px', marginLeft: '13px'}} 
                className="material-icons">language</i>
        </span>
        <span style={{fontSize: '14px'}}>updated 5hrs ago</span>
    </div>);
    return (
        <Item {...props} iconSection={iconSection}/>
    );
}

const GroupItem = (props) => {
    const iconSection = (<div>
        <span style={{textAlign: 'right', marginRight: '15px', display: 'flex', alignItems: 'cener'}}>
            <i style={{fontSize: '16px', marginRight: '6px'}} 
                className="material-icons">folder</i><span style={{fontSize: '14px'}}>0</span>
            <i style={{fontSize: '16px', marginLeft: '13px', marginRight: '6px'}} 
                className="material-icons">bookmark_border</i><span style={{fontSize: '14px'}}>3</span>
            <i style={{fontSize: '16px', marginLeft: '13px', marginRight: '6px'}} 
                className="material-icons">group</i><span style={{fontSize: '14px'}}>24</span>
            <i style={{fontSize: '16px', marginLeft: '13px'}} 
                className="material-icons">person_outline</i>
        </span>
    </div>);
    return (
        <Item {...props} iconSection={iconSection}/>
    );
}

const Item = (props) => {
    return (
        <li key={props.index} className="list-item" style={{position: 'relative'}}>
            {props.group ? <i style={{fontSize: '18px', marginRight: '6px', verticalAlign: 'text-top'}} 
                className="material-icons">folder</i> : null}
            <span className={props.project ? "project-avatar" : "group-avatar"}>{props.el.group.charAt(0).toUpperCase()}</span>
            <div>
                <div className="project-title">
                    <span style={{fontSize: '14px'}}>{props.el.group} {props.el.title ? '/' + props.el.title : ''}</span>
                    <span>{props.el.role}</span>
                </div>
                {props.el.desc && props.el.desc != '' ? <span style={{marginTop: '5px', fontSize: '14px'}}>{props.el.desc}</span> : null}
            </div>
            <div style={{position: 'absolute', right: 0}}>
                {props.iconSection}
            </div>
        </li>
    );
}

export default class ItemsList extends Component {
    render() {
        return (
            <section>
                <ul className="project-list-container">
                    {this.props.data.map((el, index) => this.props.project ? <ProjectItem project key={index} el={el} index={index}/> : <GroupItem group key={index} el={el} index={index}/>)}
                </ul>
                <div style={{border: '1px solid grey', borderRadius: '2px', textAlign: 'center', width: '65px', margin: '0 auto', marginTop: '20px'}}>
                    <button style={{background: 'none', border: 'none', padding: '6px 0'}}>Next</button>
                </div>
            </section>
        )
    }
}