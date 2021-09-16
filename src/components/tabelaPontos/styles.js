import styled from 'styled-components';


export const TableXY = styled.div`

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