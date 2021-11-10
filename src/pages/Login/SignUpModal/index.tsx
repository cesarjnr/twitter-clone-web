import styled from "styled-components";

import { Logo } from "../../../components/Logo";
import { AnimatedInput } from "../../../components/AnimatedInput";

const StyledSignUpModal = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(91, 112, 131, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  line-height: 20px;
`;
const ModalContainer = styled.div`
  min-height: 400px;
  max-height: 90vh;
  min-width: 600px;
  max-width: 600px;
  background-color: rgb(0, 0, 0);
  border-radius: 16px;
  padding: 10px 32px 36px 32px;
`;
const ModalHeader = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`;
const ModalTitle = styled.h2`
  margin: 16px 0;
`;
const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const SwitchEmailPhoneLink = styled.a`
  text-decoration: none;
  margin-top: 16px;
  color: rgb(27, 149, 224);
  font-size: 15px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const SignUpModal = () => (
  <StyledSignUpModal>
    <ModalContainer>
      <ModalHeader>
        <Logo height="2rem" color="rgb(217, 217, 217)" />
      </ModalHeader>

      <div>
        <ModalTitle>Create your account</ModalTitle>
        <ModalForm>
          <AnimatedInput
            type="text"
            label="Name"
            maxLength={50}
          />
          <AnimatedInput type="text" label="Phone" />
          <SwitchEmailPhoneLink>Use email instead</SwitchEmailPhoneLink>
        </ModalForm>
      </div>
    </ModalContainer>
  </StyledSignUpModal>
);
