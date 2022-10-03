import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Option = styled.li`
  margin-bottom: 30px;
  margin-right: 30px;
  &:last-child {
    margin-bottom: 0;
    margin-right: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover,
  &:focus {
    border: solid;
    border-color: blue;
  }
`;