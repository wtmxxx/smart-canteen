import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';

// 页面组件
import LandingPage from '@/pages/LandingPage';
import LoginPage from '@/pages/LoginPage';
import StudentDashboard from '@/pages/student/Dashboard';
import MerchantDashboard from '@/pages/merchant/Dashboard';
import AdminDashboard from '@/pages/admin/Dashboard';
import RiderDashboard from '@/pages/rider/Dashboard';

function App() {
  const { isAuthenticated, user } = useAuthStore();

  // 根据用户角色重定向到对应的仪表板
  const getDashboardRoute = () => {
    if (!user) return '/login';
    
    switch (user.role) {
      case 'student':
        return '/student';
      case 'merchant':
        return '/merchant';
      case 'admin':
        return '/admin';
      case 'rider':
        return '/rider';
      case 'nutritionist':
        return '/admin'; // 营养师使用管理员界面
      default:
        return '/login';
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* 首页/登录页 */}
          <Route 
            path="/" 
            element={isAuthenticated ? <Navigate to={getDashboardRoute()} replace /> : <LandingPage />} 
          />
          <Route 
            path="/login" 
            element={!isAuthenticated ? <LoginPage /> : <Navigate to={getDashboardRoute()} replace />} 
          />
          
          {/* 学生用户路由 */}
          <Route 
            path="/student/*" 
            element={
              isAuthenticated && user?.role === 'student' ? 
              <StudentDashboard /> : 
              <Navigate to="/login" replace />
            } 
          />
          
          {/* 商家用户路由 */}
          <Route 
            path="/merchant/*" 
            element={
              isAuthenticated && user?.role === 'merchant' ? 
              <MerchantDashboard /> : 
              <Navigate to="/login" replace />
            } 
          />
          
          {/* 管理员路由 */}
          <Route 
            path="/admin/*" 
            element={
              isAuthenticated && (user?.role === 'admin' || user?.role === 'nutritionist') ? 
              <AdminDashboard /> : 
              <Navigate to="/login" replace />
            } 
          />
          
          {/* 骑手路由 */}
          <Route 
            path="/rider/*" 
            element={
              isAuthenticated && user?.role === 'rider' ? 
              <RiderDashboard /> : 
              <Navigate to="/login" replace />
            } 
          />
          
          {/* 404页面 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 