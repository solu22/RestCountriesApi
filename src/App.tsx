/* eslint-disable @typescript-eslint/no-unused-vars */

import HomePage from './Pages/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SingleCountryPage from './Pages/SingleCountryPage'

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path = "/" component = {HomePage}></Route>
        <Route exact path = "/:countryName" component = {SingleCountryPage}></Route>
      </Switch>
    </Router>
     

  )
}

export default App







