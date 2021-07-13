import React, { useState, useContext, useCallback, useEffect } from 'react';
import Styled from 'styled-components';
import Loading from '../Loading';
import { Context } from './../../App';
import { $useArray } from './../../hook';
import { $useGet } from './../../hook/useFirebase';
import CommonModal from '../modal/CommonModal';
import Log from './UserList/Log';
import AddUserModal from '../modal/AddUserModal';

const UserList = () => {

    const _context = useContext(Context);
    const [loading, setLoading] = useState(true);

    const _GET_USERLIST = useCallback(() => {
        const _url = _context.DB_URL;
        $useGet(`${_url}/workLog/userList.json`, ({data}) => {
            const fn = _context.setUserList;
            fn($useArray(data));
          setLoading(false);
        })
    }, [_context.DB_URL, _context.setUserList]);
    
    const addBoardBtnClick = useCallback(() => {
      const _fn = _context.setModalOpen;
      _fn(true);
    }, [_context.setModalOpen]);
    

    useEffect(() => {
      _GET_USERLIST();
    }, [_GET_USERLIST]);


    return (
      <>
        <CommonModal
          width={600}
          height={700}
          title={'사용자 추가'} 
          modal={AddUserModal} 
          getData={_context.userList}
          setData={_context.setUserList} 
        />
        <Title>User List <AddBtn onClick={addBoardBtnClick}/></Title>
        <UserListHead>
          <div>CODE</div>
          <div>Name</div>
          <div>Id</div>
          <div>Phone</div>
          <div>Gender</div>
          <div>email</div>
          <div>Address</div>
          <div>Join-Date</div>
        </UserListHead>
        <LogListBody>
          { 
            loading ? <Loading /> : 
            _context.userList.map((data) => <Log logData={ data } key={ data.id } />)
          }
        </LogListBody>
      </>
    )
}

export default UserList;
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
const UserListHead = Styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #eee;
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