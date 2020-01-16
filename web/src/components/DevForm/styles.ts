import styled from 'styled-components'

export const InputBlock = styled.div`
  & + & {
    margin-top: 20px;
  }

  label {
    color: #acacac;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  input {
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: #666;
    border: 0;
    border-bottom: 1px solid #eee;
  }
`

export const InputGroup = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;

  div {
    margin-top: 0 !important;
  }
`

export const Button = styled.button`
  width: 100%;
  border: 0;
  margin-top: 30px;
  background-color: #7d40e7;
  border-radius: 2px;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #6931ca;
  }
`
