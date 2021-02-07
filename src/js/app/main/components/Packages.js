import React from 'react';
import Table from '../../common/table/Table';
import Button from '../../common/Button';
import renderIf from 'render-if';
import {PackageStatus} from "../../constants";

const Packages = ({packages, downloadFile, removeFile}) => {
    const headers = [{
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
                <Button title="Download" onClick={() => downloadFile(id)}/>
                {renderIf(v.status === PackageStatus.New)(() => (
                    <Button title="Remove" onClick={() => removeFile(id)}/>
                ))}
            </div>
        }];
    return (
        <div>
            <strong>Number of packages: {packages.length}</strong>
            <Table data={packages} headers={headers}/>
        </div>
    );
};

export default Packages;