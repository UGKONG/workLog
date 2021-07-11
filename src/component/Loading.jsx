import Styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <LoadingLi>
      <Circle>
        <InCircle />
      </Circle>
    </LoadingLi>
  )
}

export default Loading;

const CircleRotate = keyframes`
  to {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
`;
const LoadingLi = Styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  letter-spacing: 2px;
  color: #777;
  font-size: 14px;
`;
const Circle = Styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
  background: conic-gradient(#fff, #338f6c80 10% 30%, #fff);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${CircleRotate} 1s infinite linear;
`;
const InCircle = Styled.div`
  width: 90px;
  height: 90px;
  background: #fff;
  border: none;
  border-radius: 50%;
`;