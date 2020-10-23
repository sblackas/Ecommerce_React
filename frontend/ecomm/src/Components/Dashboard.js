import React from 'react';
import HeaderUser from './HeaderUser';
import { connect } from 'react-redux'


class Dashboard extends React.Component{
render() {
  return (
    <div className="">
      <HeaderUser/>
<p>Welcome to you precious user</p>
<p>{this.props.token}</p>
<p>{this.props.user}</p>

    </div>
  );
}
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    token: state.userReducer.token,
    user:  state.userReducer.name
  }
}


export default connect(
  mapStateToProps
)(Dashboard) ;