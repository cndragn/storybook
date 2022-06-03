# Upgrade to Storybook 6

## Upgrade from storiesOf to Component Story Format (CSF)
- A story is a code snippet that renders an example of a component in a specific state.
 
 ```
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
```
## Styling and Customization

- Create preview.js in .storybook, add css imports there
- Theming
  - Theme settings file aka crfTheme.js
  - create manager.js in .storybook
  - https://storybook.js.org/docs/react/configure/theming

## Actions

- register addons in main.js

## Decorators

- 