// 用户角色类型
export type UserRole = 'student' | 'merchant' | 'admin' | 'rider' | 'nutritionist';

// 用户信息类型
export interface User {
  id: number;
  username: string;
  email: string;
  phone: string;
  avatar?: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

// 学生用户额外信息
export interface StudentProfile extends User {
  studentId: string;
  grade: string;
  major: string;
  healthProfile?: HealthProfile;
}

// 健康档案
export interface HealthProfile {
  height: number;
  weight: number;
  age: number;
  gender: 'male' | 'female';
  allergies: string[];
  preferences: string[];
  healthGoals: string[];
  dailyCalorieTarget: number;
}

// 菜品类型
export interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  nutrition: NutritionInfo;
  ratings: number;
  ratingCount: number;
  isAvailable: boolean;
  soldCount: number;
  merchantId: number;
  tags: string[];
  createdAt: string;
}

// 营养信息
export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sodium: number;
  sugar: number;
}

// 食堂商家
export interface Merchant {
  id: number;
  name: string;
  description: string;
  logo: string;
  address: string;
  phone: string;
  rating: number;
  ratingCount: number;
  openTime: string;
  closeTime: string;
  isOpen: boolean;
  categories: string[];
}

// 订单状态
export type OrderStatus = 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivering' | 'completed' | 'cancelled';

// 订单类型
export interface Order {
  id: number;
  userId: number;
  merchantId: number;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  deliveryAddress: string;
  orderTime: string;
  estimatedDeliveryTime?: string;
  actualDeliveryTime?: string;
  riderId?: number;
  notes?: string;
}

// 订单项
export interface OrderItem {
  dishId: number;
  dish: Dish;
  quantity: number;
  price: number;
  notes?: string;
}

// 购物车项
export interface CartItem {
  dish: Dish;
  quantity: number;
  notes?: string;
}

// AI推荐
export interface AIRecommendation {
  id: number;
  userId: number;
  dishes: Dish[];
  reason: string;
  nutritionAnalysis: string;
  createdAt: string;
}

// 社区帖子
export interface CommunityPost {
  id: number;
  userId: number;
  user: User;
  title: string;
  content: string;
  images: string[];
  likes: number;
  comments: Comment[];
  tags: string[];
  createdAt: string;
}

// 评论
export interface Comment {
  id: number;
  userId: number;
  user: User;
  content: string;
  createdAt: string;
}

// API响应类型
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
  code: number;
}

// 分页数据
export interface PaginatedData<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
} 