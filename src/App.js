import React, { useState, useCallback, useEffect, useContext } from 'react';
import Styled from 'styled-components';
import { SideMenu, Contents } from './component';
import { $useArray } from './hook/';
import { faHome, faUser, faClipboard, faBell, faCogs } from '@fortawesome/free-solid-svg-icons';
import { $useGet } from './hook/useFirebase';

export const Context = React.createContext({});
const databaseURL = `https://sanguk-db-default-rtdb.firebaseio.com`;
const colorList = ['#B71C1C', '#FF6600', '#FFD600', '#00C853', '#338f6c', '#0099FF', '#6200EA', '#FF0084', '#3E2723', '#212121'];

const Component = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [mainColor, setMainColor] = useState('#338f6c');
  const [programName, setProgramName] = useState('Work Station');
  const [menus, setMenus] = useState({
    main: [
      {id: 0, name: 'Home', icon: faHome, link: '/'},
      {id: 1, name: 'Work Log', icon: faClipboard, link: '/WorkLog'},
      {id: 2, name: 'User List', icon: faUser, link: '/UserList'}
    ],
    sub: [
      {id: 3, name: 'Support', icon: faBell, link: '/Support'},
      {id: 4, name: 'Setting', icon: faCogs, link: '/Setting'}
    ]
  });
  const [userList, setUserList] = useState([]);

  const _GET_USERLIST = useCallback(() => {
    $useGet(`${databaseURL}/workLog/userList.json`, ({data}) => {
      setUserList($useArray(data));
    })
  }, []);

  useEffect(() => {
    _GET_USERLIST();
  }, [_GET_USERLIST]);

  return (
    <App mainColor={mainColor}>
      <Context.Provider
        value={{
          databaseURL, colorList,
          userList, setUserList,
          menus, setMenus,
          mainColor, setMainColor,
          modalOpen, setModalOpen,
          programName, setProgramName,
        }}
      >
        <title id="title">{programName}</title>
        <SideMenu programName={programName} />
        <Contents />
      </Context.Provider>
    </App>
  );
  
}

export default Component;

// Style
const App = Styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  background: ${(props) => props.mainColor};
  border-radius: 26px;
`;
