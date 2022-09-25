import styled from 'styled-components';
import { COLORS } from '../../../../../styled';

export const Components = {
  Container: styled.div`
    position: relative;
  `,
  Input: styled.input`
    color: ${COLORS.textColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${COLORS.textColor};
    margin-top: 25px;
    margin-bottom: 2px;
    background-color: ${COLORS.secondary};


    &:focus {
      outline: none;
    }

    &:focus ~ .form-input-label {
      top: -14px;
      font-size: 12px;
  `,
  Label: styled.div`
    color: ${COLORS.textColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
      top: -14px;
      font-size: 12px;
    }
  `,
  Error: styled.div`
    font-size: 12px;
    color: red;
  `,
};
