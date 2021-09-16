import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  height: 100vh;
  padding: 0px;

`;

export const Side = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: flex-end;

  overflow: scroll;

  padding: 40px;
`;

export const Header = styled.div`
  h1 , p {
    text-align: left;
  }

  h1 {
    margin-bottom: 10px;
  }
`;

export const ContentInputXY = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 10px 0px;

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

export const TableXY = styled.div`

  -webkit-animation-timing-function: cubic-bezier(0.5, 1, 0.25, 1);

  width: 100%;
  height: 25vh;

  margin-top: 40px;

  .row {

    display: flex;
    flex-direction: row;

    .header {
      .headerPoints {
        display: flex;
        justify-content: center;
        align-items: center;

        color: white;
        background-color: #2d4c72;

        width: 40px;
        height: 40px;

        margin: 5px 0px;
        border-radius: 5px;
      }
    }

    .contentPoints {

      display: flex;
      flex-direction: row;

      overflow: scroll;

      .contentPointsAdd {

        margin-left: 5px;
        cursor: pointer;

        .ButtonRemove {
          display: none;
          height: 0px;
        }

        &:hover {

          .ContentValue {
            color: white;
          }

          .ButtonRemove {
            display: flex;
            justify-content: center;
            align-items: flex-end;

            background-color: #2d4c72;

            width: 40px;
            height: 140px;

            border-radius: 5px;

            margin-top: -100px;

            -webkit-transition: height 1s; /* For Safari 3.1 to 6.0 */
            transition: height 1s;


            flex: 2;

            img {
              width: 20px;
              height: 20px;
              color: white;
              padding-bottom: 15px;
            }
          }
        }

        .ContentValue {
          display: flex;
          justify-content: center;
          align-items: center;

          color: black;
          background-color: #f5f5f5;
          border-radius: 5px;

          text-align: center;

          width: 40px;
          height: 40px;

          margin: 5px 0px;

        }
      }
    }
  }
`;

export const TableResult = styled.div`

  table {
    width: 100%;
    text-align: center;

    thead {
    }

    thead tr th {
      padding: 10px;
      background-color: rgba(56,96,143,0.8);
      border-radius: 5px;
      color: white;
    }

    tbody tr td {
      padding: 5px;
      background-color: rgba(56,96,143,0.1);
    }
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

export const ContentGraph = styled.div``;

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