import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  Phone, 
  Sparkles,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Shield,
  Zap,
  Users,
  Brain,
  GraduationCap,
  Store,
  UserCog,
  Bike
} from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';
import { authApi } from '@/services/api';
import { isValidEmail } from '@/utils';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    role: 'student'
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // 清除对应字段的错误信息
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleInputFocus = (fieldName: string) => {
    setTouched(prev => ({ ...prev, [fieldName]: true }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.username.trim()) {
      newErrors.username = '用户名不能为空';
    } else if (formData.username.length < 3) {
      newErrors.username = '用户名至少需要3个字符';
    }

    if (!isLogin) {
      if (!formData.email.trim()) {
        newErrors.email = '邮箱不能为空';
      } else if (!isValidEmail(formData.email)) {
        newErrors.email = '请输入有效的邮箱地址';
      }

      if (!formData.phone.trim()) {
        newErrors.phone = '手机号不能为空';
      } else if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
        newErrors.phone = '请输入有效的手机号码';
      }

      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = '两次密码输入不一致';
      }
    }

    if (!formData.password.trim()) {
      newErrors.password = '密码不能为空';
    } else if (formData.password.length < 6) {
      newErrors.password = '密码长度至少6位';
    } else if (!/(?=.*[a-zA-Z])(?=.*\d)/.test(formData.password) && !isLogin) {
      newErrors.password = '密码需包含字母和数字';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    try {
      if (isLogin) {
        // 模拟登录成功
        const user = {
          id: 1,
          username: formData.username,
          email: `${formData.username}@example.com`,
          phone: '13800000000',
          role: (formData.role as 'student' | 'merchant' | 'admin' | 'rider' | 'nutritionist') || 'student',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        
        const token = `mock-token-${formData.username}`;
        login(user, token);
        
        // 添加成功动画延迟
        await new Promise(resolve => setTimeout(resolve, 1500));
        navigate('/');
      } else {
        // 模拟注册成功
        const user = {
          id: 100,
          username: formData.username,
          email: formData.email || `${formData.username}@example.com`,
          phone: formData.phone || '13800000000',
          role: (formData.role as 'student' | 'merchant' | 'admin' | 'rider' | 'nutritionist') || 'student',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        
        const token = `mock-token-${formData.username}`;
        login(user, token);
        
        // 添加成功动画延迟
        await new Promise(resolve => setTimeout(resolve, 1500));
        navigate('/');
      }
    } catch (error: any) {
      setErrors({
        ...errors,
        form: error.message || '操作失败，请重试'
      });
    } finally {
      setLoading(false);
    }
  };

  const demoAccounts = [
    { 
      username: 'student001', 
      password: '123456', 
      role: 'student', 
      title: '学生账户',
      description: '体验AI推荐、营养分析',
      icon: GraduationCap,
      gradient: 'from-blue-500 to-green-500'
    },
    { 
      username: 'merchant001', 
      password: '123456', 
      role: 'merchant',
      title: '商家账户',
      description: '体验订单管理、数据分析',
      icon: Store,
      gradient: 'from-indigo-500 to-purple-500'
    },
    { 
      username: 'admin001', 
      password: '123456', 
      role: 'admin',
      title: '管理员账户',
      description: '体验系统管理、用户管理',
      icon: UserCog,
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      username: 'rider001', 
      password: '123456', 
      role: 'rider',
      title: '骑手账户',
      description: '体验配送管理、收入统计',
      icon: Bike,
      gradient: 'from-green-500 to-teal-500'
    },
  ];

  const fillDemoAccount = (account: typeof demoAccounts[0]) => {
    setFormData(prev => ({
      ...prev,
      username: account.username,
      password: account.password,
      role: account.role
    }));
    setErrors({});
  };

  const roleOptions = [
    { value: 'student', label: '学生', icon: GraduationCap, description: '享受AI推荐和营养分析' },
    { value: 'merchant', label: '商家', icon: Store, description: '管理菜品和订单' },
    { value: 'admin', label: '管理员', icon: UserCog, description: '系统管理和数据分析' },
    { value: 'rider', label: '骑手', icon: Bike, description: '配送管理和收入统计' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl"
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

      <div className="w-full max-w-6xl flex bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50 relative z-10">
        {/* 左侧装饰区域 */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 p-12 flex-col justify-center relative overflow-hidden">
          {/* 背景图案 */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.5, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-24 h-24 bg-white/20 rounded-full blur-xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                x: [0, -30, 0],
                y: [0, -50, 0],
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <motion.div variants={itemVariants} className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-3xl font-bold text-white">智膳通</span>
                <p className="text-blue-100 text-sm -mt-1">Smart Canteen</p>
              </div>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-6 leading-tight">
              智慧营养食堂
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                AI Agent系统
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-blue-100 text-lg leading-relaxed mb-8">
              基于先进AI技术的智慧食堂生态系统，为高校师生提供个性化饮食推荐、便捷订餐服务和全面健康管理支持。
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              {[
                { icon: Brain, text: 'AI智能推荐系统' },
                { icon: Shield, text: '营养健康分析' },
                { icon: Zap, text: '便捷订餐服务' },
                { icon: Users, text: '多角色协同管理' }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <Icon className="w-5 h-5 text-blue-200" />
                    <span className="text-blue-100">{feature.text}</span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* 右侧表单区域 */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* 返回首页链接 */}
            <motion.div variants={itemVariants}>
              <Link
                to="/"
                className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8 group transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                返回首页
              </Link>
            </motion.div>

            {/* 标题区域 */}
            <motion.div variants={itemVariants} className="mb-8 text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                {isLogin ? '欢迎回来！' : '创建账户'}
              </h1>
              <p className="text-gray-600 text-lg">
                {isLogin ? '登录您的智膳通账户，继续您的智慧饮食之旅' : '注册智膳通账户，开启您的智慧饮食体验'}
              </p>
            </motion.div>

            {/* 表单 */}
            <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-6">
              {/* 用户名 */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  用户名 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    onFocus={() => handleInputFocus('username')}
                    className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      errors.username ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                    }`}
                    placeholder="请输入用户名"
                  />
                </div>
                <AnimatePresence>
                  {errors.username && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center text-red-600 text-sm"
                    >
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.username}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 注册时显示的额外字段 */}
              <AnimatePresence>
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* 邮箱 */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        邮箱地址 <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => handleInputFocus('email')}
                          className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                            errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                          }`}
                          placeholder="请输入邮箱地址"
                        />
                      </div>
                      <AnimatePresence>
                        {errors.email && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center text-red-600 text-sm"
                          >
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.email}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* 手机号 */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        手机号码 <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => handleInputFocus('phone')}
                          className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                            errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                          }`}
                          placeholder="请输入手机号码"
                        />
                      </div>
                      <AnimatePresence>
                        {errors.phone && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center text-red-600 text-sm"
                          >
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.phone}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* 用户角色 */}
                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-gray-700">
                        选择您的角色 <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {roleOptions.map((option) => {
                          const Icon = option.icon;
                          return (
                            <label
                              key={option.value}
                              className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                                formData.role === option.value
                                  ? 'border-blue-500 bg-blue-50'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <input
                                type="radio"
                                name="role"
                                value={option.value}
                                checked={formData.role === option.value}
                                onChange={handleInputChange}
                                className="sr-only"
                              />
                              <Icon className={`w-5 h-5 mr-3 ${
                                formData.role === option.value ? 'text-blue-600' : 'text-gray-400'
                              }`} />
                              <div>
                                <div className={`font-medium ${
                                  formData.role === option.value ? 'text-blue-900' : 'text-gray-900'
                                }`}>
                                  {option.label}
                                </div>
                                <div className={`text-xs ${
                                  formData.role === option.value ? 'text-blue-600' : 'text-gray-500'
                                }`}>
                                  {option.description}
                                </div>
                              </div>
                              {formData.role === option.value && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute top-2 right-2"
                                >
                                  <CheckCircle className="w-5 h-5 text-blue-600" />
                                </motion.div>
                              )}
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 密码 */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  密码 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    onFocus={() => handleInputFocus('password')}
                    className={`w-full pl-12 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      errors.password ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                    }`}
                    placeholder="请输入密码"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                <AnimatePresence>
                  {errors.password && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center text-red-600 text-sm"
                    >
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.password}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 确认密码（注册时） */}
              <AnimatePresence>
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                  >
                    <label className="block text-sm font-medium text-gray-700">
                      确认密码 <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        onFocus={() => handleInputFocus('confirmPassword')}
                        className={`w-full pl-12 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                          errors.confirmPassword ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                        }`}
                        placeholder="请再次输入密码"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    <AnimatePresence>
                      {errors.confirmPassword && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center text-red-600 text-sm"
                        >
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.confirmPassword}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 错误信息 */}
              <AnimatePresence>
                {errors.form && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-xl"
                  >
                    <div className="flex items-center">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                      <span className="text-red-700 text-sm font-medium">{errors.form}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 提交按钮 */}
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                      处理中...
                    </>
                  ) : (
                    <>
                      {isLogin ? '登录' : '注册'}
                      <motion.div
                        className="ml-2"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        →
                      </motion.div>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </motion.form>

            {/* 切换登录/注册 */}
            <motion.div variants={itemVariants} className="mt-6 text-center">
              <span className="text-gray-600">
                {isLogin ? '还没有账户？' : '已有账户？'}
              </span>
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setErrors({});
                  setTouched({});
                }}
                className="ml-2 text-blue-500 hover:text-blue-600 font-semibold transition-colors"
              >
                {isLogin ? '立即注册' : '立即登录'}
              </button>
            </motion.div>

            {/* 演示账户 */}
            <AnimatePresence>
              {isLogin && (
                <motion.div
                  variants={itemVariants}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8"
                >
                  <div className="text-center mb-4">
                    <span className="text-sm text-gray-500">或使用演示账户快速体验</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {demoAccounts.map((account, index) => {
                      const Icon = account.icon;
                      return (
                        <motion.button
                          key={index}
                          onClick={() => fillDemoAccount(account)}
                          className="group relative p-3 border-2 border-gray-200 rounded-xl hover:border-blue-300 transition-all duration-200 text-left overflow-hidden"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-r ${account.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-200`}></div>
                          <div className="relative z-10 flex items-center">
                            <div className={`w-10 h-10 bg-gradient-to-r ${account.gradient} rounded-lg flex items-center justify-center mr-3`}>
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900 text-sm">{account.title}</div>
                              <div className="text-xs text-gray-500">{account.description}</div>
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 