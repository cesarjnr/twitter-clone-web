import styled from "styled-components";

import { Logo } from "../../../components/Logo";
import { AnimatedInput } from "../../../components/AnimatedInput";

interface DateOfBirthTextProps {
  $color?: string;
  $fontWeight?: number;
};
interface SelectInputContainerProps {
  $flexGrow?: number;
};

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
  width: 600px;
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
const DateOfBirthText = styled.span`
  font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 15px;
  color: ${(props: DateOfBirthTextProps) => props.$color};
  font-weight: ${(props: DateOfBirthTextProps) => props.$fontWeight};
`;
const SelectInputsContainer = styled.div`
  margin: 16px 0;
  display: flex;
  gap: 12px;
`;
const SelectInputContainer = styled.div`
  flex-grow: ${(props: SelectInputContainerProps) => props.$flexGrow}
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
          <div>
            <div>
              <DateOfBirthText $fontWeight={700}>Date of birth</DateOfBirthText>
            </div>
            <div>
              <DateOfBirthText $color="rgb(110, 118, 125)">
                This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
              </DateOfBirthText>
            </div>
            <SelectInputsContainer>
              <SelectInputContainer $flexGrow={9}>
                <AnimatedInput type="select" label="Month" />
              </SelectInputContainer>
              <SelectInputContainer $flexGrow={1}>
                <AnimatedInput type="select" label="Day" />
              </SelectInputContainer>
              <SelectInputContainer $flexGrow={2}>
                <AnimatedInput type="select" label="Year" />
              </SelectInputContainer>
            </SelectInputsContainer>
          </div>
        </ModalForm>
      </div>
    </ModalContainer>
  </StyledSignUpModal>
);
