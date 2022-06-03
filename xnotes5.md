# Install Storybook in existing repo v5.0.11

Interactive documentation
  - https://storybooks-official.netlify.com/?path=/story/ui-panel--default

## Install Storybook
---
  - npx -p @storybook/cli sb init
    - Prior version
      - npx -p @storybook/cli@5.0.11 sb init
      - (from npm: npm i @storybook/cli@5.0.11)

## Create Stories
---

### Static info (like images)
  - In package.json under scripts, change storybook to:
    - "storybook": "start-storybook -p 6006 -s ./Images"
    - -s stands for the static folder
    - When making changes to script, must restart storybook
      - npm run storybook

### Organizing Stories: 
  storiesOf("Components | Banners/Major", module)
    Pipe creates header the story will fall under - HeiarchyRootSeparator
    Folder format to organize into folders - HeirarchySeparator

#### Parts of a Story
  - storiesOf
    - grouping of the stories
  - add
    - add individual stories
  - ()=> {}
    - Function that returns component

## Add ons
---
- Affect how things behave
  - https://storybook.js.org/addons
- Decorators are wrapper components
- Panels need to be registred

### actions add on
- helps capture click events

###  "@storybook/addon-info"

- Shows info about the component. wrapper to show info
- Needs to be the first decorator added to work

```storiesOf("Builing Blocks | Button", module)
  .addDecorator(withInfo({
    inline: true
  }))
  .add('Call to Action', () => (
    <CallToAction label="Submit" onClick={action("button-click")}/>
  ))
  ```

To add to every component, set in config
  - addDecorator import

### "@storybook/addon-knobs"

- example in banner
- makes it possible to dynamically change the data thats on the screen
- need to register addon in storybook/addons since it creates a new panel
  - need to restart storybook after this change
- Knob types
  - Boolean, Number, Object, Select, Date, Files

### Override Configs
- using info addon in banner as example to override config settings

Config setting - global level setting
```
addDecorator(withInfo({
  inline: true
}));
```

Override config for all stories in group - group level setting
```
  storiesOf("Components | Banners/Major", module)
    .addParameters({
      info: {
        inline: false
      }
    })
  ```
  
  Override config for one story - story level setting
  ```
     .add("No Pictures", () => (
      <MinorBanner 
        title="Banner Title" 
        subtitle='Banner Subtitle' 
        body='Banner Body' 
      />
    ), {
      info: {
        inline: false
      }
    })
  ```

### Add README-esque info to components in md
```
storiesOf("Components | Banners/Major", module)
  .addParameters({
    info: {
      text: `
      ## Title of Info
      Important stuff to know`
    }
  })
  ```
#### Info Options
- Header and source, props tables, styles, max props 
- https://github.com/storybooks/storybook/tree/master/addons/info

#### Ways to override configs
- calling addParamters()
- passing in additional objects to add()

## Custom Add-ons
---

- Behind the scenes for all addons that use a panel
  - Select story
  - Event fired
  - panel added
  - select panel, event fired

## Creating custom See Also panel

- Panel, Register, Decorator, Parameters

1) Create a panel that the metadata can be displayed in
- Create folder seeAlso, file register.js
- in addons.js register newly created register file
- restart storybook
2) Display data in panel
- in register file create state, set data, mount and unmount component data
- edit render to return state data
- Make use of component by creating a decorator
  - create seeAlso/index.js
3) Using the new add on
- in stories file (banner) import new addon
- add decorator to relevant group
- add story changed and clear state to manage state between panels

#### Required API Calls
  - Get Channel - provides channel to communicate btwn story and storybook manager
  - Register - provides storybook api to addon
  - addPanel - creates new panel

#### Additional Functions
- selctStory - select specific story
- selectInCurrentKind - select within current group
- setQueryParams / getQueryParams - temp storage for addon
- onStory(fn) - called with kind and story to do certain actions