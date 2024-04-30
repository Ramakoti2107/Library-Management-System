import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import Appbar from './components/Appbar';
import Profile from './components/Profile';
import Entry from './components/Entry';
import Placement from './components/Placement';
import Error from './components/Error';
import Book from './components/Book';
import Bbook from './components/BorrowBook';

function App({store}) {

function Page() {
  switch(store.getState().NavReducer){
    case "Login":
      return(<div><Login store={store} /></div>)
    case "Registration":
      return(<div><Registration /></div>)
      case "Profile":
        if(localStorage.getItem("Role") == 1)
          return(<div><Profile /></div>)
        else
          return(<div><Error /></div>)
      case "Entry":
        if(localStorage.getItem("Role") == 1 || localStorage.getItem("Role") == 2)
          return(<div><Entry /></div>)
        else
          return(<div><Error /></div>)
      case "Delete Book":
        if(localStorage.getItem("Role") ==1 || localStorage.getItem("Role") == 2)
          return(<div><Placement/></div>)
        else
          return(<div><Error /></div>)
      case "Buy Book":
        if(localStorage.getItem("Role") ==1 || localStorage.getItem("Role") == 3)
          return(<div><Book/></div>)
        else
          return(<div><Error /></div>) 
      case "Borrow Book":
        if(localStorage.getItem("Role") ==1 || localStorage.getItem("Role") == 3)
          return(<div><Bbook/></div>)
        else
          return(<div><Error /></div>)
  }
}

  return (
    <div className="App">
      <header className="App-header">
      <img src={"library.webp"} className="App-logo" alt="logo" />
        <p>Library Management System</p>
      </header>
      <div className="App-body">
        <Appbar store={store}/>
        <br></br>
        <br></br>
        <br></br>
        <center><Page /></center>
      </div>
    </div>
  );
}

export default App;