import styled from 'styled-components';
import { COLORS } from '../../../../styled';

export const Components = {
  HeroSectionContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    position: relative;
    z-index: 1;
    :before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #000;
      opacity: 0.6;
      z-index: 2;
    }
  `,
  HeroBg: styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  `,
  VideoBg: styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background-color: #232a34;
  `,
  HeroContent: styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px;
  `,
  HeroH1: styled.h1`
    color: ${COLORS.backgroundColor};
    font-size: 48px;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 38px;
    }
    @media screen and (max-width: 480px) {
      font-size: 32px;
    }
  `,
};
