import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
var Routes = require('./config/routes');


ReactDOM.render(Routes, document.getElementById('wrapper'));
