import PropTypes from 'prop-types'
function UserGreeting(props){
    const welcomeMesaage= <h1 className="welcome-message">Welcome {props.name}</h1>

    const loginMessage=<h1 className="login-prompt">Please login to Continue</h1>
    return(props.isStudent? welcomeMesaage : loginMessage);
}
    UserGreeting.propTypes={
        isStudent:PropTypes.bool,
        name:PropTypes.string
    }
    UserGreeting.defaultProps={
        isStudent:true,
        name:"mahesh"
    }
   
export default UserGreeting