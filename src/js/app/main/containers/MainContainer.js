import React from 'react';
import '../components/Main.scss';
import {Switch} from "react-router";
import {bindActionCreators} from "redux";
import mainOperations from '../duck/operations';
import {connect} from 'react-redux';
import SecureRoute from "../../common/SecureRoute";
import NewPackageContainer from "./NewPackageContainer";
import PackagesContainer from "./PackagesContainer";
import {UserRole} from "../../constants";
import CourierPackagesContainer from "./CourierPackagesContainer";
import AddPackageToCourierContainer from "./AddPackageToCourierContainer";

class MainContainer extends React.PureComponent {

  componentDidMount = () => {
  };

  render = () => (
    <div className="main-container">
      <Switch>
        <SecureRoute exact path="/main/new-package" component={NewPackageContainer} requiredRoles={[UserRole.Sender]}/>
        <SecureRoute exact path="/main/packages" component={PackagesContainer} requiredRoles={[UserRole.Sender]}/>
        <SecureRoute exact path="/main/add-courier-package" component={AddPackageToCourierContainer} requiredRoles={[UserRole.Courier]}/>
        <SecureRoute exact path="/main/courier-packages" component={CourierPackagesContainer} requiredRoles={[UserRole.Courier]}/>
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