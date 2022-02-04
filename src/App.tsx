import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #778beb, #546de5);
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  width: 80px;
  height: 80px;
  background-color: rgba(120, 224, 143, 1);
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  return (
    <Wrapper onClick={toggleClicked}>
      <Box>{!clicked ? <Circle layoutId="circle" style={{ borderRadius: '40px', scale: 0.5 }} /> : null}</Box>
      <Box>{clicked ? <Circle layoutId="circle" style={{ borderRadius: 0, scale: 1 }} /> : null}</Box>
    </Wrapper>
  );
}

export default App;
