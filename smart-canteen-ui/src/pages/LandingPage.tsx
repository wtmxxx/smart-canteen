import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  ChefHat, 
  Smartphone,
  BarChart3,
  Users,
  Heart,
  Shield,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
  Award,
  Target,
  Utensils
} from 'lucide-react';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: '🤖 AI智能推荐',
      description: '基于个人健康档案和饮食偏好，AI为您量身定制最适合的营养搭配方案',
      icon: Brain,
      color: 'from-orange-400 to-amber-500',
      delay: 0.1
    },
    {
      title: '🥗 营养分析专家',
      description: '详细的营养成分分析，专业营养师指导，让每一餐都成为健康投资',
      icon: BarChart3,
      color: 'from-green-400 to-emerald-500',
      delay: 0.2
    },
    {
      title: '🛒 便捷智能订餐',
      description: '一键下单，智能配送，实时追踪，让美食体验变得轻松愉悦',
      icon: Smartphone,
      color: 'from-amber-400 to-orange-500',
      delay: 0.3
    },
    {
      title: '💪 健康管理助手',
      description: '记录饮食习惯，追踪健康目标，科学管理您的每日营养摄入',
      icon: Heart,
      color: 'from-green-500 to-teal-500',
      delay: 0.4
    }
  ];

  const userRoles = [
    {
      role: 'student',
      title: '🎓 学生用户',
      subtitle: '智能营养·健康生活',
      description: '为忙碌的校园生活提供个性化营养解决方案 🍽️',
      features: ['🤖 个性化AI推荐', '🥗 营养成分分析', '💪 健康目标设定', '👥 社区互动'],
      gradient: 'from-orange-400 via-amber-400 to-green-400',
      icon: '🎓'
    },
    {
      role: 'merchant',
      title: '🏪 食堂商家',
      subtitle: '智慧经营·数据驱动',
      description: '让每一道菜都成为学生的最爱选择 ⭐',
      features: ['📊 智能订单管理', '📈 销售数据分析', '🔥 菜品优化建议', '👥 客户画像分析'],
      gradient: 'from-green-500 to-teal-500',
      icon: '🏪'
    },
    {
      role: 'admin',
      title: '👨‍💼 系统管理员',
      subtitle: '全局掌控·智能决策',
      description: '用数据驱动校园餐饮生态健康发展 🚀',
      features: ['📊 平台数据监控', '🔒 用户权限管理', '✅ 商家资质审核', '💡 运营决策支持'],
      gradient: 'from-purple-500 to-indigo-500',
      icon: '👨‍💼'
    },
    {
      role: 'rider',
      title: '🚴 配送骑手',
      subtitle: '智能配送·高效送达',
      description: '让美食以最快速度抵达每一位同学 ⚡',
      features: ['🗺️ 智能路径规划', '📱 实时订单管理', '💰 收入统计分析', '🏆 绩效考核系统'],
      gradient: 'from-blue-500 to-cyan-500',
      icon: '🚴'
    }
  ];

  const stats = [
    { label: '😊 活跃用户', value: '10,000+', icon: Users, color: 'from-orange-500 to-amber-500' },
    { label: '🏪 合作食堂', value: '50+', icon: ChefHat, color: 'from-green-500 to-emerald-500' },
    { label: '🍽️ 日均订单', value: '5,000+', icon: Utensils, color: 'from-amber-500 to-orange-500' },
    { label: '⭐ 用户满意度', value: '98%', icon: Award, color: 'from-green-400 to-teal-500' }
  ];

  const testimonials = [
    {
      name: '张同学',
      role: '计算机科学专业',
      content: '智膳通的AI推荐真的太智能了！根据我的健身目标推荐高蛋白低脂餐，一个月瘦了8斤还增肌了！',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: '李师傅',
      role: '第三食堂经理',
      content: '数据分析功能帮助我们优化菜品配置，销量提升30%，学生满意度也大幅提高！',
      rating: 5,
      avatar: '👨‍🍳'
    },
    {
      name: '王营养师',
      role: '校医院营养科',
      content: '平台的营养分析功能非常专业，帮助我们为学生提供更精准的饮食指导建议。',
      rating: 5,
      avatar: '👩‍⚕️'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-green-50">
      {/* 导航栏 */}
      <nav className="bg-white/80 backdrop-blur-lg shadow-sm fixed w-full top-0 z-50 border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  智膳通 🍽️
                </span>
                <p className="text-xs text-gray-500 -mt-1">Smart Canteen</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/login"
                className="group relative px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span className="relative z-10">🚀 开始健康之旅</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* 英雄区域 */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl"
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
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-orange-100/80 rounded-full text-orange-700 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                🍽️ 为忙碌的校园生活提供智慧营养解决方案
              </div>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight"
            >
              智膳通 🍽️
              <span className="block text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-green-500 mt-2">
                让每餐都是最佳选择
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              我们的营养师认证算法分析您的需求，为您匹配专业厨师烹饪的餐食
              <br />
              <span className="text-orange-600 font-semibold">定制您的身体、目标和口味。拥抱更健康的自己！💚</span>
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/login"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center"
              >
                立即开始体验
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl text-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                观看演示视频
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 数据统计 */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 用户目标选择 */}
      <section className="py-20 bg-gradient-to-br from-white/50 to-orange-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-orange-100/80 rounded-full text-orange-700 text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              选择您的目标
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              设定您的
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500"> 健康目标</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              就像Calo一样，我们相信每个人都有不同的健康目标。选择最符合您需求的方向，让AI为您定制专属的营养方案。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="group relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">💪</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  健康减重
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  科学的低卡路里搭配，保持营养平衡的同时帮助您达到理想体重
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">低卡路里</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">高纤维</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">营养均衡</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            <motion.div
              className="group relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🏋️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  营养增肌
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  高蛋白质配餐，配合适量碳水化合物，为您的健身目标提供完美营养支持
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">高蛋白</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">适量碳水</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">增肌餐</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            <motion.div
              className="group relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">😊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  均衡生活
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  注重营养平衡与美味并重，让每一餐都成为生活中的小确幸
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">营养平衡</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">美味优先</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">生活品质</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 mb-6">
              💡 不确定选择哪个？我们的AI会根据您的个人信息和偏好为您推荐最适合的方案
            </p>
            <Link
              to="/login"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>🚀 立即开始定制我的方案</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 核心功能 */}
      <section className="py-20 bg-gradient-to-b from-white/50 to-blue-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 rounded-full text-blue-700 text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              核心功能
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              AI赋能的
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500"> 智慧食堂</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              集成最新AI技术，为食堂生态系统的每个参与者提供智能化、个性化的服务体验
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 用户角色 */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-indigo-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100/80 rounded-full text-indigo-700 text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              多角色服务
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              为每个角色
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"> 量身定制</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              深度理解不同用户群体的需求，提供专业化、个性化的功能体验
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {userRoles.map((role, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="p-8 relative z-10">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${role.gradient} rounded-2xl flex items-center justify-center text-2xl mr-4`}>
                      {role.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{role.title}</h3>
                      <p className={`text-sm font-medium bg-gradient-to-r ${role.gradient} bg-clip-text text-transparent`}>
                        {role.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {role.description}
                  </p>
                  
                  <div className="space-y-3">
                    {role.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      to="/login"
                      className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${role.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                    >
                      立即体验 {role.title}功能
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 用户评价 */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-amber-100/80 rounded-full text-amber-700 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              用户评价
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              用户的
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500"> 真实反馈</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              听听来自学生、商家、营养师的真实声音，了解智膳通如何改变他们的饮食体验
            </p>
          </motion.div>

          <motion.div
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
              <div className="text-center">
                <div className="text-6xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA区域 */}
      <section className="py-20 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              y: [0, -100, 0],
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              准备好开始您的
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">智慧饮食之旅了吗？</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              加入已有超过10,000名用户信赖的智膳通平台，体验AI驱动的个性化饮食服务
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/login"
                className="group relative px-8 py-4 bg-white text-blue-600 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center"
              >
                立即免费注册
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-8 py-4 border-2 border-white/30 text-white rounded-xl text-lg font-semibold hover:border-white/50 hover:bg-white/10 transition-all duration-300">
                了解更多详情
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">智膳通</span>
                  <p className="text-sm text-gray-400 -mt-1">Smart Canteen</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                智慧营养食堂AI Agent系统，基于先进AI技术为高校食堂生态系统提供全方位智能化解决方案，让健康饮食变得简单智能。
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-lg">📧</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-lg">📱</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-lg">🌐</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">产品功能</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">AI智能推荐</li>
                <li className="hover:text-white transition-colors cursor-pointer">营养分析</li>
                <li className="hover:text-white transition-colors cursor-pointer">便捷订餐</li>
                <li className="hover:text-white transition-colors cursor-pointer">健康管理</li>
                <li className="hover:text-white transition-colors cursor-pointer">数据分析</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">用户服务</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">学生用户</li>
                <li className="hover:text-white transition-colors cursor-pointer">食堂商家</li>
                <li className="hover:text-white transition-colors cursor-pointer">系统管理员</li>
                <li className="hover:text-white transition-colors cursor-pointer">配送骑手</li>
                <li className="hover:text-white transition-colors cursor-pointer">营养师</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 text-sm">
                &copy; 2024 智膳通 Smart Canteen. 保留所有权利.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">隐私政策</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">服务条款</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">联系我们</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 