import React from 'react';
import {bindActionCreators} from "redux";
import operations from '../duck/operations';
import {connect} from 'react-redux';
import Table from '../../common/table/Table';
import Button from '../../common/Button';

class CourierPackagesContainer extends React.PureComponent {
    headers = [{
        title: "ID",
        key: "id"
    }, {
        title: "Sender Name",
        key: "senderName"
    }, {
        title: "Sender Surname",
        key: "senderSurname"
    }, {
        title: "Sender Address",
        key: "senderAddress"
    }, {
        title: "Sender Phone Number",
        key: "senderPhoneNumber"
    }, {
        title: "Receiver Name",
        key: "receiverName"
    }, {
        title: "Receiver Surname",
        key: "receiverSurname"
    }, {
        title: "Receiver Address",
        key: "receiverAddress"
    }, {
        title: "Receiver Phone Number",
        key: "receiverPhoneNumber"
    }, {
        title: "Date",
        key: "creationDate"
    }, {
        title: "Status",
        key: "status"
    },
        {
            title: "Actions",
            key: "id",
            valueRenderer: (id, v) => <div>
                <Button title="Download" onClick={() => this.props.operations.downloadFile(id)}/>
            </div>
        }];

    componentDidMount = () => {
        this.props.operations.fetchCourierPackages()
    };

    render = () => {
        return <div>
            <strong>Number of packages: {this.props.courierPackages.length}</strong>
            <Table data={this.props.courierPackages} headers={this.headers}/>
        </div>
    }
}

const mapStateToProps = (state) => ({
    courierPackages: state.main.courierPackages
});

const mapDispatchToProps = (dispatch) => ({
    operations: bindActionCreators(operations, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(CourierPackagesContainer);