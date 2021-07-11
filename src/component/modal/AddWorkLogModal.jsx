import React, { useCallback, useContext, useRef } from 'react';
import Styled from 'styled-components';
import { Context } from './../../App';
import { $usePost } from './../../hook/useFirebase';
import { $useStringDate } from '../../hook';

const AddWorkLogModal = ({getData, setData}) => {

  const titleInput = useRef(null);
  const categoryInput = useRef(null);
  const contentsInput = useRef(null);

  const _context = useContext(Context);

  const _POST_WORKLOG = useCallback(() => {
    let category,date,id,reference,title,contents,user;
    category = categoryInput.current.value;
    date = $useStringDate(new Date());
    id = getData.length === 0 ? 20001 : getData[getData.length - 1].id + 1;
    reference = []; // 임시
    title = titleInput.current.value;
    contents = contentsInput.current.value;
    user = 10001; // 임시

    $usePost(`${_context.databaseURL}/workLog/worklog.json`, {
      category: category,
      date: date,
      id: id,
      reference: reference,
      title: title,
      contents: contents,
      user: user
    }, ({data}) => {
      console.log(data);
      setData((before) => {
        let _temp = [...before];
        _temp.push(data);
        return _temp;
      });
      _context.setModalOpen(false);
    });
  }, [_context, getData, setData]);

  return (
    <>
      <Line>
        보고종류:
        <select ref={categoryInput}>
          <option value="일일업무">일일업무</option>
          <option value="주간업무">주간업무</option>
          <option value="월간업무">월간업무</option>
        </select>
      </Line>
      <Line>
        제목: <input ref={titleInput} type="text" />
      </Line>
      <Line>
        내용: <input ref={contentsInput} type="text" />
      </Line>
      <button onClick={_POST_WORKLOG}>등록</button>

    </>
  )
}

export default AddWorkLogModal;

const Line = Styled.div`
  padding: 10px 0;
`;