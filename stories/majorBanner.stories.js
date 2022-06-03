import React from 'react';
import {storiesOf} from '@storybook/react';
import MajorBanner from '../components/major.banner';
import MinorBanner from '../components/minor.banner';
import { text } from '@storybook/addon-knobs';
import withSeeAlso from '../seeAlso/index';

export default { title: 'Components/Banner/Major' };

export const withOnlyTitle = () => {
  return(
  <MajorBanner 
    title="Banner Title" 
    photo="People Outdoors/shutterstock_116403520.jpg"
  />
  )
}

export const withAllTextOptions = () => {
  const title = text('Title', 'Banner Title') // knobs
    return (
    <MajorBanner 
      title={title}
      photo="People Outdoors/shutterstock_116403520.jpg" 
      subtitle='Banner Subtitle' 
      body='Banner Body'/>
    )
}

// storiesOf("Components | Banners/Major", module)
//   .addDecorator(withSeeAlso)
//   .addParameters({
//     info: {
//       text: `
//       ## Title of Info
//       Important stuff to know`,
//     },
//     seeAlso: {
//       label: 'Minor Banner',
//       story: 'Components | Banners/Minor'
//     }
//   })
//   .add("With Only Title", () => (
//     <MajorBanner 
//       title="Banner Title" 
//       photo="People Outdoors/shutterstock_116403520.jpg"
//     />
//   ))
//   .add("With All Text Options", () =>{
//     const title = text('Title', 'Banner Title') // knobs
//     return (
//     <MajorBanner 
//       title={title}
//       photo="People Outdoors/shutterstock_116403520.jpg" 
//       subtitle='Banner Subtitle' 
//       body='Banner Body'/>
//   )})