import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  return (
    <Wrapper>
      <Box
        initial={{ scale: 0 }} // 초기 상태
        animate={{ rotate: 180, scale: 1 }} // 최종 상태
        transition={{
          delay: 0.5,
          type: 'spring',
          stiffness: 200, // 약간 뻣뻣하게
          damping: 5, // 뛰는 정도 (반동력) 0에 가까울수록 저항이 없음.
          bounce: 0.1,
        }}
      />
    </Wrapper>
  );
}

export default App;
