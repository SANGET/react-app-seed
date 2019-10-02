import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FormGenerator, TipPanel } from 'ukelli-ui';
import { FormOptions } from 'ukelli-ui/core/form-generator/form-generator';

import Storage from 'basic-helper/storage'
import { register } from '../actions/apis';

export default class Register extends Component {
  state = {
    logging: false
  }
  formOptions: FormOptions
  formHelper

  constructor(props) {
    super(props);

    this.formOptions = [
      {
        ref: 'username',
        type: 'input',
        // defaultValue: defaultUserInfo.AdminName,
        title: '账号',
        iconName: 'account',
        required: true
      },
      {
        ref: 'password',
        type: 'password',
        // defaultValue: defaultUserInfo.Password,
        title: '密码',
        iconName: 'lock',
        required: true
      }
    ];
  }

  render() {
    const { logging } = this.state
    return (
      <div
        className="login-panel fixbg">
        <div className="form-layout">
          <h3 className="title"></h3>
          <FormGenerator
            className="login-form-container"
            // inlineTitle={true}
            onSubmit={(e) => {
              register(this.formHelper.value);
            }}
            showInputTitle
            formOptions={this.formOptions} ref={e => this.formHelper = e}>
            <div className="form-group">
              <button type="submit" className="btn theme flat login-btn" id="freeLogin">
                {logging ? '注册中...' : '注册'}
              </button>
            </div>
          </FormGenerator>
        </div>
      </div>
    );
  }
}
