import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Package,
  MapPin,
  Clock,
  DollarSign,
  TrendingUp,
  Navigation,
  Phone,
  User,
  Settings,
  Bell,
  Search,
  Activity,
  CheckCircle,
  AlertCircle,
  Calendar,
  Target,
  Award,
  Route as RouteIcon,
  Timer,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Zap,
  Star,
  Bike,
  Map,
  BarChart3,
  Truck,
  Eye,
  MessageSquare
} from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';

// 模拟骑手数据
const riderStats = {
  todayOrders: 18,
  completedOrders: 16,
  pendingOrders: 2,
  todayEarnings: 285.50,
  monthlyEarnings: 7420.00,
  averageDeliveryTime: 22,
  customerRating: 4.9,
  totalDistance: 58.5,
  onlineHours: 8.5,
  dailyGrowth: {
    orders: 12.5,
    earnings: 8.8,
    rating: 0.2
  },
  weeklyData: [
    { day: '周一', orders: 15, earnings: 225, distance: 45 },
    { day: '周二', orders: 18, earnings: 270, distance: 52 },
    { day: '周三', orders: 22, earnings: 330, distance: 63 },
    { day: '周四', orders: 20, earnings: 300, distance: 58 },
    { day: '周五', orders: 25, earnings: 375, distance: 72 },
    { day: '周六', orders: 28, earnings: 420, distance: 85 },
    { day: '周日', orders: 24, earnings: 360, distance: 68 }
  ],
  recentDeliveries: [
    {
      id: 'DEL001',
      orderNumber: 'ORD20240115001',
      customer: '张同学',
      pickup: '第一食堂',
      delivery: '宿舍楼A栋',
      status: 'delivering',
      estimatedTime: '15分钟',
      earnings: 12.5,
      distance: 2.8
    },
    {
      id: 'DEL002',
      orderNumber: 'ORD20240115002',
      customer: '李同学',
      pickup: '第二食堂',
      delivery: '图书馆',
      status: 'completed',
      completedTime: '18分钟',
      earnings: 15.0,
      distance: 3.2
    },
    {
      id: 'DEL003',
      orderNumber: 'ORD20240115003',
      customer: '王同学',
      pickup: '第三食堂',
      delivery: '教学楼C座',
      status: 'pending',
      estimatedTime: '预计20分钟',
      earnings: 18.0,
      distance: 4.1
    }
  ]
};

