// 合并CSS类名
export function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(' ');
}

// 格式化价格
export function formatPrice(price: number): string {
  return `¥${price.toFixed(2)}`;
}

// 格式化时间
export function formatTime(time: string | Date): string {
  const date = new Date(time);
  return date.toLocaleString('zh-CN');
}

// 格式化相对时间
export function formatRelativeTime(time: string | Date): string {
  const now = new Date();
  const target = new Date(time);
  const diff = Math.floor((now.getTime() - target.getTime()) / (1000 * 60));
  
  if (diff < 1) return '刚刚';
  if (diff < 60) return `${diff}分钟前`;
  if (diff < 1440) return `${Math.floor(diff / 60)}小时前`;
  if (diff < 43200) return `${Math.floor(diff / 1440)}天前`;
  
  return target.toLocaleDateString('zh-CN');
}

// 防抖函数
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
) {
  let timeoutId: number;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => func(...args), delay);
  };
}

// 图片加载错误处理
export function handleImageError(event: React.SyntheticEvent<HTMLImageElement>) {
  const target = event.target as HTMLImageElement;
  target.src = '/placeholder-food.jpg';
}

// 验证邮箱格式
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 验证手机号格式
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^1[3-9]\d{9}$/;
  return phoneRegex.test(phone);
}

// 计算BMI
export function calculateBMI(weight: number, height: number): number {
  return weight / Math.pow(height / 100, 2);
}

// 深拷贝对象
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }
  
  if (obj instanceof Array) {
    return obj.map(item => deepClone(item)) as T;
  }
  
  if (typeof obj === 'object') {
    const clonedObj = {} as T;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
  
  return obj;
} 