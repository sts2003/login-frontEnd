import styled from "styled-components";

export const Wrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};

  display: flex;
  flex-direction: ${(props) => props.dr || `row`};
  align-items: center;
  justify-content: center;
`;

export const MainButton = styled.button`
  width: ${(props) => props.width || `150px`};
  height: ${(props) => props.height || `80px`};

  background: none;
  outline: none;
  cursor: pointer;
  border: 1px solid #0b0b0b;

  &:hover {
    background: #0b0b0b;
    color: #fff;
    border: 1px solid #fff;
  }
`;

export const TextInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height || `30px`};
  border: ${(props) => props.theme.border};
  padding: ${(props) => props.padding || props.theme.inputPadding};
  border-radius: ${(props) => props.theme.radius};
  transition: ${(props) => props.transition || props.theme.transition};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bgColor};
  &:focus {
    box-shadow: ${(props) => props.theme.boxShadow};
  }

  &:read-only:focus {
    box-shadow: none;
  }
`;
