import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AuthProvider } from './VRV-security-assignment/src/context/AuthContext';
import App from './VRV-security-assignment/src/App';
import { BlogProvider } from './VRV-security-assignment/src/context/BlogContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <AuthProvider>
      <BlogProvider>
    <App />
    </BlogProvider>
    </AuthProvider>

  
);


