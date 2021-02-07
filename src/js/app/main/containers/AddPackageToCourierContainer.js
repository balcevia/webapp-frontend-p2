import React from 'react';
import {bindActionCreators} from "redux";
import operations from '../duck/operations';
import {connect} from 'react-redux';
import {formWrapper} from "../../common/form/formWrapper";
import {FormNames} from "../../constants";
import { Field } from "redux-form";
import TakePackage from '../components/TakePackage';

class AddPackageToCourierContainer extends React.PureComponent {

    render = () => {
        return (
            <TakePackage onSubmit={this.props.operations.addPackageToCourier}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    operations: bindActionCreators(operations, dispatch)
});

const FormCnt = formWrapper({form: FormNames.CourierPackage})(AddPackageToCourierContainer);

export default connect(null, mapDispatchToProps)(FormCnt);