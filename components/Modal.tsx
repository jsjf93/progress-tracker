import styled from 'styled-components';
import { typeScale } from '../utils';
import { PrimaryButton } from '@components/Buttons';

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
  background: white;
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

// const SignUpText = styled.p`
//   font-size: ${typeScale.paragraph};
//   max-width: 70%;
//   text-align: center;
// `;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  outline: none;
`;

export const SignUpModal = () => {
  return (
    <ModalWrapper>
      <img src="/images/signup.svg" alt="Signup" aria-hidden={true} />
      <CloseModalButton aria-label="Close modal" onClick={() => console.log('You closed the modal!')}>
        <Img src="/images/close.svg" alt="Close modal icon" />
      </CloseModalButton>

      <SignUpHeader>Sign up!</SignUpHeader>
      <PrimaryButton>Submit</PrimaryButton>
    </ModalWrapper>
  );
};
