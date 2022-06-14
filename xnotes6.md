# Upgrade to Storybook 6

```
npx sb@latest upgrade
```

Create main.js to combine config.js, addons.js and presets.js into:

https://medium.com/storybookjs/declarative-storybook-configuration-49912f77b78

new install
```
npx -p @storybook/cli sb init
```

scss support
```
// Install storybook scss support
npm install --save dev @storybook/preset-scss

// Install loaders
npm install --save-dev style-loader@2.0.0 sass-loader@10.0.0 css-loader postcss

// install ux storybook config
npm install @ux/storybook-config --save-dev

// exclude .storybook/preview-head.html from tartufo.toml


// Modidfy main.js
"addons": [
    '@ux/storybook-config',
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
           modules: true
        }
      }
    },
  ],
```

Install webpack dependencies if getting webpack errors
```
npm i -D @storybook/builder-webpack4 "@storybook/manager-webpack4" 
```


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