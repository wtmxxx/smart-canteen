import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  UtensilsCrossed, 
  ShoppingCart, 
  Heart, 
  MessageSquare, 
  Bot,
  User,
  Bell,
  Search,
  TrendingUp,
  Calendar,
  Target,
  Award,
  Sparkles,
  Zap,
  Brain,
  Activity,
  Clock,
  Star,
  ChefHat,
  MapPin,
  Plus,
  Minus,
  Eye,
  Filter,
  ArrowRight,
  CheckCircle,
  RefreshCw
} from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';
import { useCartStore } from '@/stores/cartStore';
import { Dish, CartItem } from '@/types';

// 智能推荐菜品数据
const recommendedDishes: Dish[] = [
  {
    id: 1,
    name: '高蛋白鸡胸肉沙拉',
    description: '根据您的健身目标推荐，富含优质蛋白质',
    price: 22.8,
    images: ['/dish1.jpg'],
    category: '健康轻食',
    nutrition: {
      calories: 285,
      protein: 32,
      carbs: 15,
      fat: 8,
      fiber: 5,
      sodium: 480,
      sugar: 3
    },
    ratings: 4.8,
    ratingCount: 156,
    isAvailable: true,
    soldCount: 230,
    merchantId: 1,
    tags: ['高蛋白', '低脂', '健身推荐'],
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    name: '营养均衡套餐',
    description: '科学搭配，满足一日营养需求',
    price: 18.5,
    images: ['/dish2.jpg'],
    category: '套餐',
    nutrition: {
      calories: 420,
      protein: 25,
      carbs: 45,
      fat: 12,
      fiber: 8,
      sodium: 650,
      sugar: 6
    },
    ratings: 4.6,
    ratingCount: 89,
    isAvailable: true,
    soldCount: 145,
    merchantId: 2,
    tags: ['营养均衡', '经济实惠'],
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 3,
    name: '低卡蔬食料理',
    description: '新鲜蔬菜，低热量高纤维',
    price: 16.0,
    images: ['/dish3.jpg'],
    category: '素食',
    nutrition: {
      calories: 180,
      protein: 12,
      carbs: 28,
      fat: 4,
      fiber: 12,
      sodium: 320,
      sugar: 8
    },
    ratings: 4.7,
    ratingCount: 67,
    isAvailable: true,
    soldCount: 98,
    merchantId: 3,
    tags: ['低卡', '素食', '高纤维'],
    createdAt: '2024-01-01T00:00:00Z'
  }
];

// AI推荐理由数据
const aiReasons = [
  '适合您的增肌目标，蛋白质含量丰富',
  '营养搭配均衡，符合您的日常需求',
  '助您控制体重，增加膳食纤维摄入'
];

// 食堂名称数据
const canteenNames = ['第一食堂', '第二食堂', '第三食堂'];

