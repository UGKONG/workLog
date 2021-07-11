import React, { useContext } from 'react';
import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../../../App';

const Log = ({ logData }) => {

  const _context = useContext(Context);
  
  return (
    <LogLi>
      <div>{ logData?.id }</div>
      <div>{ logData?.date }</div>
      <div>{ logData?.title }</div>
      <div>{ logData?.category }</div>
      <div>
        {_context.userList.find(
          x => x.sq === logData?.user
        )?.name ?? '정보없음'}
      </div>
      <div>
        {
          logData.reference &&
          logData?.reference.map((data, idx) => {
            return (
              <FontAwesomeIcon 
                key={ idx }
                icon={ faUser }
                style={{
                    fontSize: '18px',
                    borderRadius: '50%',
                    width: '26px',
                    height: '26px',
                    padding: '6px',
                    color: '#fff',
                    marginRight: '-8px',
                    border: '1px solid #fff',
                    backgroundColor: _context.colorList[
                      _context.userList.find(
                        x => x.sq === data
                      )?.color ?? 0
                    ]
                }}
                title={
                  _context.userList.find(
                    x => x.sq === data
                  )?.name ?? '정보없음'
                }
              />
            )
          })
        }</div>
    </LogLi>
  )
}

export default Log;

const LogLi = Styled.li`
  display: flex;
  align-items: center;
  div:nth-of-type(1) {width: 8%;}
  div:nth-of-type(2) {width: 12%;}
  div:nth-of-type(3) {width: 30%;}
  div:nth-of-type(4) {width: 15%;}
  div:nth-of-type(5) {width: 15%;}
  div:nth-of-type(6) {width: 20%;}
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