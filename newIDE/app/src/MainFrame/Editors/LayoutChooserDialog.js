import { Trans } from '@lingui/macro';
import React, { Component } from 'react';
import FlatButton from '../../UI/FlatButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Dialog from '../../UI/Dialog';
import { mapFor } from '../../Utils/MapFor';
import Text from '../../UI/Text';

export default class LayoutChooserDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLayoutName: props.layoutName,
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.layoutName !== this.props.layoutName) {
      this.setState({
        selectedLayoutName: newProps.layoutName,
      });
    }
  }

  chooseLayout(layoutName) {
    this.setState({
      selectedLayoutName: layoutName,
    });
  }

  render() {
    const actions = [
      <FlatButton
        key="cancel"
        label={<Trans>Cancel</Trans>}
        primary={false}
        onClick={this.props.onClose}
      />,
      <FlatButton
        key="choose"
        label={<Trans>Choose</Trans>}
        primary={true}
        keyboardFocused={true}
        onClick={() => this.props.onChoose(this.state.selectedLayoutName)}
        disabled={!this.state.selectedLayoutName}
      />,
    ];

    const { project } = this.props;
    const { selectedLayoutName } = this.state;
    const layoutNames = mapFor(0, project.getLayoutsCount(), i => {
      return project.getLayoutAt(i).getName();
    });

    return (
      <Dialog
        actions={actions}
        open={this.props.open}
        title={this.props.title}
        onRequestClose={this.props.onClose}
        autoScrollBodyContent={true}
        contentStyle={{ width: '350px' }}
      >
        {this.props.helpText && <Text>{this.props.helpText}</Text>}
        <RadioButtonGroup
          name="associated-layout"
          valueSelected={selectedLayoutName}
          onChange={(e, layoutName) => this.chooseLayout(layoutName)}
        >
          {layoutNames.map(name => (
            <RadioButton value={name} label={name} key={name} />
          ))}
        </RadioButtonGroup>
      </Dialog>
    );
  }
}
