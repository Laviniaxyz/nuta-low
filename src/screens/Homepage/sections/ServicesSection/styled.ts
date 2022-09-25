import styled from 'styled-components';
import { COLORS } from '../../../../styled';

export const Components = {
  ServicesContainer: styled.div`
    //padding-top: 30px;
    //padding-bottom: 64px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.whiteBeige};
    opacity: 1;
    position: relative;
  `,

  ServicesH1: styled.h2`
    font-family: 'Open Sans';
    text-align: center;
    font-size: 2rem;
    color: ${COLORS.secondary};
    margin-bottom: 64px;
    @media screen and (max-width: 480px) {
      font-size: 2rem;
    }
  `,
  ServicesWrapper: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    //grid-column-gap: 4px;
    justify-content: center;
    align-items: center;
    //padding-right: 60px;
    //padding-left: 60px;
    @media screen and (max-width: 850px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 500px) {
      grid-template-columns: 1fr;
    }
  `,
  RowServices: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  `,
  BackgroundImage: styled.img`
    position: absolute;
    top: 0px;
    bottom: 0px;
    display: flex;
    flex: 1;
    opacity: 0.4;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0 0px 1px 1px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  `,
};
