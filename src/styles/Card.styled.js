import styled from "styled-components";
import DesktopDivider from "../assets/pattern-divider-desktop.svg";
import Dice from "../assets/icon-dice.svg";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 500px;
  max-width: 600px;
  border-radius: 10px;
  padding: 25px 0;
  background-color: hsl(217, 19%, 24%);
  z-index: 5;
  position: relative;
`;

export const AdviceNumber = styled.span`
  color: hsl(150, 100%, 66%);
  font-size: 12px;
  letter-spacing: 4px;
  padding: 20px 0;
`;

export const AdviceText = styled.p`
  color: hsl(193, 38%, 86%);
  font-size: 20px;
  text-align: center;
  padding: 0 20px;
`;

export const CardImage = styled.img.attrs((props) => ({
  src: DesktopDivider,
  alt: "Divider",
}))`
  margin: 20px 0 40px 0;
`;

export const DiceButton = styled.button`
  position: absolute;
  bottom: -30px;
  background-image: url(${Dice});
  background-position: center;
  background-repeat: no-repeat;
  background-color: hsl(150, 100%, 66%);
  cursor: pointer;
  padding: 30px;
  border-radius: 50%;
  border-width: 0px;
`;
