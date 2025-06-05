-- 用户登录表（统一身份认证）
CREATE TABLE "user" (
                       user_id TEXT PRIMARY KEY,
                       username TEXT NOT NULL,
                       password TEXT NOT NULL,
                       role TEXT NOT NULL -- CHECK (role IN ('student', 'merchant', 'admin', 'rider'))
);

-- 学生信息
CREATE TABLE student_info (
                              user_id TEXT PRIMARY KEY,
                              student_number TEXT NOT NULL,
                              college TEXT,
                              height REAL,
                              weight REAL,
                              target TEXT, -- 如增肌、减脂
                              bmi REAL,
                              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 商家信息（食堂或档口）
CREATE TABLE merchant_info (
                               user_id TEXT PRIMARY KEY,
                               shop_name TEXT,
                               contact_phone TEXT,
                               address TEXT,
                               created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 管理员信息
CREATE TABLE admin_info (
                            user_id TEXT PRIMARY KEY,
                            name TEXT,
                            department TEXT,
                            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 骑手信息
CREATE TABLE rider_info (
                            user_id TEXT PRIMARY KEY,
                            name TEXT,
                            phone TEXT,
                            vehicle_type TEXT,
                            today_deliveries INTEGER DEFAULT 0,
                            today_earnings NUMERIC DEFAULT 0
);

-- 菜品表
CREATE TABLE dish (
                        dish_id TEXT PRIMARY KEY,
                        merchant_id TEXT,
                        name TEXT,
                        description TEXT,
                        image_url TEXT,
                        price NUMERIC,
                        is_sold_out BOOLEAN DEFAULT FALSE,
                        tags TEXT[], -- 高蛋白、低脂、素食等
                        calories INTEGER,
                        protein REAL,
                        fat REAL,
                        carbs REAL,
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 菜单（每个商家每天提供的菜品）
CREATE TABLE menu (
                       menu_id TEXT PRIMARY KEY,
                       merchant_id TEXT,
                       date DATE,
                       dish_ids TEXT[], -- 可选
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 订单表
CREATE TABLE "order" (
                        order_id TEXT PRIMARY KEY,
                        student_id TEXT,
                        merchant_id TEXT REFERENCES merchant_info(user_id),
                        rider_id TEXT REFERENCES rider_info(user_id),
                        dish_ids TEXT[], -- 所选菜品
                        total_price NUMERIC,
                        status TEXT CHECK (status IN ('pending', 'preparing', 'delivering', 'delivered', 'cancelled')),
                        delivery_address TEXT,
                        delivery_phone TEXT,
                        note TEXT,
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 健康档案表（对接体检、运动记录）
CREATE TABLE health_record (
                                record_id TEXT PRIMARY KEY,
                                student_id TEXT,
                                height REAL,
                                weight REAL,
                                bmi REAL,
                                blood_pressure TEXT,
                                heart_rate INTEGER,
                                record_date DATE,
                                notes TEXT
);

-- 推荐记录表
CREATE TABLE recommendation (
                                 rec_id TEXT PRIMARY KEY,
                                 student_id TEXT,
                                 dish_id TEXT,
                                 reason TEXT,
                                 date DATE
);

-- 营养日报/周报（简化版本）
CREATE TABLE nutrition_report (
                                   report_id TEXT PRIMARY KEY,
                                   student_id TEXT,
                                   period TEXT CHECK (period IN ('daily', 'weekly')),
                                   calories INTEGER,
                                   protein REAL,
                                   fat REAL,
                                   carbs REAL,
                                   biased_warning TEXT,
                                   report_date DATE
);

-- 社区帖子
CREATE TABLE post (
                       post_id TEXT PRIMARY KEY,
                       student_id TEXT,
                       content TEXT,
                       image_url TEXT,
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 社区评论
CREATE TABLE comment (
                          comment_id TEXT PRIMARY KEY,
                          post_id TEXT,
                          student_id TEXT,
                          content TEXT,
                          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 点赞表
CREATE TABLE "like" (
                       like_id TEXT PRIMARY KEY,
                       post_id TEXT,
                       student_id TEXT,
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 收藏菜品
CREATE TABLE favorite (
                           favorite_id TEXT PRIMARY KEY,
                           student_id TEXT,
                           dish_id TEXT,
                           created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);