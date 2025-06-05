import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Package,
  ShoppingBag,
  BarChart3,
  Star,
  Users,
  Settings,
  Bell,
  Search,
  TrendingUp,
  Calendar,
  DollarSign,
  Clock,
  AlertCircle,
  CheckCircle,
  Eye,
  Edit,
  Plus,
  Filter,
  Download,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  RefreshCw,
  ChefHat,
  Utensils,
  Target,
  Award
} from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';
import { Dish } from '@/types';

// 模拟数据
const dashboardStats = {
  todayRevenue: 2580.50,
  todayOrders: 45,
  averageOrderValue: 57.34,
  customerSatisfaction: 4.8,
  pendingOrders: 8,
  completedOrders: 37,
  cancelledOrders: 2,
  popularDishes: [
    { name: '宫保鸡丁', sales: 25, revenue: 450 },
    { name: '麻婆豆腐', sales: 20, revenue: 320 },
    { name: '红烧肉', sales: 18, revenue: 540 }
  ],
  hourlyData: [
    { hour: '9:00', orders: 3, revenue: 180 },
    { hour: '10:00', orders: 5, revenue: 290 },
    { hour: '11:00', orders: 12, revenue: 680 },
    { hour: '12:00', orders: 25, revenue: 1250 },
    { hour: '13:00', orders: 8, revenue: 420 }
  ]
};

const recentOrders = [
  {
    id: 'ORD001',
    customerName: '张同学',
    items: ['宫保鸡丁', '米饭'],
    total: 22.5,
    status: 'preparing',
    orderTime: '12:45',
    estimatedTime: '13:05'
  },
  {
    id: 'ORD002',
    customerName: '李同学',
    items: ['麻婆豆腐', '蛋花汤'],
    total: 18.0,
    status: 'ready',
    orderTime: '12:30',
    estimatedTime: '12:50'
  },
  {
    id: 'ORD003',
    customerName: '王同学',
    items: ['红烧肉', '青菜', '米饭'],
    total: 35.5,
    status: 'completed',
    orderTime: '12:15',
    estimatedTime: '12:35'
  }
];

