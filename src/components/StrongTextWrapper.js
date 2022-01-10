import styled from "styled-components";

export const StrongTextWrapper = styled.div`
  display: flex;
  gap: 8px;
  ${(props) =>
    props.variant === "isCyan"
      ? `color: ${props.theme.cyan}`
      : `color: ${props.theme.white}`};
`;
