import { addRoute, Components } from 'meteor/vulcan:core';
import './components/user.jsx';
addRoute({ name: 'user', path: '/', componentName: 'dalonginfo' });
