import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  background-color: #201b18;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  height: 60px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    height: 114px;
    padding: 0;
    padding-top: 54px;
    padding-left: 5%;
    padding-right: 5%;
  }
  @media (min-width: 768px) {
    padding-left: 15%;
    padding-right: 15%;
  }
`;

export const Logo = styled.img`
  width: 110px;
  @media (min-width: 768px) {
    width: 153px;
  }
`;

export const NetworkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const NetworkIcon = styled.a`
  margin: 0;
  margin-right: ${(props) => {
    return props.mr ? props.mr : "0px";
  }};
  padding: 0;
  @media (min-width: 768px) {
    margin-right: ${(props) => {
      return props.mr ? "51px" : "0px";
    }};
  }
`;

export const IconImg = styled.img`
  width: 25px;
  @media (min-width: 768px) {
    width: 36px;
  }
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  margin: 0;
  margin-top: 86px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    margin-top: 0px;
  }
`;

export const HeroImage = styled.img`
  width: 80%;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 80%;
  }
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  margin: 0;
  padding: 0;
  margin-bottom: 60px;
  font-size: 6.2vw;
  @media (min-width: 768px) {
    /* font-size: 89px; */
  }
  @media (min-width: 1024px) {
    font-size: 60px;
  } ;
`;

export const SubTitle = styled.h2`
  max-width: 60%;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 2.9vw;
  color: #ece6e6;
  padding: 0;
  margin: 0;
  margin-bottom: 60px;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #2997de;
  border-radius: 50px;
  color: #2997de;
  background-color: #201b18;
  margin-bottom: 80px;
  padding: 14px 32px;
  font-size: 13px;
  text-decoration: none;
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 33px;
  box-sizing: border-box;
`;

export const AddressTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #e7e2de;
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Address = styled.a`
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-size: 11px;
  color: #e7e2de;
  padding: 0;
  margin: 0;
  margin-bottom: 2px;
  text-decoration: underline #2997de;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const SecondLineAddress = styled.h4`
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 11px;
  color: #e7e2de;
  padding: 0;
  margin: 0;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Copy = styled.h5`
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-size: 10px;
  color: #e7e2de;
  padding: 0;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 13px;
  }
`;
