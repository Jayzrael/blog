import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login.tsx';

// import { useSelector } from 'react-redux';
// import { RootState } from './store'
import BlogList from './components/BlogList.tsx';

// Protected Route Component
// const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
//   const token = useSelector((state: RootState) => state.auth.token);

//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/blogs"
            element={
              // <ProtectedRoute>
              //   <BlogList />
              // </ProtectedRoute>
              <BlogList />
            }
          />



          {/* Default Route */}
          <Route path="*" element={<Navigate to="/Login" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
