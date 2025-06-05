import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Users,
  Store,
  BarChart3,
  Shield,
  Settings,
  Bell,
  Search,
  TrendingUp,
  Calendar,
  DollarSign,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  Edit,
  Plus,
  Filter,
  Download,
  Sparkles,
  Monitor,
  Database,
  UserCog,
  Building,
  PieChart,
  LineChart,
  Globe,
  Wifi,
  Server,
  Cpu,
  HardDrive,
  MemoryStick,
  ArrowRight,
  RefreshCw,
  Zap,
  Target,
  Award,
  TrendingDown
} from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';

// 模拟系统数据
const systemStats = {
  totalUsers: 12450,
  activeUsers: 8920,
  totalMerchants: 156,
  activeMerchants: 142,
  totalOrders: 45620,
  todayOrders: 1250,
  totalRevenue: 2850000,
  todayRevenue: 52800,
  systemHealth: 98.5,
  serverStatus: 'healthy',
  dailyGrowth: {
    users: 2.8,
    merchants: 1.2,
    orders: 15.6,
    revenue: 12.3
  },
  platformData: [
    { month: '1月', users: 8500, merchants: 120, revenue: 185000 },
    { month: '2月', users: 9200, merchants: 125, revenue: 205000 },
    { month: '3月', users: 10100, merchants: 135, revenue: 245000 },
    { month: '4月', users: 11200, merchants: 145, revenue: 268000 },
    { month: '5月', users: 12450, merchants: 156, revenue: 285000 }
  ],
  systemMetrics: {
    cpuUsage: 65,
    memoryUsage: 78,
    diskUsage: 45,
    networkLatency: 25
  },
  recentAlerts: [
    { id: 1, type: 'warning', message: '第三食堂系统响应缓慢', time: '5分钟前', severity: 'medium' },
    { id: 2, type: 'info', message: '新商家注册审核通过', time: '1小时前', severity: 'low' },
    { id: 3, type: 'success', message: '系统自动备份完成', time: '2小时前', severity: 'low' }
  ]
};

const recentUsers = [
  { id: 1, name: '张同学', role: 'student', status: 'active', joinDate: '2024-01-15', lastLogin: '2小时前' },
  { id: 2, name: '川味小厨', role: 'merchant', status: 'active', joinDate: '2024-01-10', lastLogin: '30分钟前' },
  { id: 3, name: '李骑手', role: 'rider', status: 'active', joinDate: '2024-01-12', lastLogin: '1小时前' },
  { id: 4, name: '王同学', role: 'student', status: 'inactive', joinDate: '2024-01-08', lastLogin: '3天前' }
];

