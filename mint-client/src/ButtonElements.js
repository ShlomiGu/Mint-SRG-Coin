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
  color: #ffffff !important;
  font-family: "Montserrat", Helvetica, Arial, Lucida, sans-serif !important;
  font-weight: 800 !important;
  text-transform: uppercase !important;
  background-image: linear-gradient(180deg, #ef4e11 0%, #dd1d0f 100%);
  display: inline-block;
  padding: 0.3em 1em;
  line-height: 1.7em !important;
  border-radius: 50px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    font-size: 18px;
  }
`;