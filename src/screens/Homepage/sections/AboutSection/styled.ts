import styled from 'styled-components';
import { COLORS } from '../../../../styled';

export const Components = {
  AboutContainer: styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 400px;

    //grid-template-columns: 1fr 1fr;
    //position: relative;
    //
    //@media screen and (max-width: 800px) {
    //  grid-template-columns: 1fr;
    //}
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
    height: 400px;
    object-fit: cover;
    box-shadow: 0 0px 1px 1px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  `,
  Description: styled.div`
    position: absolute;
    top: 0px;
    bottom: 0px;
    display: flex;
    flex: 1;
    flex-direction: column;
    padding-left: 240px;
    padding-right: 240px;
    z-index: 1;
    opacity: 0.7;
    background-color: black;

    @media screen and (max-width: 1400px) {
      padding-left: 120px;
      padding-right: 120px;
    }

    @media screen and (max-width: 800px) {
      padding-left: 60px;
      padding-right: 60px;
    }
  `,
  Title: styled.h2`
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
    text-align: center;
    z-index: 2;
    font-family: Open Sans;
    color: white;
    opacity: 0.7;
    padding: 12px;
    font-size: 28px;
    border-radius: 4px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.05);
  `,
  DescriptionText: styled.p`
    text-align: center;
    font-size: 24px;
    z-index: 2;
    font-family: Open Sans;
    color: ${COLORS.backgroundColor};

    @media screen and (max-width: 1400px) {
      font-size: 20px;
    }

    @media screen and (max-width: 600px) {
      font-size: 18px;
    }
  `,
};
