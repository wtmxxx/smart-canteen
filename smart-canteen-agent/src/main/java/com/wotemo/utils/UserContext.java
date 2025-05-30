package com.wotemo.utils;

import com.wotemo.model.entity.User;

public class UserContext {
    private static final ThreadLocal<User> threadLocal = new ThreadLocal<>();

    /**
     * 获取当前登录用户信息
     *
     * @return 用户id
     */
    public static User getUser() {
        return threadLocal.get();
    }

    /**
     * 保存当前登录用户信息到ThreadLocal
     *
     * @param user 用户
     */
    public static void setUserId(User user) {
        threadLocal.set(user);
    }

    /**
     * 移除当前登录用户信息
     */
    public static void removeUser() {
        threadLocal.remove();
    }
}
