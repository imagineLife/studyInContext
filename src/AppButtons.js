import React from 'react';
import ReactDOM from 'react-dom';
import './appButton.css';

//create colorContext
const ColorContext = React.createContext();

//Consumes ColorContext
const FancyButton = props => (
  <ColorContext.Consumer>
    {contextVal => {
      if (typeof contextVal === 'undefined') {
        throw Error(
          'FancyButton requires a Color Provider'
        );
      }
      return (
        <button className={`fancy-btn ${contextVal}`} {...props}>
          Click Me
        </button>
      );
    }}
  </ColorContext.Consumer>
);

const App = () => (
  <div>
    <ColorContext.Provider value="red">
      <FancyButton />
      <FancyButton />
    </ColorContext.Provider>
    <ColorContext.Provider value="green">
      <FancyButton />
    </ColorContext.Provider>
    <ColorContext.Provider value="blue">
      <FancyButton />
    </ColorContext.Provider>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

/*

NOTES

const App = () => (
  <div>

    //Fancy button OUTSIDE of a context Provider will NOT render,
      throws error
    <FancyButton />


    <ColorContext.Provider value="red">
      
      <FancyButton />
    </ColorContext.Provider>
    <ColorContext.Provider value="green">
      <FancyButton />
    </ColorContext.Provider>
    <ColorContext.Provider value="blue">
      <FancyButton />
    </ColorContext.Provider>
  </div>
);


*/