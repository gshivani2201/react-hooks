import './App.css';
import React from 'react'
import CompC from './components/CompC';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Shivani'}>
        <ChannelContext.Provider value={'Shivuu ka channel'}>
          <CompC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
