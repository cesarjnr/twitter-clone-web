import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login } from "./pages/Login";
import { SignUpModal } from './pages/Login/SignUpModal';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}>
        <Route path="i/flow/signup" element={<SignUpModal />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
