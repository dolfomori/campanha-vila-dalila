import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Paper } from '@material-ui/core';
import Select from 'react-select';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  /* grid-template-columns: '1fr'; */
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  margin: 5px 10px;

  ${props =>
    !props.act &&
    css`
      p {
        font-size: 20px;
        text-align: center;
        max-width: 350px;
      }
    `}
`;

export const CalendarIcon = styled(FontAwesomeIcon)`
  margin: 0 5px;
  color: #3cb371;
`;

export const Container = styled(Paper)`
  padding: 5px;
`;

export const Search = styled.div`
  display: flex;
  margin: 7px;
  align-items: center;
  input {
    width: 80%;
    padding: 7px;
    margin: 7px;
    border-radius: 5px;
  }
  button {
    background-color: red;
    padding: 7px;
    border-radius: 5px;
    height: 34px;
  }
`;
