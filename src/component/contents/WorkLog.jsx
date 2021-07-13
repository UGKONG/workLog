import React, { useCallback, useContext, useEffect, useState } from 'react';
import Styled from 'styled-components';
import { Context } from '../../App';
import Log from './WorkLog/Log';
import Loading from '../Loading';
import { $useArray } from '../../hook';
import { $useGet } from '../../hook/useFirebase';
import CommonModal from '../modal/CommonModal';
import AddWorkLogModal from '../modal/AddWorkLogModal';

const WorkLog = () => {
  
  const _context = useContext(Context);
  const [workLog, setWorkLog] = useState([]);
  const [loading, setLoading] = useState(true);

  const _GET_WORKLOG = useCallback(() => {
    $useGet(`${_context.DB_URL}/workLog/worklog.json`, ({data}) => {
      setWorkLog($useArray(data));
      setLoading(false);
    })
  }, [_context.DB_URL]);

  const addBoardBtnClick = useCallback(() => {
    const fn = _context.setModalOpen;
    fn(true);
  }, [_context.setModalOpen]);

  useEffect(() => {
    _GET_WORKLOG();
  }, [_GET_WORKLOG]);

  return (
    <>
      <CommonModal
        width={600}
        height={700}
        title={'업무일지 작성'} 
        modal={AddWorkLogModal} 
        getData={workLog}
        setData={setWorkLog} 
      />
      <Title>Work Log Board <AddBtn onClick={addBoardBtnClick}/></Title>
      <LogListHead>
        <div>ID</div>
        <div>Date</div>
        <div>Title</div>
        <div>Category</div>
        <div>User</div>
        <div>Reference</div>
      </LogListHead>
      <LogListBody>
        { 
          loading ? <Loading /> : 
          workLog.map((data) => <Log logData={ data } key={ data.id } />)
        }
      </LogListBody>
    </>
  )
}

export default WorkLog;

const Title = Styled.h2`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Baloo Tammudu 2', cursive;
  border-bottom: 1px solid #eee;
  white-space: nowrap;
`;
const AddBtn = Styled.button`
  width: 30px;
  height: 30px;
  float: right;
  position: relative;
  border: none;
  border-radius: 4px;
  background-color: #338f6c;
  ::before {
    content: '';
    width: 60%;
    height: 2px;
    background-color: #fff;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ::after {
    content: '';
    width: 60%;
    height: 2px;
    background-color: #fff;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
  }
  :hover {background-color: #359773;}
  :active {background-color: #2e8162;}
`;
const LogListHead = Styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #eee;
  div:nth-of-type(1) {width: 8%;}
  div:nth-of-type(2) {width: 12%;}
  div:nth-of-type(3) {width: 30%;}
  div:nth-of-type(4) {width: 15%;}
  div:nth-of-type(5) {width: 15%;}
  div:nth-of-type(6) {width: 20%;}
  div {
    height: 100%;
    padding: 20px 0 10px;
    font-size: 12px;
    color: #555;
    letter-spacing: 1px;
  }
`;
const LogListBody = Styled.ul`
  width: 100%;
  height: calc(100% - 38px - 48px);
  overflow: auto;
`;
