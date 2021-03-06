import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }

  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;
Label.Text = styled.span`
  color: #E5E5E5;
  height:57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585d;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color .3s;

  &:focus {
    border-bottom-color: var(--primary);
  }

  &:focus:not([type="color"]) + span {
    transform: scale(.6) translateY(-10px);  /* Faz a zoom no form cadastro de categoria */
  }

  ${function ({ hasValue }) {
    return hasValue && css`      /* caso primeiro valor for falso ele busca no segundo valor (&&) */
      background: #ff6b70 !important;
      &:not([type="color"]) + span {
        transform: scale(.6) translateY(-10px);  /* Faz a zoom no form cadastro de categoria e permanece no topo */
      }
    `;
  }}
`;

function FormField({ label, type, name, value, onChange }) {
  const fieldId = `id_${name}`;
  const isTypeTextarea = type === 'textarea';
  const tag = isTypeTextarea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);
  
  return (
    <FormFieldWrapper>
      <Label
        htmlForm={fieldId}
      >
        <Input
        as={tag}
        id={fieldId}
        type={type}
        value={value}
        name={name}
        hasValue={hasValue}
        onChange={onChange}
      />
        <Label.Text>
          {label}
          : 
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  )
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
}

FormField.prototype = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string, 
  name: PropTypes.string.isRequired, 
  value: PropTypes.string, 
  onChange: PropTypes.func,
};

export default FormField;