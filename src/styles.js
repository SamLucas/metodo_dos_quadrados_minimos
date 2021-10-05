import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 1fr;
  
  @media (min-width: 1500px) {
    grid-template-columns: 40% 1fr;

  }

  @media (min-width: 2000px) {
    grid-template-columns: 30% 1fr;

  }

  @media (max-width: 1090px) {
    display: flex;
    flex: 1;

    flex-direction: column;
  }
`;

export const Side = styled.div`
  display: block;
  max-width: 100%;

  padding: 0px 40px;

  @media (max-width: 530px) {
    padding: 0px 10px;
  }

  .contentData {
    max-width: 100%;
  }
`;


export const ContentGraph = styled.div`

  @media (min-width: 1090px) {  
    position: fixed;
    top: 20px;
    bottom: 0;
    right: 20px;
    
  }  

  @media (max-width: 1090px) {  
    padding-bottom: 20px;
  }  
`;

export const Header = styled.div`
  h1 , p {
    text-align: left;
  }

  h1 {
    margin-top: 30px;
    margin-bottom: 10px;
  }
`;

export const ContentInputXY = styled.div`
  display: grid;
  grid-template-columns: 32% 32% 32%;
  margin: 10px 0px;

  justify-content: space-around;

  gap: 10px;

  input {
    border: 1px solid #cecece;
    border-radius: 5px;
    padding: 10px;
  }

  button {
    border: none;
    border-radius: 5px;
    cursor: pointer;

    background-color: #2d4c72;
    color: white;
  }
`;

export const ContentInputJson = styled.div`
  display: flex;
  flex-direction: column;

  textarea {
    border: 1px solid #cecece;
    border-radius: 10px;
    max-width: 100%;
  }

  p {
    margin: 20px 0px;

    a {
      font-weight: bold;
      color: #2d4c72;
      padding: 5px;
      background-color: rgba(56,96,143,0.1);
      border-radius: 10px;
      
      text-decoration: none;
      margin: 0px 5px;

      border: none;
      border-radius: 5px;

      cursor: pointer;

      &.clear {
        background-color: #2d4c72;
        color: white;
      }
    }
  }

  button {
    margin: 10px 0px;
    padding: 20px;

    border: none;
    border-radius: 10px;

    font-size: 11pt;
    cursor: pointer;

    background-color: #2d4c72;
    color: white;
  }
`;

export const TextResponse = styled.p`
  margin: 10px 0px;
`;

export const TextSepator = styled.p`
  color: #2d4c72;

  text-align: center;
  font-size: 18pt;

  font-family: 'Dancing Script', cursive;
`;

export const Footer = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  p {
    padding: 40px 0px 20px;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    cursor: pointer;
  }

  img {
    width: 20px;
    height: 20px;
    margin-left: 5px;
  }

`;