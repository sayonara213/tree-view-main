import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import './app.scss';

import { FileSystemProvider } from '../components/provider/file-system-provider';
import { Main } from '../screens/main/main';

export const App: React.FC = () => {
  return (
    <div className='App'>
      <FileSystemProvider>
        <DndProvider backend={HTML5Backend}>
          <Main />
        </DndProvider>
      </FileSystemProvider>
    </div>
  );
};
