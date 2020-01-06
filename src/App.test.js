/// components ///
import App from './App';

/// testers ///
import renders from 'testers/renders';

/***************************************
  TESTING
***************************************/
const what = {
  name : 'App',
  Component : App,
};

renders (what.name, what.Component);