// 管理员主页组件
const AdminHome = () => {
  const { user } = useAuthStore();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return '早上好';
    if (hour < 18) return '下午好';
    return '晚上好';
  };

  const summaryCards = [
    {
      title: '平台用户',
      value: systemStats.totalUsers.toLocaleString(),
      change: `+${systemStats.dailyGrowth.users}%`,
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      trend: 'up',
      subtitle: `活跃用户 ${systemStats.activeUsers.toLocaleString()}`
    },
    {
      title: '合作商家',
      value: systemStats.totalMerchants.toString(),
      change: `+${systemStats.dailyGrowth.merchants}%`,
      icon: Store,
      color: 'from-green-500 to-emerald-500',
      trend: 'up',
      subtitle: `营业中 ${systemStats.activeMerchants}`
    },
    {
      title: '今日订单',
      value: systemStats.todayOrders.toLocaleString(),
      change: `+${systemStats.dailyGrowth.orders}%`,
      icon: BarChart3,
      color: 'from-orange-500 to-amber-500',
      trend: 'up',
      subtitle: `总订单 ${systemStats.totalOrders.toLocaleString()}`
    },
    {
      title: '今日营收',
      value: `¥${(systemStats.todayRevenue / 1000).toFixed(1)}K`,
      change: `+${systemStats.dailyGrowth.revenue}%`,
      icon: DollarSign,
      color: 'from-purple-500 to-pink-500',
      trend: 'up',
      subtitle: `总营收 ¥${(systemStats.totalRevenue / 1000000).toFixed(1)}M`
    }
  ];

  const systemHealthCards = [
    {
      title: 'CPU使用率',
      value: `${systemStats.systemMetrics.cpuUsage}%`,
      status: systemStats.systemMetrics.cpuUsage < 80 ? 'good' : 'warning',
      icon: Cpu,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: '内存使用',
      value: `${systemStats.systemMetrics.memoryUsage}%`,
      status: systemStats.systemMetrics.memoryUsage < 85 ? 'good' : 'warning',
      icon: MemoryStick,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: '磁盘空间',
      value: `${systemStats.systemMetrics.diskUsage}%`,
      status: systemStats.systemMetrics.diskUsage < 70 ? 'good' : 'warning',
      icon: HardDrive,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: '网络延迟',
      value: `${systemStats.systemMetrics.networkLatency}ms`,
      status: systemStats.systemMetrics.networkLatency < 50 ? 'good' : 'warning',
      icon: Wifi,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* 欢迎横幅 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-700 rounded-2xl p-8 text-white"
      >
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-4 right-4 w-32 h-32 bg-white/20 rounded-full blur-xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <div>
            <motion.h1 
              className="text-3xl font-bold mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {getGreeting()}，{user?.username}！
            </motion.h1>
            <motion.p 
              className="text-purple-100 text-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              智膳通平台运行状况良好，系统健康度 {systemStats.systemHealth}%
            </motion.p>
            <motion.div 
              className="flex items-center mt-4 text-purple-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Activity className="w-5 h-5 mr-2" />
              <span>今日新增用户 {Math.floor(systemStats.totalUsers * systemStats.dailyGrowth.users / 100)} 人</span>
            </motion.div>
          </div>
          <motion.div 
            className="text-right"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-3xl font-bold">{systemStats.systemHealth}%</div>
            <div className="text-purple-100">系统健康度</div>
            <div className="text-sm text-purple-200 mt-1">所有服务正常运行</div>
          </motion.div>
        </div>
      </motion.div>

      {/* 核心数据卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-500 text-sm font-medium flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {card.change}
                </span>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">{card.title}</p>
                <p className="text-2xl font-bold text-gray-800 mb-1">{card.value}</p>
                <p className="text-xs text-gray-500">{card.subtitle}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 系统健康状态和实时监控 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 系统健康状态 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">系统状态</h3>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-green-600 text-sm font-medium">正常</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {systemHealthCards.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/60 hover:bg-white/80 transition-colors">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 bg-gradient-to-r ${metric.color} rounded-lg flex items-center justify-center mr-3`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-800">{metric.title}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-gray-800 mr-2">{metric.value}</span>
                    <div className={`w-2 h-2 rounded-full ${
                      metric.status === 'good' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* 系统告警 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">系统告警</h3>
            </div>
            <Link 
              to="/admin/alerts"
              className="text-blue-500 hover:text-blue-600 font-medium flex items-center"
            >
              查看全部
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="space-y-4">
            {systemStats.recentAlerts.map((alert, index) => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-lg bg-white/40 hover:bg-white/60 transition-all"
              >
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                    alert.type === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                    alert.type === 'success' ? 'bg-green-100 text-green-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {alert.type === 'warning' ? <AlertTriangle className="w-5 h-5" /> :
                     alert.type === 'success' ? <CheckCircle className="w-5 h-5" /> :
                     <Bell className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{alert.message}</p>
                    <p className="text-sm text-gray-500">{alert.time}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  alert.severity === 'high' ? 'bg-red-100 text-red-800' :
                  alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {alert.severity === 'high' ? '高' :
                   alert.severity === 'medium' ? '中' : '低'}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 平台数据趋势和最近用户 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 平台增长趋势 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                <LineChart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">平台增长趋势</h3>
            </div>
            <button className="text-blue-500 hover:text-blue-600">
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-4">
            {systemStats.platformData.slice(-3).map((data, index) => {
              const userGrowth = index > 0 ? 
                ((data.users - systemStats.platformData[systemStats.platformData.length - 3 + index - 1].users) / 
                 systemStats.platformData[systemStats.platformData.length - 3 + index - 1].users * 100) : 0;
              const userGrowthStr = userGrowth.toFixed(1);
              
              return (
                <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-800">{data.month}</span>
                    {userGrowth > 0 && (
                      <span className="text-green-500 text-sm font-medium flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        +{userGrowthStr}%
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">用户</p>
                      <p className="font-semibold">{data.users.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">商家</p>
                      <p className="font-semibold">{data.merchants}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">营收</p>
                      <p className="font-semibold">¥{(data.revenue / 1000).toFixed(0)}K</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* 最新用户 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">最新用户</h3>
            </div>
            <Link 
              to="/admin/users"
              className="text-blue-500 hover:text-blue-600 font-medium flex items-center"
            >
              管理用户
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="space-y-4">
            {recentUsers.map((user, index) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3 rounded-lg bg-white/40 hover:bg-white/60 transition-all"
              >
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                    user.role === 'student' ? 'bg-blue-100 text-blue-600' :
                    user.role === 'merchant' ? 'bg-purple-100 text-purple-600' :
                    user.role === 'rider' ? 'bg-green-100 text-green-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {user.role === 'student' ? '学' :
                     user.role === 'merchant' ? '商' :
                     user.role === 'rider' ? '骑' : '用'}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{user.name}</p>
                    <p className="text-sm text-gray-500">
                      {user.role === 'student' ? '学生' :
                       user.role === 'merchant' ? '商家' :
                       user.role === 'rider' ? '骑手' : '用户'} · 最后登录 {user.lastLogin}
                    </p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {user.status === 'active' ? '活跃' : '非活跃'}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// 用户管理组件
const AdminUsers = () => {
  const [activeTab, setActiveTab] = useState<'全部' | '学生' | '商家' | '骑手' | '营养师'>('全部');
  const [searchQuery, setSearchQuery] = useState('');
  
  const tabs = ['全部', '学生', '商家', '骑手', '营养师'] as const;

  const allUsers = [
    ...recentUsers,
    { id: 5, name: '陈营养师', role: 'nutritionist', status: 'active', joinDate: '2024-01-05', lastLogin: '4小时前' },
    { id: 6, name: '湘菜馆', role: 'merchant', status: 'pending', joinDate: '2024-01-16', lastLogin: '1天前' }
  ];

  const filteredUsers = allUsers.filter(user => {
    if (activeTab === '全部') return true;
    const roleMap: Record<'学生' | '商家' | '骑手' | '营养师', string> = {
      '学生': 'student',
      '商家': 'merchant',
      '骑手': 'rider',
      '营养师': 'nutritionist'
    };
    return user.role === roleMap[activeTab as keyof typeof roleMap];
  });

  return (
    <div className="space-y-6">
      {/* 搜索和筛选 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
      >
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="搜索用户名、邮箱、手机号..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">
            共找到 {filteredUsers.length} 个用户
          </p>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors flex items-center">
              <Plus className="w-4 h-4 mr-2" />
              添加用户
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center">
              <Download className="w-4 h-4 mr-2" />
              导出数据
            </button>
          </div>
        </div>
      </motion.div>

      {/* 用户列表 */}
      <div className="space-y-4">
        {filteredUsers.map((user, index) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                  user.role === 'student' ? 'bg-blue-100 text-blue-600' :
                  user.role === 'merchant' ? 'bg-purple-100 text-purple-600' :
                  user.role === 'rider' ? 'bg-green-100 text-green-600' :
                  user.role === 'nutritionist' ? 'bg-orange-100 text-orange-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {user.role === 'student' ? '学' :
                   user.role === 'merchant' ? '商' :
                   user.role === 'rider' ? '骑' :
                   user.role === 'nutritionist' ? '营' : '用'}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">{user.name}</h3>
                  <p className="text-gray-600">
                    {user.role === 'student' ? '学生用户' :
                     user.role === 'merchant' ? '商家用户' :
                     user.role === 'rider' ? '骑手用户' :
                     user.role === 'nutritionist' ? '营养师' : '普通用户'}
                  </p>
                  <p className="text-sm text-gray-500">
                    注册时间：{user.joinDate} | 最后登录：{user.lastLogin}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  user.status === 'active' ? 'bg-green-100 text-green-800' :
                  user.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {user.status === 'active' ? '正常' :
                   user.status === 'pending' ? '待审核' : '已停用'}
                </span>
                <div className="flex space-x-2">
                  <button className="p-2 text-blue-600 hover:text-blue-800 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// 管理员资料组件
const AdminProfile = () => {
  const { user } = useAuthStore();
  
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
      >
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
            <Shield className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{user?.username || '系统管理员'}</h2>
            <p className="text-gray-600">员工编号：ADM001234</p>
            <p className="text-gray-600">智膳通平台 - 系统管理员</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">基本信息</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">部门</span>
                <span>技术运营部</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">职位</span>
                <span>系统管理员</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">权限级别</span>
                <span>超级管理员</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">联系邮箱</span>
                <span>admin@smartcanteen.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">系统权限</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">用户管理</span>
                <span className="text-green-600">✓ 完全权限</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">商家管理</span>
                <span className="text-green-600">✓ 完全权限</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">系统监控</span>
                <span className="text-green-600">✓ 完全权限</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">数据分析</span>
                <span className="text-green-600">✓ 完全权限</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// 主仪表板组件
const AdminDashboard = () => {
  const location = useLocation();
  const { user, logout } = useAuthStore();
  const [notifications, setNotifications] = useState(systemStats.recentAlerts);

  const navigation = [
    { name: '概览', href: '/admin', icon: Home },
    { name: '用户管理', href: '/admin/users', icon: Users },
    { name: '商家管理', href: '/admin/merchants', icon: Store },
    { name: '数据分析', href: '/admin/analytics', icon: BarChart3 },
    { name: '系统监控', href: '/admin/monitor', icon: Monitor },
    { name: '设置', href: '/admin/settings', icon: Settings },
  ];

  const isActive = (href: string) => {
    if (href === '/admin') {
      return location.pathname === '/admin' || location.pathname === '/admin/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50">
      {/* 顶部导航栏 */}
      <header className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-white/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  智膳通
                </span>
                <p className="text-xs text-gray-500 -mt-1">管理平台</p>
              </div>
            </div>

            {/* 右侧菜单 */}
            <div className="flex items-center space-x-4">
              {/* 通知 */}
              <button className="relative p-2 text-gray-600 hover:text-gray-800 transition-colors">
                <Bell className="w-6 h-6" />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </button>

              {/* 用户菜单 */}
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-800 transition-colors">
                  <Shield className="w-6 h-6" />
                  <span className="hidden md:block">{user?.username}</span>
                </button>
                
                <div className="absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link
                      to="/admin/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/60 transition-colors"
                    >
                      管理员资料
                    </Link>
                    <Link
                      to="/admin/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/60 transition-colors"
                    >
                      系统设置
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/60 transition-colors"
                    >
                      退出登录
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* 侧边栏 */}
        <nav className="hidden md:block w-64 bg-white/60 backdrop-blur-sm shadow-sm h-[calc(100vh-4rem)] sticky top-16 border-r border-white/50">
          <div className="p-6">
            <div className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive(item.href)
                        ? 'bg-purple-500 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-white/60'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        {/* 主内容区域 */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<AdminHome />} />
              <Route path="/users" element={<AdminUsers />} />
              <Route path="/profile" element={<AdminProfile />} />
            </Routes>
          </div>
        </main>
      </div>

      {/* 移动端底部导航 */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-white/50 z-40">
        <div className="grid grid-cols-4 gap-1 py-2">
          {navigation.slice(0, 4).map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex flex-col items-center justify-center py-2 text-xs transition-colors ${
                  isActive(item.href)
                    ? 'text-purple-600'
                    : 'text-gray-600'
                }`}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default AdminDashboard; 