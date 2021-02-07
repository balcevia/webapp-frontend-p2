import React from 'react';
import NewPackageForm from '../components/NewPackageForm';
import {bindActionCreators} from "redux";
import operations from '../duck/operations';
import {connect} from 'react-redux';

class NewPackageContainer extends React.PureComponent {

    componentDidMount = () => {
        this.props.operations.fetchUserData();
    };

    render = () => {
        return (
            <NewPackageForm onSubmit={this.props.operations.createNewPackage}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    operations: bindActionCreators(operations, dispatch)
});

export default connect(null, mapDispatchToProps)(NewPackageContainer);