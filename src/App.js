import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { NoMatch } from './screens'
import { Provider } from 'mobx-react';
import { PoolGameStore } from './stores'
import { create } from 'mobx-persist'
import Demo from './Demo';
// import Modals from './components/Modals';

// const stores = { AppStore, UserStore, SignalrDataStore, DynamicStore, PoolGameStore };
const stores = { PoolGameStore };

const hydrate = create();

const HandleHydrate = async () => {
  return new Promise((resolve, reject) => {
    // hydrate('user', UserStore).then(() => {
    // hydrate('psWinner16', PoolGameStore).then(() => {
    // console.log("HandleHydrate -> PoolGameStore", PoolGameStore)
    //   resolve(true)
    // })
  })
  // })
}

function App() {
  useEffect(() => {
    async function fetchData() {
      await HandleHydrate();
    }
    fetchData();
  }, [])

  return (
    <Provider {...stores}>
      <Router>
        <Switch>
          <Route path='/' exact component={Demo} />
          {/* <Route path='/changepass' exact component={ChangePassword} />
          <Route path="*" component={NoMatch} /> */}
        </Switch>
      </Router>
      {/* <Modals /> */}
    </Provider>
  );
}

export default App;
