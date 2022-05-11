import React from 'react';
import {storiesOf} from '@storybook/react';
import MajorBanner from '../components/major.banner';
import MinorBanner from '../components/minor.banner';
import { text } from '@storybook/addon-knobs';
import withSeeAlso from '../seeAlso/index';

storiesOf("Components | Banners/Major", module)
  .addDecorator(withSeeAlso)
  .addParameters({
    info: {
      text: `
      ## Title of Info
      Important stuff to know`,
    },
    seeAlso: {
      label: 'Minor Banner',
      story: 'Components | Banners/Minor'
    }
  })
  .add("With Only Title", () => (
    <MajorBanner 
      title="Banner Title" 
      photo="People Outdoors/shutterstock_116403520.jpg"
    />
  ))
  .add("With All Text Options", () =>{
    const title = text('Title', 'Banner Title') // knobs
    return (
    <MajorBanner 
      title={title}
      photo="People Outdoors/shutterstock_116403520.jpg" 
      subtitle='Banner Subtitle' 
      body='Banner Body'/>
  )})

  storiesOf("Components | Banners/Minor", module)
    .add("No Pictures", () => (
      <MinorBanner 
        title="Banner Title" 
        subtitle='Banner Subtitle' 
        body='Banner Body' 
      />
    ))
    .add("With Pictures", () => (
      <MinorBanner 
        title="Banner Title" 
        subtitle='Banner Subtitle' 
        body='Banner Body' 
        leftPhoto='Products/boots/shutterstock_66842440.jpg' 
        rightPhoto='Products/boots/shutterstock_1121278055.jpg'
      />
      ))