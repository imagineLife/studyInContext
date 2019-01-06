import React from 'react';
import ReactDOM from 'react-dom';
import './appButton.css';

//create colorContext


const ColorContext = React.createContext('black');

//Consumes ColorContext
const FancyButton = props => (
  <ColorContext.Consumer>
    {contextVal => {

      //if fancyButtonn is OUTSIDE of a context provider
      //  AND there is no default context in React.createContext()
      //  Then throw an error
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

ReactDOM.render(<App />, document.getElementById('app'));

/*

NOTES

const App = () => (
  <div>

    
    When there 
    Fancy button OUTSIDE of a context Provider will NOT render,
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