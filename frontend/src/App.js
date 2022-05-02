import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landing_page';
import SignInPage from './pages/sign_in_page';
import SignUpPage from './pages/sign_up_page';


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />

    </Routes>
    </Router>
  );
}

export default App;
