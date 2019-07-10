import React from 'react';

const UserContext = React.createContext(); 
const {Provider, Consumer} = UserContext

// export default Provider;
export {Provider as UserProvider, Consumer as UserConsumer, UserContext}
//Contains Context.Consumer, Context.Provider