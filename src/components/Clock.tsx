import React from 'react';

interface State {
  currentTime: string,
}

interface Props {
  clockName: string,
}

function getCurrentDate() {
  return new Date().toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  state = {
    currentTime: getCurrentDate(),
  };

  clockTimerId = 0;

  componentDidMount() {
    this.clockTimerId = window.setInterval(() => {
      this.setState({
        currentTime: getCurrentDate(),
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    // eslint-disable-next-line no-console
    console.info(this.state.currentTime);

    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.clockTimerId);
  }

  render() {
    const { currentTime } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime}
        </span>
      </div>
    );
  }
}
