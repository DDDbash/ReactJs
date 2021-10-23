import React, { useState } from 'react';
import errorIcon from '../icons/error-warning.svg';
import disabledIcon from '../icons/icon-disabled.svg';

const PasswordField = (props) => {
    const [labelActive, setLabelActive] = useState(false);

    const onFocus = () => setLabelActive(true);
    const onBlur = () => setLabelActive(false);
    const dataChange = (e) => {
        props.setData(e.target.value);
    };
    return (
        <div className="input-group">
            <label className={!props.disabled ? (!props.isError ? (!labelActive ? "label" : `label active`) : `label error`) : "label"}>
                {props.labelName}
            </label>
            <input
                type="password"
                onFocus={onFocus}
                onBlur={onBlur}
                className={!props.isError ? "input-design" : `input-design input-error`}
                onChange={dataChange}
                value={props.data}
                disabled={props.disabled}
            />
            {props.disabled ?
                <img
                    src={disabledIcon}
                    height="16"
                    width="16"
                    className="icon"
                    alt=""
                /> :
                (props.isError ?
                    <img src={errorIcon}
                        height="16"
                        width="16"
                        className="icon"
                        alt=""
                    /> : '')}
            <label className={!props.isError ? "label-hint" : `label-hint error`}>
                {props.hintMsg ? props.hintMsg : ''}
            </label>
            {props.isError ?
                <label className="label-hint error">
                    {props.errorMsg ? props.errorMsg : ''}
                </label> : ''}
        </div>
    );
}

export default PasswordField;