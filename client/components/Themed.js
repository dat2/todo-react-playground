import React from 'react';

export default function(Component) {
  class Themed extends React.Component {
    render() {
      const { theme } = this.context;
      return <Component {...this.props} theme={theme} />;
    }
  }
  Themed.contextTypes = {
    theme: React.PropTypes.string
  };

  return Themed;
}
