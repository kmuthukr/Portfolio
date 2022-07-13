import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ isEmpty }) => (isEmpty ? "#FAFAFA" : "black")};
  height: 20%;
  border-radius: 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  margin: 8px;
`;

const DropDown = styled.div`
  background-color: lightblue;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -40;
  font-size: 10px;
  color: #7894b0;
  margin: 16px;
`;
const Footer = styled.div`
  background-color: rgb(242, 247, 251);
  width: 100%;
  height: 35px; /* changed */
  font-size: 12px;
  line-height: 12px;
  color: #4f4f4f;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out; /* added */
  overflow: hidden; /* added */

  span {
    padding: 12px 0;
  }

  .accodion {
    padding: 10px 15px 15px; 
    width: 100%;
    text-align:left;

  }

  &.show {
    height: ${({ setHeight }) => setHeight}px;
  }
`;

export { Card, Header, Footer, DropDown };
