import styled from "styled-components";

interface Props {
  text: string;
  variant: 'blue' | 'black';
  disabled?: boolean;
};
type DivProps = 
  Pick<Props, 'variant' | 'disabled'> & 
  { color: string, backgroundColor: string, hoverBackgroundColor: string };

const StyledRoundedButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  margin: 0 0 20px 0;
  padding: 15px 0;
  color: ${(props: DivProps) => props.color};
  background-color: ${(props: DivProps) => props.backgroundColor};
  transition-duration: 0.2s;

  ${(props: DivProps) => props.variant === 'black' && `
    border: 1px solid rgb(29, 161, 242);
  `}

  ${(props: DivProps) => props.disabled && `
    opacity: 0.5;
    pointer-events: none;
  `}

  &:hover {
    background-color: ${(props: DivProps) => props.hoverBackgroundColor}
  }
`;

export const RoundedButton = ({ text, variant, disabled }: Props) => {
  let color = '';
  let backgroundColor = '';
  let hoverBackgroundColor = '';

  if (variant === 'blue') {
    color = 'rgb(255, 255, 255)';
    backgroundColor = 'rgb(29, 161, 242)';
    hoverBackgroundColor = 'rgb(26, 145, 218)';
  } else {
    color = 'rgb(29, 161, 242)';
    backgroundColor = 'rgb(0, 0, 0)';
    hoverBackgroundColor = 'rgba(29, 161, 242, 0.1)';
  }

  return (
    <StyledRoundedButton
      variant={variant}
      disabled={disabled}
      color={color}
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
    >
      <span>
        {text}
      </span>
    </StyledRoundedButton>
  );
};
