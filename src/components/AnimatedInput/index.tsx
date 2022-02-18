import styled from "styled-components";
import { useState, SyntheticEvent } from 'react';

interface Props {
  type: 'text' | 'select';
  label: string;
  maxLength?: number;
};
interface StyledAnimatedInputProps {
  isFocused: boolean;
};
type TextInputLabelProps = StyledAnimatedInputProps & { isShrunk: boolean };

const StyledAnimatedInput = styled.div`
  border-radius: 4px;
  position: relative;
  border: 1px solid rgb(47, 51, 54);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

  ${(props: StyledAnimatedInputProps) => props.isFocused && `
    box-shadow: rgb(29, 161, 242) 0 0 0 1px;
    border-color: rgb(29, 161, 242);
  `}
`;
const TextInputLabel = styled.div`
  position: absolute;
  left: 8px;
  top: 18px;
  color: rgb(110, 118, 125);
  font-size: 17px;
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
              font-size 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
              top 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  ${(props: TextInputLabelProps) => props.isFocused && `
    color: rgb(29, 161, 242);
  `}

  ${(props: TextInputLabelProps) => props.isShrunk && `
    font-size: small;
    top: 8px;
  `}
`;
const TextInputCounter = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  color: rgb(110, 118, 125);
  font-size: 13px;
  font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;
const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  font-size: 17px;
  width: 100%;
  padding: 12px 8px 8px 8px;
  margin-top: 16px;
  color: rgb(217, 217, 217);

  &:focus-visible {
    outline: 0;
  }
`;
const SelectOption = styled.option`
  background-color: rgb(0, 0, 0);
`;

export const AnimatedInput = ({ type, label, maxLength }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputLength, setInputLength] = useState(0);
  const isShrunk = isFocused || inputLength > 0 || type === 'select';
  const shouldRenderInputLength = type === 'text' && maxLength && isFocused;
  const handleChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;

    setInputLength(target.value.length);
  };

  return (
    <StyledAnimatedInput isFocused={isFocused}>
      <TextInputLabel
        isFocused={isFocused}
        isShrunk={isShrunk}
      >
        {label}
      </TextInputLabel>

      {type === 'text' && (
        <div>
          {shouldRenderInputLength && (
            <TextInputCounter>{inputLength} / {maxLength}</TextInputCounter>
          )}

          <StyledInput
            type="text"
            maxLength={maxLength}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
      )}

      {type === 'select' && (
        <div>
          <StyledInput as="select" value="0">
            <SelectOption disabled value="0"></SelectOption>
            <SelectOption value="1">January</SelectOption>
          </StyledInput>
        </div>
      )}
    </StyledAnimatedInput>
  );
};
