import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { ModalProvider } from './contexts/ModalContext';
import Welcome from './pages/Welcome';
import MainPage from './pages/MainPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <ModalProvider>
          <Router>
            <div className="App">
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route 
                  path="/welcome" 
                  element={
                    <ProtectedRoute>
                      <MainPage />
                    </ProtectedRoute>
                  } 
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </Router>
        </ModalProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