// 学生主页组件
const StudentHome = () => {
  const { user } = useAuthStore();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [nutritionData, setNutritionData] = useState({
    calories: { current: 432, target: 1800, percentage: 24 },
    protein: { current: 28, target: 120, percentage: 23 },
    carbs: { current: 45, target: 200, percentage: 22 },
    fat: { current: 15, target: 60, percentage: 25 }
  });

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

  const statsCards = [
    {
      title: '今日摄入',
      value: '432',
      unit: 'kcal',
      target: '1800',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      percentage: 24
    },
    {
      title: '本周订单',
      value: '12',
      unit: '单',
      change: '+3',
      icon: Calendar,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: '健康分数',
      value: '85',
      unit: '分',
      change: '+5',
      icon: Award,
      color: 'from-orange-500 to-amber-500'
    },
    {
      title: 'AI推荐',
      value: '98%',
      unit: '匹配度',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* 智能欢迎横幅 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 rounded-2xl p-8 text-white"
      >
        {/* 背景装饰 */}
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
              className="text-blue-100 text-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              今天为您推荐营养均衡的美味餐食
            </motion.p>
            <motion.div 
              className="flex items-center mt-4 text-blue-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              <span>AI已为您准备了3道个性化推荐</span>
            </motion.div>
          </div>
          <motion.div 
            className="text-right"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-3xl font-bold">{nutritionData.calories.current}</div>
            <div className="text-blue-100">/ {nutritionData.calories.target} kcal</div>
            <div className="text-sm text-blue-200 mt-1">今日卡路里目标</div>
          </motion.div>
        </div>
      </motion.div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((card, index) => {
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
                {card.change && (
                  <span className="text-green-500 text-sm font-medium flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {card.change}
                  </span>
                )}
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">{card.title}</p>
                <div className="flex items-baseline space-x-1">
                  <p className="text-2xl font-bold text-gray-800">{card.value}</p>
                  <span className="text-gray-500 text-sm">{card.unit}</span>
                </div>
                {card.target && (
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>进度</span>
                      <span>{card.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className={`h-2 bg-gradient-to-r ${card.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${card.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* AI智能推荐 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">AI为您推荐</h2>
              <p className="text-gray-600">基于您的健康目标和饮食偏好</p>
            </div>
          </div>
          <button className="text-blue-500 hover:text-blue-600 font-medium flex items-center">
            <RefreshCw className="w-4 h-4 mr-2" />
            刷新推荐
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedDishes.map((dish, index) => (
            <DishCard 
              key={dish.id} 
              dish={dish} 
              index={index} 
              aiReason={aiReasons[index]}
              canteenName={canteenNames[index]}
            />
          ))}
        </div>
      </motion.div>

      {/* 营养分析仪表板 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">今日营养摄入分析</h2>
              <p className="text-gray-600">实时追踪您的营养目标</p>
            </div>
          </div>
        </div>

        <NutritionDashboard data={nutritionData} />
      </motion.div>
    </div>
  );
};

// 菜品卡片组件
const DishCard = ({ 
  dish, 
  index, 
  aiReason, 
  canteenName 
}: { 
  dish: Dish; 
  index: number; 
  aiReason: string; 
  canteenName: string; 
}) => {
  const { addItem } = useCartStore();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    // 模拟添加延迟
    await new Promise(resolve => setTimeout(resolve, 800));
    addItem(dish);
    setIsAdding(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      {/* 菜品图片 */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-3 left-3 flex space-x-2">
          {dish.tags.map((tag: string, tagIndex: number) => (
            <span
              key={tagIndex}
              className="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute top-3 right-3">
          <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            <span className="text-sm font-medium">{dish.ratings}</span>
          </div>
        </div>
        
        {/* AI推荐标识 */}
        <div className="absolute bottom-3 left-3">
          <div className="flex items-center bg-purple-500/90 backdrop-blur-sm text-white rounded-full px-3 py-1">
            <Sparkles className="w-4 h-4 mr-1" />
            <span className="text-xs font-medium">AI推荐</span>
          </div>
        </div>
      </div>

      {/* 菜品信息 */}
      <div className="p-4">
        <h3 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {dish.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3 leading-relaxed">
          {dish.description}
        </p>
        
        {/* AI推荐理由 */}
        <div className="flex items-start mb-3 p-2 bg-purple-50 rounded-lg">
          <Brain className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
          <p className="text-xs text-purple-700">{aiReason}</p>
        </div>

        {/* 营养信息 */}
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Zap className="w-4 h-4 mr-1 text-orange-500" />
            <span>{dish.nutrition.calories} kcal</span>
          </div>
          <div className="flex items-center">
            <Activity className="w-4 h-4 mr-1 text-green-500" />
            <span>{dish.nutrition.protein}g 蛋白质</span>
          </div>
        </div>

        {/* 食堂信息 */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{canteenName}</span>
        </div>

        {/* 价格和操作 */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-red-500">¥{dish.price}</span>
          </div>
          <motion.button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence>
              {isAdding ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                  />
                  添加中...
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  加入购物车
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// 营养仪表板组件
const NutritionDashboard = ({ data }: { data: any }) => {
  const nutritionItems = [
    { key: 'calories', label: '卡路里', unit: 'kcal', color: 'from-blue-500 to-cyan-500' },
    { key: 'protein', label: '蛋白质', unit: 'g', color: 'from-green-500 to-emerald-500' },
    { key: 'carbs', label: '碳水化合物', unit: 'g', color: 'from-orange-500 to-amber-500' },
    { key: 'fat', label: '脂肪', unit: 'g', color: 'from-purple-500 to-pink-500' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {nutritionItems.map((item, index) => {
        const nutrition = data[item.key];
        const circumference = 2 * Math.PI * 15.9155;
        const strokeDasharray = `${(nutrition.percentage / 100) * circumference} ${circumference}`;
        
        return (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.label}</h3>
              <div className="relative w-20 h-20 mx-auto mb-4">
                {/* 圆形进度条 */}
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={index === 0 ? '#3b82f6' : index === 1 ? '#10b981' : index === 2 ? '#f59e0b' : '#a855f7'}
                    strokeWidth="2"
                    strokeDasharray={strokeDasharray}
                    strokeLinecap="round"
                    style={{
                      transition: 'stroke-dasharray 1s ease-in-out',
                      transitionDelay: `${index * 0.2}s`
                    }}
                  />
                </svg>
                {/* 中心数字 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-gray-800">{nutrition.percentage}%</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">已摄入</span>
                  <span className="font-medium">{nutrition.current} {item.unit}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">目标</span>
                  <span className="text-gray-500">{nutrition.target} {item.unit}</span>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

// 菜单浏览组件
const StudentMenu = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const categories = ['全部', '主食', '小炒', '汤类', '饮品', '套餐', '素食'];
  
  const canteens = [
    { id: 1, name: '第一食堂', rating: 4.5, distance: '200m', status: '营业中' },
    { id: 2, name: '第二食堂', rating: 4.3, distance: '150m', status: '营业中' },
    { id: 3, name: '第三食堂', rating: 4.7, distance: '300m', status: '营业中' },
    { id: 4, name: '第四食堂', rating: 4.2, distance: '400m', status: '营业中' },
    { id: 5, name: '清真食堂', rating: 4.6, distance: '250m', status: '营业中' },
    { id: 6, name: '西餐厅', rating: 4.4, distance: '500m', status: '营业中' }
  ];

  return (
    <div className="space-y-6">
      {/* 搜索和筛选 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl p-6"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="搜索菜品、食堂..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 食堂列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {canteens.map((canteen, index) => (
          <motion.div
            key={canteen.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="h-32 bg-gradient-to-br from-blue-100 to-green-100 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute top-3 right-3">
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {canteen.status}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {canteen.name}
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span>{canteen.rating}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{canteen.distance}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">营业时间：7:00-21:00</span>
                <Link 
                  to={`/student/menu/${canteen.id}`}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:shadow-lg transition-all duration-300"
                >
                  查看菜品
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// 订单管理组件
const StudentOrders = () => {
  const [activeTab, setActiveTab] = useState('全部');
  const tabs = ['全部', '待支付', '备餐中', '配送中', '已完成'];

  const orders = [
    { id: 1, number: 'SC202401000001', time: '2024-01-15 12:30', status: '配送中', total: 28.5 },
    { id: 2, number: 'SC202401000002', time: '2024-01-15 11:20', status: '已完成', total: 18.8 },
    { id: 3, number: 'SC202401000003', time: '2024-01-14 19:15', status: '已完成', total: 35.0 }
  ];

  return (
    <div className="space-y-6">
      {/* 标签筛选 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl p-6"
      >
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
      </motion.div>

      {/* 订单列表 */}
      <div className="space-y-4">
        {orders.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-gray-800">订单号：{order.number}</h3>
                <p className="text-sm text-gray-600">{order.time}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                order.status === '配送中' ? 'bg-blue-100 text-blue-800' :
                order.status === '已完成' ? 'bg-green-100 text-green-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {order.status}
              </span>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                <div className="flex-1">
                  <h4 className="font-medium">宫保鸡丁套餐</h4>
                  <p className="text-sm text-gray-600">第{order.id}食堂</p>
                  <p className="text-sm text-gray-600">数量：1</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-lg">¥{order.total}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-2 mt-4">
              {order.status === '配送中' && (
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  联系骑手
                </button>
              )}
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
                {order.status === '已完成' ? '再次购买' : '查看详情'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// 个人资料组件
const StudentProfile = () => {
  const { user } = useAuthStore();
  
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl p-6"
      >
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{user?.username || '学生用户'}</h2>
            <p className="text-gray-600">学号：2021001234</p>
            <p className="text-gray-600">计算机科学与技术专业</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">基本信息</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">身高</span>
                <span>175 cm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">体重</span>
                <span>70 kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">BMI</span>
                <span>22.9</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">健康目标</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">每日卡路里目标</span>
                <span>1,800 kcal</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">运动频率</span>
                <span>每周3次</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">饮食偏好</span>
                <span>少油少盐</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// 主仪表板组件
const StudentDashboard = () => {
  const location = useLocation();
  const { user, logout } = useAuthStore();
  const { items } = useCartStore();
  const [notifications, setNotifications] = useState([]);

  const navigation = [
    { name: '首页', href: '/student', icon: Home },
    { name: '菜单', href: '/student/menu', icon: UtensilsCrossed },
    { name: '订单', href: '/student/orders', icon: ShoppingCart },
    { name: '收藏', href: '/student/favorites', icon: Heart },
    { name: '社区', href: '/student/community', icon: MessageSquare },
    { name: 'AI助手', href: '/student/ai', icon: Bot },
  ];

  const isActive = (href: string) => {
    if (href === '/student') {
      return location.pathname === '/student' || location.pathname === '/student/';
    }
    return location.pathname.startsWith(href);
  };

  const totalItems = items?.length || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* 顶部导航栏 */}
      <header className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-white/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  智膳通
                </span>
                <p className="text-xs text-gray-500 -mt-1">学生版</p>
              </div>
            </div>

            {/* 右侧菜单 */}
            <div className="flex items-center space-x-4">
              {/* 购物车 */}
              <Link to="/student/cart" className="relative p-2 text-gray-600 hover:text-gray-800 transition-colors">
                <ShoppingCart className="w-6 h-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>

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
                  <User className="w-6 h-6" />
                  <span className="hidden md:block">{user?.username}</span>
                </button>
                
                {/* 下拉菜单 */}
                <div className="absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link
                      to="/student/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/60 transition-colors"
                    >
                      个人资料
                    </Link>
                    <Link
                      to="/student/settings"
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
                        ? 'bg-blue-500 text-white shadow-lg'
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
              <Route path="/" element={<StudentHome />} />
              <Route path="/menu" element={<StudentMenu />} />
              <Route path="/orders" element={<StudentOrders />} />
              <Route path="/profile" element={<StudentProfile />} />
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
                    ? 'text-blue-600'
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

export default StudentDashboard; 