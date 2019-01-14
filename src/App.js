import React, { Component } from 'react';
import './App.css';

/**
 * This assignment is just getting used to jsx and creating the layout of the app:
* - assigment:
*   - use the render lifecycle function and JSX in the class component App to:
*   - create the layout of the app in the app component.
*     - use css grid: header, footer, menu, main.
*     - give al elements a min-height and a border. 
* Now we defined that we have defined our layout like this, 
* we actually defined our second layer of components in our component tree, app being the first layer.
*/
class App extends Component {
  render() {
    return (
      <div className={'container'}>
        <header className={'header'}>
        </header>
        <div className={'menu'}>
        </div>
        <main className={'main'}>
        </main>
        <footer className={'footer'}>
        </footer>
      </div>
    );
  }
}

export default App;
