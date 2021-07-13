// import React, { useCallback, useContext, useRef } from 'react';
// import Styled from 'styled-components';
// import { Context } from './../../App';
// import { $usePost } from './../../hook/useFirebase';
// import { $useStringDate } from '../../hook';

// const AddWorkLogModal = ({getData, setData}) => {

//   const titleInput = useRef(null);
//   const categoryInput = useRef(null);
//   const contentsInput = useRef(null);
//   const _context = useContext(Context);

//   const _POST_WORKLOG = useCallback(() => {
//     let address,color,email,gender,id,join_dt,name,phone,pw,sq,terms;
//     address = categoryInput.current.value;
//     color = $useStringDate(new Date());
//     email = getData.length === 0 ? 20001 : getData[getData.length - 1].id + 1;
//     gender = []; // 임시
//     id = titleInput.current.value;
//     join_dt = contentsInput.current.value;
//     name = 10001; // 임시
//     phone = '';
//     pw = '';
//     sq = '';
//     terms = '';

//     if (title === '') {
//       titleInput.current.focus();
//       return;
//     }
//     if (contents === '') {
//       contentsInput.current.focus();
//       return;
//     }

//     $usePost(`${_context.DB_URL}/workLog/userList.json`, {
//       address: address, 
//       color: color, 
//       email: email, 
//       gender: gender, 
//       id: id, 
//       join_dt: join_dt, 
//       name: name, 
//       phone: phone, 
//       pw: pw, 
//       sq: sq, 
//       terms: terms,
//     }, ({data}) => {
//       console.log(data);
//       setData((before) => {
//         let _temp = [...before];
//         _temp.push(data);
//         return _temp;
//       });
//       const modalOpen = _context.setModalOpen;
//       modalOpen(false);
//     });
//   }, [_context.DB_URL, _context.setModalOpen, getData, setData]);

//   return (
//     <>
//       <Line>
//         <LineTitle htmlFor="categoryInput">보고종류: </LineTitle>
//         <CategoryInput id="categoryInput" ref={categoryInput}>
//           <option value="일일업무">일일업무</option>
//           <option value="주간업무">주간업무</option>
//           <option value="월간업무">월간업무</option>
//         </CategoryInput>
//       </Line>
//       <Line>
//         <LineTitle htmlFor="titleInput">제목: </LineTitle>
//         <TitleInput id="titleInput" ref={titleInput} type="text" />
//       </Line>
//       <Line>
//         <LineTitle htmlFor="contentsInput">내용: </LineTitle>
//         <ContentsInput id="contentsInput" ref={contentsInput} type="text" />
//       </Line>
//       <SubmitBtn
//         mainColor={_context.mainColor}
//         onClick={_POST_WORKLOG}
//       >등 록</SubmitBtn>
//     </>
//   )
// }

// export default AddWorkLogModal;

// const Line = Styled.div`
//   padding: 10px 0;
// `;
// const LineTitle = Styled.label`
//   width: 70px;
//   height: 100%;
//   font-size: 14px;
//   display: inline-flex;
//   align-items: center;
//   justify-content: space-between;
// `;
// const inputCommon = () => `
//   height: 30px;
//   border: 1px solid #ccc;
//   border-radius: 2px;
//   color: #666;
//   letter-spacing: 1px;
//   &:focus {
//     color: #111;
//   }
// `;
// const CategoryInput = Styled.select`
//   ${inputCommon()}
//   width: 200px;
//   padding: 0 3px;
// `;
// const TitleInput = Styled.input`
//   ${inputCommon()}
//   width: 350px;
//   padding: 0 6px;
// `;
// const ContentsInput = Styled.textarea`
//   ${inputCommon()}
//   width: 100%;
//   height: 446px;
//   margin-top: 10px;
//   resize: none;
//   padding: 8px 10px;
//   line-height: 20px;
// `;
// const SubmitBtn = Styled.button`
//   padding: 4px 12px;
//   letter-spacing: 1px;
//   color: #fff;
//   border: none;
//   background-color: ${props => props.mainColor};
//   float: right;
// `;