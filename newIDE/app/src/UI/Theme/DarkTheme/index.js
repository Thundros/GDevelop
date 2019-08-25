// @flow
import { type Theme } from '../DefaultTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { createMuiTheme, darken, lighten } from '@material-ui/core/styles';
import './Mosaic.css';
import './EventsSheet.css';
import 'react-virtualized/styles.css'; // Styles for react-virtualized Table
import './Table.css';
import './Markdown.css';

const almostWhite = '#EEE';
const lightWhite = '#DDD';
const notSoWhite = '#CCC';
const gdevelopDarkBlue = '#3c4698';
const blue = '#2c6bf5';

const systemSelectionColor = '#4c92ff'; //OS X selection

/**
 * The background color of the main window
 */
const backgroundColor = '#252525';

/**
 * The background color of the "papers", "dialogs", etc...
 */
const canvasColor = '#303030';

const v0Theme = {
  fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', //OS X font
  palette: {
    primary1Color: blue,
    primary2Color: blue,
    accent1Color: almostWhite,
    canvasColor,
    textColor: lightWhite,
    secondaryTextColor: notSoWhite,
    alternateTextColor: '#444',
    borderColor: '#444444',
    disabledColor: '#888888',
    pickerHeaderColor: '#444444',
    clockCircleColor: '#444444',
  },
  avatar: {
    backgroundColor: 'transparent',
  },
  tabs: {
    backgroundColor: gdevelopDarkBlue,
    textColor: lightWhite,
    selectedTextColor: almostWhite,
  },
  toolbar: {
    backgroundColor: backgroundColor,
    separatorColor: '#303030',
    menuHoverColor: systemSelectionColor,
    hoverColor: systemSelectionColor,
  },
  menuItem: {
    dataHeight: 24,
    height: 32,
    hoverColor: systemSelectionColor,
    selectedTextColor: systemSelectionColor,
    padding: 8,
  },
  appBar: {
    color: gdevelopDarkBlue,
    textColor: almostWhite,
  },
  button: {
    height: 32,
    iconButtonSize: 24,
  },
  snackbar: {
    actionColor: blue,
  },
  stepper: {
    textColor: lightWhite,
  },
  raisedButton: {
    primaryTextColor: notSoWhite,
  },

  // GDevelop specific variables:
  closableTabs: {
    backgroundColor: backgroundColor,
    textColor: '#878787',
    selectedBackgroundColor: gdevelopDarkBlue,
    selectedTextColor: almostWhite,
    width: 200,
    height: 32,
    closeButtonWidth: 24,
  },
  imageThumbnail: {
    selectedBorderColor: systemSelectionColor,
  },
  list: {
    itemsBackgroundColor: '#494949',
  },
  listItem: {
    groupBackgroundColor: backgroundColor,
    groupTextColor: '#AAA',
    deprecatedGroupTextColor: '#888',
    separatorColor: '#303030',
    selectedBackgroundColor: systemSelectionColor,
    selectedTextColor: almostWhite,
    errorTextColor: '#ff2e16',
    warningTextColor: '#ffb032',
    selectedErrorBackgroundColor: '#ff2e16',
    selectedWarningBackgroundColor: '#ffb032',
  },
  emptyMessage: {
    shadowColor: '#000',
  },
  logo: {
    src: 'res/GD-logo.png',
  },
  mosaicRootClassName: 'mosaic-gd-dark-theme', // See Mosaic.css
  eventsSheetRootClassName: 'gd-events-sheet-dark-theme', // See EventsSheet.css
  tableRootClassName: 'gd-table-dark-theme', // See Table.css
  markdownRootClassName: 'gd-markdown-dark-theme', // See Markdown.css
  gdevelopIconsCSSFilter: '',
};

const muiTheme = createMuiTheme({
  palette: {
    common: { black: 'rgba(110, 42, 42, 1)', white: '#fff' },
    background: {
      paper: canvasColor,
      default: backgroundColor,
    },
    primary: {
      light: lighten(blue, 0.05),
      main: blue,
      dark: darken(blue, 0.05),
      contrastText: '#fff',
    },
    secondary: {
      light: lighten(almostWhite, 0.05),
      main: almostWhite,
      dark: darken(almostWhite, 0.05),
      contrastText: '#000',
    },
    // Check the default values for these:
    // error: {
    //   light: '#e57373',
    //   main: '#f44336',
    //   dark: '#d32f2f',
    //   contrastText: '#fff',
    // },
    text: {
      primary: lightWhite,
      secondary: notSoWhite,
      disabled: '#888888',
      hint: notSoWhite,
    },
  },
});


const theme: Theme = {
  muiV0Theme: getMuiTheme(v0Theme),
  muiTheme,
};

export default theme;
