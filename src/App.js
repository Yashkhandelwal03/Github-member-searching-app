import React,{ useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';

//Importing Toast Container
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

//Importing Firebase
import firebase from 'firebase/app';
import 'firebase/auth';

//Importing Components
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import PageNotFound from './Pages/PageNotFound';
import UserContext from './Context/UserContext';
import Footer from './Layout/Footer';
import Header from './Layout/Header';


//Init Firebae
import firebaseConfig from './firebaseConfig';


firebase.initializeApp(firebaseConfig);


function App() {


  const [user,setUser] = useState(null);


  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user,setUser}}>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='*' component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
      
    </Router>
    
  );
}

export default App;
