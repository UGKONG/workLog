import React, { useContext } from 'react';
import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../../../App';

const Log = ({ logData }) => {

  const _context = useContext(Context);
  
  return (
    <LogLi>
      <div>{ logData?.sq }</div>
      <div>{ logData?.name }</div>
      <div>{ logData?.id }</div>
      <div>{ logData?.phone }</div>
      <div>{ logData?.gender === 'male' ? '남자' : '여자'}</div>
      <div>{ logData?.email }</div>
      <div>{ logData?.address }</div>
      <div>{ logData?.join_dt }</div>
    </LogLi>
  )
}

export default Log;

const LogLi = Styled.li`
  display: flex;
  align-items: center;
  div:nth-of-type(1) {width: 8%;}
  div:nth-of-type(2) {width: 8%;}
  div:nth-of-type(3) {width: 14%;}
  div:nth-of-type(4) {width: 12%;}
  div:nth-of-type(5) {width: 10%;}
  div:nth-of-type(6) {width: 18%;}
  div:nth-of-type(7) {width: 20%;}
  div:nth-of-type(8) {width: 10%;}
  div {
    height: 100%;
    padding: 14px 0;
    font-size: 13px;
    color: #222;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 10px;
  }
`;