import React, { useContext, useEffect } from 'react';
import Styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { Home, WorkLog, UserList, Support, Setting } from './contents/';
import { Context } from '../App';

const Contents = ({ activeMenu }) => {

  const _context = useContext(Context);

  useEffect(() => console.log(_context));

  return (
    <Main>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/WorkLog'} component={WorkLog} />
        <Route path={'/UserList'} component={UserList} />
        <Route path={'/Support'} component={Support} />
        <Route path={'/Setting'} component={Setting} />
        <Route component={() => <>페이지가 없습니다.</>} />
      </Switch>
    </Main>
  )
}

const Main = Styled.div`
  width: calc(100% - 200px);
  height: 100%;
  float: left;
  background: #fff;
  border-radius: 20px;
  padding: 14px;
  overflow: hidden;
`;

export default Contents;