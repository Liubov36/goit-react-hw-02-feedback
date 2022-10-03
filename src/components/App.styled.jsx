import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 768px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  padding: ${props => props.theme.spacing[5]}px;
  margin: ${props => props.theme.spacing[0]}px auto;
  border: 1px solid rgb(56, 16, 107);
  box-shadow: 0px 2px 10px rgb(101, 91, 233);
`;