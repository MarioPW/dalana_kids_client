import React from 'react';
import { ColorfulWord } from '../../utilities/ColorfulWord';

export const Dalana = () => {
  return (
    <div className="flex space-x-2">
      <ColorfulWord word="DALANA" size="text-6xl sm:text-8xl" />
      <span className="text-5xl text-blue-400 sm:text-6xl" style={{ fontFamily: 'Luckiest Guy', alignSelf: 'flex-end'}}>kids</span> 
    </div>
  );
};