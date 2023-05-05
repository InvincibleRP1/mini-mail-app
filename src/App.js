
import './App.css';

import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/inbox";
import { SpamPage } from "./pages/spam";
import { TrashPage } from "./pages/trash";
import { MailDetails } from "./pages/mailDetails";

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/spam" element={<SpamPage />} />
        <Route path="/trash" element={<TrashPage />} />
        <Route path="/mail/:mailID" element={<MailDetails />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
