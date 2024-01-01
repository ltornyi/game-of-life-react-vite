import { useEffect, useState } from 'react';
import { Flex } from 'antd';

import styles from './App.module.css'
import { LifeGrid } from './components/grid/LifeGrid';
import { createEmptyGrid, iterate } from './utils/grid-utils';
import { WellKnownPattern, wellKnownHandlers } from './utils/pattern-constructors';
import { ControlPanel } from './components/controlpanel/ControlPanel';

const App = () => {
  const sizeX = 60;
  const sizeY = 30;

  const [grid, setGrid] = useState(createEmptyGrid(sizeX,sizeY));
  const [running, setRunning] = useState(false);
  const [updateFrequency, setUpdateFrequency] = useState(100);

  const cellChangeHandler = (x: number, y: number, newValue: boolean) => {
    if (!running) {
      setGrid((prevGrid) => {
        const newGrid = [...prevGrid];
        newGrid[x][y] = newValue;
        return newGrid;
      })
    }
  }

  const toggleRunning = () => setRunning(!running)

  useEffect(() => {
    const oneIteration = () => {
      const newGrid = iterate(grid);
      setGrid(newGrid)
    };

    let intervalId: number;

    if (running) {
      intervalId = setInterval(oneIteration, updateFrequency * 5);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [running, grid, updateFrequency]);

  const initWellKnownPattern = (pattern: WellKnownPattern) => {
    const constructor = wellKnownHandlers.get(pattern);
    if (constructor) {
      const newGrid = constructor(grid);
      setGrid(newGrid)
    }
  }

  const clearHandler = () => {
    setGrid(createEmptyGrid(sizeX, sizeY))
  }

  return (
    <Flex vertical justify='space-between' align='center' component={'main'} className={styles.container}>
      <LifeGrid grid={grid} running={running} cellChangeHandler={cellChangeHandler}></LifeGrid>
      <ControlPanel
        updateFrequencyMin={1}
        updateFrequencyMax={200}
        updateFrequency={updateFrequency}
        updateFrequencyChange={setUpdateFrequency}
        initWellKnownPattern={initWellKnownPattern}
        clearHandler={clearHandler}
        running={running}
        toggleRunning={toggleRunning}>
      </ControlPanel>
    </Flex>
  )
}

export default App
