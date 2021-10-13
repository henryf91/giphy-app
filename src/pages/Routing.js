import React from 'react'; 
import { Route, Switch } from 'react-router-dom';
import FavsPage from './Favs/FavsPage';
import SearchPage from './Search/SearchPage';
import UploadPage from './Upload/UploadPage';

const Routing = () => {
    return (
        <Switch>
          <Route exact path='/' component={SearchPage}></Route>
          <Route exact path='/favs' component={FavsPage}></Route>
          <Route exact path='/upload' component={UploadPage}></Route> 
        </Switch>
    )
}

export default Routing;