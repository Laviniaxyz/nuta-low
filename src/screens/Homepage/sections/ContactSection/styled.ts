import styled from 'styled-components';
import { COLORS } from '../../../../styled';

export const Components = {
  Container: styled.div`
    background-color: ${COLORS.secondary};
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
  `,
  ContactMessage: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 24px;
    justify-content: center;
    align-items: center;
    background-color: black;
    opacity: 0.9;
    position: relative;
  `,
  ContactForm: styled.div`
    display: flex;
    flex: 1;
  `,
  EmailWrapper: styled.div``,
  EmailText: styled.div`
    text-align: center;
    font-size: 22px;
    font-family: Open Sans;
    padding-left: 8px;
  `,
  PhoneText: styled.div`
    text-align: center;
    font-size: 22px;
    font-family: Open Sans;
    padding-left: 8px;
  `,
  TextWrapper: styled.div`
    display: flex;
    align-items: center;
    background-color: ${COLORS.secondary};
    z-index: 1;
  `,

  Form: styled.form`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 50px;
  `,
  TextArea: styled.textarea`
    color: ${COLORS.textColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border: 1px solid ${COLORS.textColor};
    margin: 25px 0;
    background-color: ${COLORS.secondary};
  `,
  Label: styled.div`
    color: ${COLORS.textColor};
    font-size: 16px;
    font-weight: normal;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
  `,
  BackgroundImage: styled.img`
    position: absolute;
    top: 0px;
    bottom: 0px;
    display: flex;
    flex: 1;
    opacity: 0.5;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0 0px 1px 1px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  `,
};
