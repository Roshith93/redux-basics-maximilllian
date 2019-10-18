import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import {
  increment,
  decrement,
  addition,
  subtraction,
  reset,
  storeResults,
  deleteResults
} from "../../store/actions";
class Counter extends Component {
  render() {
    let results =
      this.props.results &&
      this.props.results.map(result => {
        return (
          <p key={result.id} onClick={this.props.delete.bind(this, result.id)}>
            {result.count}
          </p>
        );
      });
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl label="Increment" clicked={this.props.increment} />
        <CounterControl label="Decrement" clicked={this.props.decrement} />
        <CounterControl label="Add 5" clicked={this.props.addition} />
        <CounterControl label="Subtract 5" clicked={this.props.subtraction} />
        <CounterControl label="Reset" clicked={this.props.reset} />
        <CounterControl
          label="CounterResults"
          clicked={this.props.store.bind(this, this.props.counter)}
        />
        {results}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter.counter,
    results: state.result.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment(1)),
    decrement: () => dispatch(decrement(1)),
    addition: () => dispatch(addition(5)),
    subtraction: () => dispatch(subtraction(5)),
    reset: () => dispatch(reset()),
    store: id => dispatch(storeResults(id)),
    delete: id => dispatch(deleteResults(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
