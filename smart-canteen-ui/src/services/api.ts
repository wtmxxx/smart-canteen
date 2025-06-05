import axios from 'axios';
import { ApiResponse, User, Dish, Merchant, Order, PaginatedData } from '@/types';

// 创建axios实例
const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Mock数据，当后端不可用时使用
const useMockData = true; // 设置为true启用模拟数据

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth-storage');
    if (token) {
      try {
        const authData = JSON.parse(token);
        if (authData.state?.token) {
          config.headers.Authorization = `Bearer ${authData.state.token}`;
        }
      } catch (error) {
        console.error('解析token失败:', error);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401) {
      // 清除本地存储的认证信息
      localStorage.removeItem('auth-storage');
      // 重定向到登录页
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// 认证相关API
export const authApi = {
  // 登录
  login: (username: string, password: string, role: string = 'student'): Promise<ApiResponse<{ user: User; token: string }>> =>
    api.post('/auth/login', { username, password, role }),
  
  // 注册
  register: (userData: {
    username: string;
    email: string;
    password: string;
    phone: string;
    role: string;
  }): Promise<ApiResponse<{ user: User; token: string }>> =>
    api.post('/auth/register', userData),
  
  // 获取当前用户信息
  getCurrentUser: (): Promise<ApiResponse<User>> =>
    api.get('/auth/me'),
  
  // 退出登录
  logout: (): Promise<ApiResponse<null>> =>
    api.post('/auth/logout'),
};

// 菜品相关API
export const dishApi = {
  // 获取菜品列表
  getDishes: (params?: {
    page?: number;
    pageSize?: number;
    category?: string;
    merchantId?: number;
    keyword?: string;
  }): Promise<ApiResponse<PaginatedData<Dish>>> =>
    api.get('/dishes', { params }),
  
  // 获取菜品详情
  getDishById: (id: number): Promise<ApiResponse<Dish>> =>
    api.get(`/dishes/${id}`),
  
  // 搜索菜品
  searchDishes: (keyword: string): Promise<ApiResponse<Dish[]>> =>
    api.get('/dishes/search', { params: { keyword } }),
  
  // 获取推荐菜品
  getRecommendedDishes: (): Promise<ApiResponse<Dish[]>> =>
    api.get('/dishes/recommended'),
};

// 商家相关API
export const merchantApi = {
  // 获取商家列表
  getMerchants: (): Promise<ApiResponse<Merchant[]>> =>
    api.get('/merchants'),
  
  // 获取商家详情
  getMerchantById: (id: number): Promise<ApiResponse<Merchant>> =>
    api.get(`/merchants/${id}`),
  
  // 获取商家菜品
  getMerchantDishes: (id: number): Promise<ApiResponse<Dish[]>> =>
    api.get(`/merchants/${id}/dishes`),
};

// 订单相关API
export const orderApi = {
  // 创建订单
  createOrder: (orderData: {
    merchantId: number;
    items: Array<{
      dishId: number;
      quantity: number;
      notes?: string;
    }>;
    deliveryAddress: string;
    notes?: string;
  }): Promise<ApiResponse<Order>> =>
    api.post('/orders', orderData),
  
  // 获取用户订单列表
  getUserOrders: (params?: {
    page?: number;
    pageSize?: number;
    status?: string;
  }): Promise<ApiResponse<PaginatedData<Order>>> =>
    api.get('/orders', { params }),
  
  // 获取订单详情
  getOrderById: (id: number): Promise<ApiResponse<Order>> =>
    api.get(`/orders/${id}`),
  
  // 取消订单
  cancelOrder: (id: number): Promise<ApiResponse<null>> =>
    api.put(`/orders/${id}/cancel`),
};

// AI相关API
export const aiApi = {
  // 获取AI推荐
  getRecommendations: (): Promise<ApiResponse<any>> =>
    api.get('/ai/recommendations'),
  
  // AI营养分析
  getNutritionAnalysis: (dishIds: number[]): Promise<ApiResponse<any>> =>
    api.post('/ai/nutrition-analysis', { dishIds }),
  
  // AI聊天
  chat: (message: string): Promise<ApiResponse<{ response: string }>> =>
    api.post('/ai/chat', { message }),
};

export default api; 