// 商家主页组件
const MerchantHome = () => {
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

  const statusCards = [
    {
      title: '今日营业额',
      value: `¥${dashboardStats.todayRevenue.toFixed(2)}`,
      change: '+12.5%',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      trend: 'up'
    },
    {
      title: '今日订单',
      value: dashboardStats.todayOrders.toString(),
      change: '+8.2%',
      icon: ShoppingBag,
      color: 'from-blue-500 to-cyan-500',
      trend: 'up'
    },
    {
      title: '客单价',
      value: `¥${dashboardStats.averageOrderValue.toFixed(2)}`,
      change: '+3.1%',
      icon: Target,
      color: 'from-orange-500 to-amber-500',
      trend: 'up'
    },
    {
      title: '满意度',
      value: dashboardStats.customerSatisfaction.toFixed(1),
      change: '+0.2',
      icon: Star,
      color: 'from-purple-500 to-pink-500',
      trend: 'up'
    }
  ];

  const orderStatusCards = [
    {
      title: '待处理',
      count: dashboardStats.pendingOrders,
      color: 'bg-yellow-100 text-yellow-800',
      icon: Clock
    },
    {
      title: '已完成',
      count: dashboardStats.completedOrders,
      color: 'bg-green-100 text-green-800',
      icon: CheckCircle
    },
    {
      title: '已取消',
      count: dashboardStats.cancelledOrders,
      color: 'bg-red-100 text-red-800',
      icon: AlertCircle
    }
  ];

  return (
    <div className="space-y-6">
      {/* 欢迎横幅 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-700 rounded-2xl p-8 text-white"
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
              今日营业状况良好，继续为学生提供优质服务
            </motion.p>
            <motion.div 
              className="flex items-center mt-4 text-purple-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              <span>营业额较昨日增长 12.5%</span>
            </motion.div>
          </div>
          <motion.div 
            className="text-right"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-3xl font-bold">¥{dashboardStats.todayRevenue.toFixed(0)}</div>
            <div className="text-purple-100">今日营业额</div>
            <div className="text-sm text-purple-200 mt-1">{dashboardStats.todayOrders} 单订单</div>
          </motion.div>
        </div>
      </motion.div>

      {/* 核心指标卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statusCards.map((card, index) => {
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
                <p className="text-2xl font-bold text-gray-800">{card.value}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 订单状态概览和实时订单 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 订单状态 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-6">订单状态</h3>
          <div className="space-y-4">
            {orderStatusCards.map((status, index) => {
              const Icon = status.icon;
              return (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/60 hover:bg-white/80 transition-colors">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-lg ${status.color} flex items-center justify-center mr-3`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-gray-800">{status.title}</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-800">{status.count}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* 实时订单 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">实时订单</h3>
            <Link 
              to="/merchant/orders"
              className="text-blue-500 hover:text-blue-600 font-medium flex items-center"
            >
              查看全部
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="space-y-4">
            {recentOrders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-lg bg-white/40 hover:bg-white/60 transition-all"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="font-semibold text-gray-800">#{order.id}</span>
                    <span className="text-gray-600">{order.customerName}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      order.status === 'preparing' ? 'bg-yellow-100 text-yellow-800' :
                      order.status === 'ready' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {order.status === 'preparing' ? '备餐中' :
                       order.status === 'ready' ? '待取餐' : '已完成'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{order.items.join(', ')}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    下单时间：{order.orderTime} | 预计完成：{order.estimatedTime}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-lg">¥{order.total}</p>
                  {order.status !== 'completed' && (
                    <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
                      处理订单
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 热销菜品和营业时段分析 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 热销菜品 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">今日热销</h3>
            </div>
            <button className="text-blue-500 hover:text-blue-600">
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-4">
            {dashboardStats.popularDishes.map((dish, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                    index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-400'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">{dish.name}</p>
                    <p className="text-sm text-gray-600">{dish.sales} 份</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">¥{dish.revenue}</p>
                  <p className="text-xs text-gray-500">营收</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 营业时段分析 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">营业时段分析</h3>
          </div>
          
          <div className="space-y-3">
            {dashboardStats.hourlyData.map((data, index) => {
              const maxRevenue = Math.max(...dashboardStats.hourlyData.map(d => d.revenue));
              const percentage = (data.revenue / maxRevenue) * 100;
              
              return (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{data.hour}</span>
                    <span className="font-medium">{data.orders}单 / ¥{data.revenue}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// 订单管理组件
const MerchantOrders = () => {
  const [activeTab, setActiveTab] = useState<'全部' | '待处理' | '备餐中' | '待取餐' | '已完成' | '已取消'>('全部');
  const [searchQuery, setSearchQuery] = useState('');
  
  const tabs = ['全部', '待处理', '备餐中', '待取餐', '已完成', '已取消'] as const;

  const allOrders = [
    ...recentOrders,
    { 
      id: 'ORD004', 
      customerName: '刘同学', 
      items: ['酸辣土豆丝', '蒸蛋'], 
      total: 15.5, 
      status: 'pending' as const, 
      orderTime: '13:15',
      estimatedTime: '13:35'
    },
    { 
      id: 'ORD005', 
      customerName: '陈同学', 
      items: ['回锅肉', '紫菜蛋花汤', '米饭'], 
      total: 28.0, 
      status: 'cancelled' as const, 
      orderTime: '12:50',
      estimatedTime: '13:10'
    }
  ];

  const filteredOrders = allOrders.filter(order => {
    if (activeTab === '全部') return true;
    const statusMap: Record<'待处理' | '备餐中' | '待取餐' | '已完成' | '已取消', string> = {
      '待处理': 'pending',
      '备餐中': 'preparing',
      '待取餐': 'ready',
      '已完成': 'completed',
      '已取消': 'cancelled'
    };
    return order.status === statusMap[activeTab as keyof typeof statusMap];
  });

  return (
    <div className="space-y-6">
      {/* 搜索和筛选 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="搜索订单号、客户名称..."
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
      </motion.div>

      {/* 订单列表 */}
      <div className="space-y-4">
        {filteredOrders.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">订单 #{order.id}</h3>
                <p className="text-gray-600">{order.customerName}</p>
                <p className="text-sm text-gray-500">下单时间：{order.orderTime}</p>
              </div>
              <div className="text-right">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  order.status === 'pending' ? 'bg-orange-100 text-orange-800' :
                  order.status === 'preparing' ? 'bg-yellow-100 text-yellow-800' :
                  order.status === 'ready' ? 'bg-blue-100 text-blue-800' :
                  order.status === 'completed' ? 'bg-green-100 text-green-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {order.status === 'pending' ? '待处理' :
                   order.status === 'preparing' ? '备餐中' :
                   order.status === 'ready' ? '待取餐' :
                   order.status === 'completed' ? '已完成' : '已取消'}
                </span>
                <p className="text-xl font-bold text-gray-800 mt-2">¥{order.total}</p>
              </div>
            </div>
            
            <div className="border-t pt-4 mb-4">
              <h4 className="font-medium mb-2">订单详情：</h4>
              <p className="text-gray-600">{order.items.join(' + ')}</p>
              {order.status !== 'cancelled' && order.status !== 'completed' && (
                <p className="text-sm text-gray-500 mt-2">预计完成时间：{order.estimatedTime}</p>
              )}
            </div>
            
            {order.status !== 'completed' && order.status !== 'cancelled' && (
              <div className="flex justify-end space-x-2">
                {order.status === 'pending' && (
                  <>
                    <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                      拒绝订单
                    </button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                      接受订单
                    </button>
                  </>
                )}
                {order.status === 'preparing' && (
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                    完成制作
                  </button>
                )}
                {order.status === 'ready' && (
                  <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                    确认取餐
                  </button>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// 商家资料组件
const MerchantProfile = () => {
  const { user } = useAuthStore();
  
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6"
      >
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
            <ChefHat className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{user?.username || '商家用户'}</h2>
            <p className="text-gray-600">营业执照号：91310000123456789X</p>
            <p className="text-gray-600">第三食堂 - 川菜档口</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">基本信息</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">商家类型</span>
                <span>食堂档口</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">主营类目</span>
                <span>川菜</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">营业时间</span>
                <span>7:00-21:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">联系电话</span>
                <span>400-1234-5678</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">经营数据</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">累计订单</span>
                <span>1,256 单</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">好评率</span>
                <span>98.5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">平均评分</span>
                <span>4.8 分</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">月均营业额</span>
                <span>¥52,000</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// 主仪表板组件
const MerchantDashboard = () => {
  const location = useLocation();
  const { user, logout } = useAuthStore();
  const [notifications, setNotifications] = useState([]);

  const navigation = [
    { name: '首页', href: '/merchant', icon: Home },
    { name: '订单管理', href: '/merchant/orders', icon: Package },
    { name: '菜品管理', href: '/merchant/dishes', icon: Utensils },
    { name: '销售分析', href: '/merchant/analytics', icon: BarChart3 },
    { name: '评价管理', href: '/merchant/reviews', icon: Star },
    { name: '设置', href: '/merchant/settings', icon: Settings },
  ];

  const isActive = (href: string) => {
    if (href === '/merchant') {
      return location.pathname === '/merchant' || location.pathname === '/merchant/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      {/* 顶部导航栏 */}
      <header className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-white/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  智膳通
                </span>
                <p className="text-xs text-gray-500 -mt-1">商家版</p>
              </div>
            </div>

            {/* 右侧菜单 */}
            <div className="flex items-center space-x-4">
              {/* 通知 */}
              <button className="relative p-2 text-gray-600 hover:text-gray-800 transition-colors">
                <Bell className="w-6 h-6" />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full"></span>
                )}
              </button>

              {/* 用户菜单 */}
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-800 transition-colors">
                  <ChefHat className="w-6 h-6" />
                  <span className="hidden md:block">{user?.username}</span>
                </button>
                
                <div className="absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link
                      to="/merchant/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/60 transition-colors"
                    >
                      商家资料
                    </Link>
                    <Link
                      to="/merchant/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/60 transition-colors"
                    >
                      设置
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
                        ? 'bg-indigo-500 text-white shadow-lg'
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
              <Route path="/" element={<MerchantHome />} />
              <Route path="/orders" element={<MerchantOrders />} />
              <Route path="/profile" element={<MerchantProfile />} />
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
                    ? 'text-indigo-600'
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

export default MerchantDashboard; 