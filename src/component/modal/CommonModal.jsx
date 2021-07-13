import React, { useContext } from 'react';
import Styled from 'styled-components';
import { Context } from '../../App';

const CommonModal = ({ width = 400, height = 200, title = '무제', modal = <></>, getData, setData }) => {
  let Modal = modal;
  const _context = useContext(Context);

  const ModalClose = () => {
    _context.setModalOpen(false)
  }
  
  if (!_context.modalOpen) {
    return <></>;
  }

  return (
    <>
      <BlackBg onClick={ ModalClose } />
      <Pop width={width} height={height}>
        <Title bgColor={_context.mainColor}>
          { title }
          <Xbtn onClick={ ModalClose }/>
        </Title>
        <Contents>
          <Modal getData={getData} setData={setData} />
        </Contents>
      </Pop>
    </>
  )
}

export default CommonModal;

const BlackBg = Styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #00000050;
  z-index: 5;
`;
const Pop = Styled.div`
  width: ${({width}) => width + 'px'};
  height: ${({height}) => height + 'px'};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  z-index: 10;
`;
const Title = Styled.h2`
  font-size: 16px;
  height: 44px;
  padding: 0 10px;
  color: #fff;
  font-weight: 500;
  background: ${({bgColor}) => bgColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const degDir = (deg) => `
  content: '';
  width: 100%;
  height: 2px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${deg}deg);
`;

const Xbtn = Styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  cursor: pointer;

  &::before {
    ${degDir(45)}
  }
  &::after {
    ${degDir(-45)}
  }


  &:hover::before, &:hover::after {
    background-color: #aaa;
  }
  &:active::before, &:active::after {
    background-color: #888;
  }
`;
const Contents = Styled.div`
  width: 100%;
  height: calc(100% - 44px);
  padding: 10px;
  display: block;
  position: relative;
  overflow: auto;
`;