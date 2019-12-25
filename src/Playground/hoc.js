import React from 'react';
import ReactDOM  from 'react-dom';

const Info = (props)=>(
    <div>
        <h1>Info</h1>
        <p>{props.details}</p>
        {/* {props.secret && <p>secret</p>} */}
    </div>
);

const withAdminWarning = (WrappedElement) => {
    return (props) =>(
    <div>
        {props.secret && <p>This is secret.</p>}
        <WrappedElement {...props} />
    </div>
    )
}

const requireAuthenticationInfo = (WrappedElement) => {
    return (props=>(
        <div>
            {props.isAuthenticated ? <WrappedElement {...props}/> : <p>You have to be authenticated in order to view the content</p>}
        </div>
    ))
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthenticationInfo(Info);

// ReactDOM.render(<AdminInfo secret={true}  details='this are the details'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} details='this are the details'  />, document.getElementById('app'));