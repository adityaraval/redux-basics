import React from 'react';
import {connect} from 'react-redux';
import {User} from '../components/User';
import {Main} from '../components/Main';
import {setName} from  '../actions/userActions';

class App extends React.Component {

    render(){

        return(
            <div className="container">
                <Main changeUsername={()=>this.props.setName("ABCD")} />
                <User username = {this.props.user.username} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        user:state.userReducer,
        math:state.mathReducer
    };
};

const mapDispatchToProps = (dispatch) => {
  return{
        setName: (name) => {
            dispatch(setName(name));
        }
  };
};



export default connect(mapStateToProps,mapDispatchToProps)(App);