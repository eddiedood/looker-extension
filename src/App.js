// Copyright 2021 Google LLC

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     https://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
  * This is a sample Looker Extension written in javascript and React. It imports one component, <HelloWorld>.
  * HelloWorld makes a simple call to the Looker API using the Extension Framework's built in authentication,
  * and returns the logged in user.
*/

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ExtensionProvider } from '@looker/extension-sdk-react'
import { hot } from 'react-hot-loader/root'
import CustomSidebar from './components/CustomSidebar'
import HelloWorld from './HelloWorld'

const Home = () => <div>Home Page</div>;
const MonthlyStatements = () => <div>Monthly Statements Page</div>;
const Analytics = () => <div>Analytics Page</div>;

const App = hot(() => {
  return (
    <ExtensionProvider>
      <Router>
        <div className="app-container">
          <CustomSidebar />
          <div className="main-content">
            <Switch>
              <Route path="/home" component={<Home />} />
              <Route path="/dashboard" component={<MonthlyStatements />} />
              <Route path="/settings" component={<Analytics />} />
              <Route path="/" component={<HelloWorld />} />
            </Switch>
          </div>
        </div>
      </Router>
    </ExtensionProvider>
  );
});

export default App;


