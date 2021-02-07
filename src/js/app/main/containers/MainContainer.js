import React from 'react';
import '../components/Main.scss';
import {Switch} from "react-router";
import {bindActionCreators} from "redux";
import mainOperations from '../duck/operations';
import {connect} from 'react-redux';
import SecureRoute from "../../common/SecureRoute";
import NewPackageContainer from "./NewPackageContainer";
import PackagesContainer from "./PackagesContainer";

class MainContainer extends React.PureComponent {

  componentDidMount = () => {
  };

  render = () => (
    <div className="main-container">
      <Switch>
        <SecureRoute exact path="/main/new-package" component={NewPackageContainer}/>
        <SecureRoute exact path="/main/packages" component={PackagesContainer}/>
      </Switch>
    </div>
  )
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  mainOperations: bindActionCreators(mainOperations, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);