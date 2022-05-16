import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  white-space: nowrap;
  padding ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#010606")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #000;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  };
`;

export const WalletButton = styled(Link)`
  color: #F1F1F1 !important;
  font: normal normal normal 18px/7px Poppins;
  display: inline-block;
  padding: 0.3em 1em;
  line-height: 2.1em !important;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  border: 2px solid var(--unnamed-color-ffcc00);
  cursor: pointer;

  width: 100%;
  text-align: center;
  margin-bottom: 22px;

  &:hover {
    background: #060707 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 15px #FFCC0073;
  }
`;

export const WhitePaperButton = styled(Button)`
  background: var(--unnamed-color-060707) 0% 0% no-repeat padding-box;
  border: 2px solid var(--unnamed-color-ffcc00);
  background: #060707 0% 0% no-repeat padding-box;
  border: 2px solid #FFCC00;
  border-radius: 8px;
  opacity: 1;
  font: normal normal normal 700 1.5rem/7px Poppins;
  width: 250px;
  height: 80px;
  text-align: center;
  margin-bottom: 22px;
  color: #FFCC00;
  padding: 0;
  margin: 20px 0px 20px 30px;
  /* transition: all 0.2s ease-in-out 0.3s; */

  &:hover {
    background: #FFCC00 0% 0% no-repeat padding-box;
    color: black;
    box-shadow: 0px 5px 15px #FFCC0073;
  }

  @media screen and (max-width:768px) {
    font: normal normal 600 14px/7px Poppins;
    width: 37vw;
    height: 50px;
    margin-bottom: 15px;
    padding: 0;
  },  

`;