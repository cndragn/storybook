import React from 'react';
import {storiesOf} from '@storybook/react';
import MajorBanner from '../components/major.banner';
import MinorBanner from '../components/minor.banner';
import { text } from '@storybook/addon-knobs';
import withSeeAlso from '../seeAlso/index';

export default { title: 'Components/Banner/Minor '};

export const noPictures = () => {
  return(
  <MinorBanner 
        title="Banner Title" 
        subtitle='Banner Subtitle' 
        body='Banner Body' 
      />)
}

export const withPictures = () => {
 return(
    <MinorBanner 
        title="Banner Title" 
        subtitle='Banner Subtitle' 
        body='Banner Body' 
        leftPhoto='Products/boots/shutterstock_66842440.jpg' 
        rightPhoto='Products/boots/shutterstock_1121278055.jpg'
      />)
}

  // storiesOf("Components | Banners/Minor", module)
  //   .add("No Pictures", () => (
  //     <MinorBanner 
  //       title="Banner Title" 
  //       subtitle='Banner Subtitle' 
  //       body='Banner Body' 
  //     />
  //   ))
  //   .add("With Pictures", () => (
  //     <MinorBanner 
  //       title="Banner Title" 
  //       subtitle='Banner Subtitle' 
  //       body='Banner Body' 
  //       leftPhoto='Products/boots/shutterstock_66842440.jpg' 
  //       rightPhoto='Products/boots/shutterstock_1121278055.jpg'
  //     />
  //     ))