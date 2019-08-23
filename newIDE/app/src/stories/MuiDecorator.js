// @flow
import React from 'react';
import V0MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ThemeProvider } from '@material-ui/styles';
import defaultTheme from '../UI/Theme/DefaultTheme';
import { type StoryDecorator } from '@storybook/react';

const muiDecorator: StoryDecorator = (story, context) => (
  <V0MuiThemeProvider muiTheme={defaultTheme.muiV0Theme}>
    <ThemeProvider theme={defaultTheme.muiTheme}>
      {story(context)}
    </ThemeProvider>
  </V0MuiThemeProvider>
);

export default muiDecorator;
