import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info: </h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a private message, Don't share this</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedAuthentication) => {
    return (props) => (
        <div>
            {!props.isAdmin && <p>You should log in first</p>}
            { props.isAuthentication && <p>You are auntheticate person</p> }
            <WrappedAuthentication {...props} />
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info="Hello" />, document.getElementById('root'))
ReactDOM.render(<AuthInfo isAuthentication={false} info="Hello" />, document.getElementById('root'))