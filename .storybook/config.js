import { addParameters, configure, addDecorator } from '@storybook/react'; // addParamters for theming
import {withInfo} from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import crfTheme from './crfTheme';
import "../bootstrap-grid.css";
import "../bootstrap-reboot.min.css";
import "../bootstrap.css";
import "../main.css";

addParameters({
  options: {
    theme:crfTheme
  }
});

addDecorator(withInfo({
  inline: true
}));

addDecorator(withKnobs)

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
