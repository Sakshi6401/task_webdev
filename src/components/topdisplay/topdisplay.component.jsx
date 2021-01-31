import React from "react";
import Showcase from '../showcase/showcase.component';
import ImageBlock from '../imageblock/imageblock.component';
import './topdisplay.style.css';

const TopDisplay = () => (
  <div className='top-display'>
    <Showcase />
    <ImageBlock />
  </div>
)

export default TopDisplay;