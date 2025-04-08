import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EmployeeForm from './components/EmployeeForm';  
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <Router>
      <div className="page-container">
        <nav className="nav-bar">
          <Link to="/employee-form">Employee Form</Link>
          <Link to="/employee-list" style={{ marginLeft: '1rem' }}>Employee List</Link>
        </nav>

        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>Edit <code>src/App.js</code> and save to reload.</p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </header>
              }
            />
            <Route path="/employee-form" element={<EmployeeForm />} />
            <Route path="/employee-list" element={<EmployeeList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
