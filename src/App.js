import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider, observer } from 'mobx-react';
import { GameStore, UserStore } from './stores'
import RootComponent from './RootComponent';
import { isSynchronized } from 'mobx-persist-store';

const stores = { GameStore, UserStore };


const App = observer(() => {
  console.log("App")

  const allStoreAreSynchronized = () => {
    return Object.values(stores).every((store => {
      return isSynchronized(store)
    }))
  }

  if (!allStoreAreSynchronized()) {
    console.log("loading")
    return <p>Loading...</p>;
  }

  return (
    <Provider {...stores}>
      <Router>
        <Switch>
          <Route path='/' exact component={RootComponent} />
        </Switch>
      </Router>
    </Provider>
  );
})

export default App;
