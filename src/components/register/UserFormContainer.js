import styled from 'styled-components';

const UserFormContainer = styled.div`
  background-color: ${(props) => props.theme.greyBackgroundColor};
  text-align: center;
  border: ${(props) => props.theme.borderSecondary};
  border-collapse: collapse;
  border-radius: 0 0 ${(props) => props.theme.borderRadius}
    ${(props) => props.theme.borderRadius};
  padding: 20px 20px 0 20px;
  padding: 20px 20px 0 20px;
  width: 50%;
  margin: auto;

  h1 {
    color: white;
  }

  input[type='text'],
  input[type='password'] {
    width: 20%;
    min-width: 75px;
    margin-bottom: 10px;
    border-radius: 5px;
    color: white;
    font-weight: 750;

    background-color: transparent;
    border: none;
    border-bottom: solid black 1px;
    text-align: center;
    transition: all 0.3s ease-in-out;

    &:focus {
      outline: none;
      border-bottom: solid white 2px;
      width: 30%;
    }

    &::placeholder {
      color: white;
      font-weight: normal;
    }
  }

  input[type='file'] {
    display: none;
  }

  #loginConfirmationButton {
    margin-bottom: 20px;
  }

  #forgotPassword:hover {
    font-weight: 900;
    cursor: pointer;
  }

  .socialMediaLoginButton {
    height: 30px !important;
    width: 80% !important;
    margin: 0 auto 10px auto !important;
    font-size: 90% !important;
    font-weight: 700;
  }

  .socialMediaLoginContainer {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 1050px) {
    .socialMediaLoginButton {
      font-size: 80% !important;
      font-weight: 700;

      p {
        margin: 0;
      }
    }
  }

  @media only screen and (max-width: 880px) and (min-width: ${(props) =>
      props.theme.mobileDeviceSizeLimit}) {
    .socialMediaLoginButton {
      width: 40px !important;

      div:nth-child(3) {
        display: none;
      }
    }
  }
`;

export default UserFormContainer;
