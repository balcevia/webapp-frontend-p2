import React from 'react';
import Table from '../../common/table/Table';
import Button from '../../common/Button';

const Packages = ({packages, downloadFile}) => {
    const headers = [{
        title: "ID",
        key: "id"
    },{
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
        title: "Actions",
        key: "id",
        valueRenderer: (id) => <Button title="Download" onClick={() => downloadFile(id)}/>
    }];
    return (
        <div>
            <strong>Number of packages: {packages.length}</strong>
            <Table data={packages} headers={headers}/>
        </div>
    );
};

export default Packages;