// 骑手主页组件
const RiderHome = () => {
  const { user } = useAuthStore();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOnline, setIsOnline] = useState(true);

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
      title: '今日订单',
      value: riderStats.todayOrders.toString(),
      change: `+${riderStats.dailyGrowth.orders}%`,
      icon: Package,
      color: 'from-blue-500 to-cyan-500',
      subtitle: `已完成 ${riderStats.completedOrders} 单`
    },
    {
      title: '今日收入',
      value: `¥${riderStats.todayEarnings.toFixed(2)}`,
      change: `+${riderStats.dailyGrowth.earnings}%`,
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      subtitle: `月收入 ¥${riderStats.monthlyEarnings.toFixed(0)}`
    },
    {
      title: '平均配送时间',
      value: `${riderStats.averageDeliveryTime}分钟`,
      change: '-2分钟',
      icon: Timer,
      color: 'from-orange-500 to-amber-500',
      subtitle: '效率提升中'
    },
    {
      title: '客户评分',
      value: riderStats.customerRating.toFixed(1),
      change: `+${riderStats.dailyGrowth.rating}`,
      icon: Star,
      color: 'from-purple-500 to-pink-500',
      subtitle: '满分5.0'
    }
  ];

  const quickActions = [
    { title: '开始接单', icon: Zap, color: 'bg-green-500', action: () => setIsOnline(!isOnline) },
    { title: '查看路线', icon: Map, color: 'bg-blue-500' },
    { title: '联系客服', icon: MessageSquare, color: 'bg-purple-500' },
    { title: '收入明细', icon: BarChart3, color: 'bg-orange-500' }
  ];

  return (
    <div className="space-y-6">
      {/* 欢迎横幅 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 rounded-2xl p-8 text-white"
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
              className="text-green-100 text-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {isOnline ? '您当前在线，准备接单' : '您已下线，点击开始接单'}
            </motion.p>
            <motion.div 
              className="flex items-center mt-4 text-green-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Activity className="w-5 h-5 mr-2" />
              <span>已在线 {riderStats.onlineHours} 小时，配送了 {riderStats.totalDistance} 公里</span>
            </motion.div>
          </div>
          <motion.div 
            className="text-right"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center mb-2">
              <div className={`w-4 h-4 rounded-full mr-2 ${isOnline ? 'bg-green-300' : 'bg-gray-300'}`}></div>
              <span className="text-lg font-medium">{isOnline ? '在线' : '离线'}</span>
            </div>
            <div className="text-2xl font-bold">¥{riderStats.todayEarnings.toFixed(0)}</div>
            <div className="text-green-100">今日收入</div>
          </motion.div>
        </div>
      </motion.div>

      {/* 核心数据卡片 */}
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
                <p className="text-2xl font-bold text-gray-800 mb-1">{card.value}</p>
                <p className="text-xs text-gray-500">{card.subtitle}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 快捷操作和实时订单 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 快捷操作 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">快捷操作</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={action.action}
                  className={`p-4 ${action.color} text-white rounded-xl hover:shadow-lg transition-all duration-300 flex flex-col items-center`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-6 h-6 mb-2" />
                  <span className="text-sm font-medium">{action.title}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* 实时订单 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">实时订单</h3>
            </div>
            <Link 
              to="/rider/orders"
              className="text-blue-500 hover:text-blue-600 font-medium flex items-center"
            >
              查看全部
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="space-y-4">
            {riderStats.recentDeliveries.map((delivery, index) => (
              <motion.div
                key={delivery.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-lg bg-white/40 hover:bg-white/60 transition-all"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="font-semibold text-gray-800">#{delivery.orderNumber}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      delivery.status === 'delivering' ? 'bg-blue-100 text-blue-800' :
                      delivery.status === 'completed' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {delivery.status === 'delivering' ? '配送中' :
                       delivery.status === 'completed' ? '已完成' : '待接单'}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>客户：{delivery.customer}</p>
                    <p>取餐：{delivery.pickup} → 送达：{delivery.delivery}</p>
                    <p>距离：{delivery.distance}km | 收入：¥{delivery.earnings}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-2">
                    {delivery.status === 'completed' ? delivery.completedTime : delivery.estimatedTime}
                  </p>
                  {delivery.status === 'pending' && (
                    <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
                      接单
                    </button>
                  )}
                  {delivery.status === 'delivering' && (
                    <button className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition-colors">
                      完成配送
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 收入分析 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">本周收入分析</h3>
          </div>
          <button className="text-blue-500 hover:text-blue-600">
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
        
        <div className="space-y-3">
          {riderStats.weeklyData.slice(-5).map((data, index) => {
            const maxEarnings = Math.max(...riderStats.weeklyData.map(d => d.earnings));
            const percentage = (data.earnings / maxEarnings) * 100;
            
            return (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{data.day}</span>
                  <span className="font-medium">{data.orders}单 / ¥{data.earnings} / {data.distance}km</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
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
  );
};

// 订单管理组件
const RiderOrders = () => {
  const [activeTab, setActiveTab] = useState<'全部' | '待接单' | '配送中' | '已完成' | '已取消'>('全部');
  const [searchQuery, setSearchQuery] = useState('');
  
  const tabs = ['全部', '待接单', '配送中', '已完成', '已取消'] as const;

  const allOrders = [
    ...riderStats.recentDeliveries,
    { 
      id: 'DEL004', 
      orderNumber: 'ORD20240115004',
      customer: '陈同学',
      pickup: '第四食堂',
      delivery: '体育馆',
      status: 'cancelled' as const,
      cancelReason: '客户取消',
      earnings: 0,
      distance: 1.5
    }
  ];

  const filteredOrders = allOrders.filter(order => {
    if (activeTab === '全部') return true;
    const statusMap: Record<'待接单' | '配送中' | '已完成' | '已取消', string> = {
      '待接单': 'pending',
      '配送中': 'delivering',
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
        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="搜索订单号、客户名称..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-green-500 text-white shadow-lg'
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
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">订单 #{order.orderNumber}</h3>
                <p className="text-gray-600">客户：{order.customer}</p>
              </div>
              <div className="text-right">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  order.status === 'delivering' ? 'bg-blue-100 text-blue-800' :
                  order.status === 'completed' ? 'bg-green-100 text-green-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {order.status === 'pending' ? '待接单' :
                   order.status === 'delivering' ? '配送中' :
                   order.status === 'completed' ? '已完成' : '已取消'}
                </span>
                {order.earnings > 0 && (
                  <p className="text-xl font-bold text-gray-800 mt-2">¥{order.earnings}</p>
                )}
              </div>
            </div>
            
            <div className="border-t pt-4 mb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2 flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-green-500" />
                    取餐地点
                  </h4>
                  <p className="text-gray-600">{order.pickup}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 flex items-center">
                    <Navigation className="w-4 h-4 mr-2 text-blue-500" />
                    送达地点
                  </h4>
                  <p className="text-gray-600">{order.delivery}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center text-sm text-gray-500">
                <RouteIcon className="w-4 h-4 mr-1" />
                <span>配送距离：{order.distance}km</span>
                {order.status === 'cancelled' && (order as any).cancelReason && (
                  <>
                    <span className="mx-2">|</span>
                    <span>取消原因：{(order as any).cancelReason}</span>
                  </>
                )}
              </div>
            </div>
            
            {order.status !== 'completed' && order.status !== 'cancelled' && (
              <div className="flex justify-end space-x-2">
                {order.status === 'pending' && (
                  <>
                    <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                      查看路线
                    </button>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                      接受订单
                    </button>
                  </>
                )}
                {order.status === 'delivering' && (
                  <>
                    <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      联系客户
                    </button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                      完成配送
                    </button>
                  </>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// 骑手资料组件
const RiderProfile = () => {
  const { user } = useAuthStore();
  
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
      >
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
            <Bike className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{user?.username || '骑手'}</h2>
            <p className="text-gray-600">骑手编号：RID001234</p>
            <p className="text-gray-600">智膳通外卖平台 - 专业配送员</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">基本信息</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">入职时间</span>
                <span>2024-01-01</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">服务区域</span>
                <span>校园全区域</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">配送工具</span>
                <span>电动车</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">联系电话</span>
                <span>138****5678</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">配送数据</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">累计订单</span>
                <span>1,256 单</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">客户好评率</span>
                <span>99.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">平均评分</span>
                <span>4.9 分</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">累计收入</span>
                <span>¥52,340</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// 主仪表板组件
const RiderDashboard = () => {
  const location = useLocation();
  const { user, logout } = useAuthStore();
  const [notifications, setNotifications] = useState([]);

  const navigation = [
    { name: '首页', href: '/rider', icon: Home },
    { name: '订单管理', href: '/rider/orders', icon: Package },
    { name: '配送路线', href: '/rider/routes', icon: Navigation },
    { name: '收入统计', href: '/rider/earnings', icon: DollarSign },
    { name: '我的评价', href: '/rider/reviews', icon: Star },
    { name: '设置', href: '/rider/settings', icon: Settings },
  ];

  const isActive = (href: string) => {
    if (href === '/rider') {
      return location.pathname === '/rider' || location.pathname === '/rider/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
      {/* 顶部导航栏 */}
      <header className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-white/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  智膳通
                </span>
                <p className="text-xs text-gray-500 -mt-1">骑手版</p>
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
                  <Bike className="w-6 h-6" />
                  <span className="hidden md:block">{user?.username}</span>
                </button>
                
                <div className="absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link
                      to="/rider/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/60 transition-colors"
                    >
                      个人资料
                    </Link>
                    <Link
                      to="/rider/settings"
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
                        ? 'bg-green-500 text-white shadow-lg'
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
              <Route path="/" element={<RiderHome />} />
              <Route path="/orders" element={<RiderOrders />} />
              <Route path="/profile" element={<RiderProfile />} />
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
                    ? 'text-green-600'
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

export default RiderDashboard; 