import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import operations from '../duck/operations';
import Packages from '../components/Packages';

class PackagesContainer extends React.PureComponent {

    componentDidMount = () => {
        this.props.operations.fetchPackages()
    };

    render = () => {
        return (
            <Packages packages={this.props.packages} downloadFile={this.props.operations.downloadFile} removeFile={this.props.operations.removeFile}/>
        );
    }
}

const mapStateToProps = (state) => ({
    packages: state.main.packages
});

const mapDispatchToProps = (dispatch) => ({
    operations: bindActionCreators(operations, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PackagesContainer);