import React from 'react';

// 1. Skapa klasskomponenten Counter
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.startValue || 0, // Om startValue inte skickas, sätt count till 0
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p> Antal Klick: {this.state.count}</p>
        <button onClick={this.incrementCount}>Öka</button>
      </div>
    );
  }
}

//Användning
<Counter title="Räknare" />;

export default Counter;
