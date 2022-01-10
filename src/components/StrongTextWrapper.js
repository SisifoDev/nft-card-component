import styled from "styled-components";

export const StrongTextWrapper = styled.div`
  display: flex;
  gap: 8px;
  color: ${(props) =>
    props.isCyan ? props.theme.cyanVariant : props.theme.white};
`;
