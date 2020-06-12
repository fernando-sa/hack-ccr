import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Example from '../components/Example'
import styles from '../../sass/index.module.sass'

export default class Index extends Component {
  componentDidMount() {
    fetch('/api/teste')
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render(){
    return (
      <div className={styles.page}>
        <h1>Page Title</h1>
        <Example />
      </div>
    );
  }
}
if (document.getElementById('main')) {
  ReactDOM.render(<Index />, document.getElementById('main'));
}
