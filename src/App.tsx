import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #778beb, #546de5);
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: '100px' },
};

function App() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      'linear-gradient(135deg, rgba(184, 233, 148,1.0), rgba(120, 224, 143,1.0))',
      'linear-gradient(135deg, #778beb, #546de5)',
      'linear-gradient(135deg, rgba(229, 80, 57,1.0), rgba(235, 47, 6,1.0))',
    ]
  );
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin variants={boxVariants} />
    </Wrapper>
  );
}

export default App;
