import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #778beb, #546de5);
  flex-direction: column;
`;

const Box = styled(motion.div)`
  height: 300px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  gap: 10px;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 40px;
`;

const Button = styled(motion.button)`
  margin-top: 50px;
  background-color: white;
  border: 0;
  width: 65px;
  height: 35px;
  border-radius: 5px;
  font-weight: bold;
`;

const boxVariants = {
  initial: (i: string) => ({
    originX: i === '1' || i === '3' ? 1 : 0,
    originY: i === '1' || i === '2' ? 1 : 0,
  }),
  hover: {
    scale: 1.1,
    cursor: 'pointer',
  },
};

const btnVariants = {
  initial: {
    opacity: 0,
  },
  animate: (switched: boolean) => ({
    scale: switched ? 1.3 : 1,
    color: switched ? '#eb2f06' : '#1e3799',
    opacity: 1,
  }),
  hover: { cursor: 'pointer' },
};

function App() {
  const [id, setId] = useState<null | string>(null);
  const [switched, setSwitched] = useState<Boolean>(false);
  const toggleSwitch = () => setSwitched((prev) => !prev);

  return (
    <Wrapper>
      <Grid>
        {['1', '2', '3', '4'].map((i) => (
          <Box onClick={() => setId(i)} key={i} layoutId={i} variants={boxVariants} custom={i} initial="initial" whileHover="hover">
            {i === '2' && (!switched ? <Circle layoutId="circle" /> : null)}
            {i === '3' && (switched ? <Circle layoutId="circle" /> : null)}
          </Box>
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            animate={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
          >
            <Box layoutId={id} style={{ width: 400, height: 200, backgroundColor: 'white' }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
      <Button onClick={toggleSwitch} custom={switched} variants={btnVariants} initial="initial" animate="animate" whileHover="hover">
        Switch
      </Button>
    </Wrapper>
  );
}

export default App;
