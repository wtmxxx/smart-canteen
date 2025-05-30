package com.wotemo.utils;

import cn.hutool.jwt.JWT;
import cn.hutool.jwt.JWTUtil;
import com.wotemo.model.entity.User;

import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

public class MyJwtUtil {

    private static final String SECRET_KEY = "MustBeMine";

    /**
     * 生成JWT Token
     *
     * @param userId UUID 字符串
     * @return token 字符串
     */
    public static String generateToken(User user) {
        Map<String, Object> payload = new HashMap<>();
        payload.put("userId", user.getUserId());
        payload.put("username", user.getUsername());
        payload.put("role", user.getRole());
        payload.put("exp", System.currentTimeMillis() + 30 * 24 * 3600 * 1000L); // 7天有效

        return JWT.create()
                .addPayloads(payload)
                .setKey(SECRET_KEY.getBytes(StandardCharsets.UTF_8))
                .sign();
    }

    /**
     * 解析Token并获取用户ID
     *
     * @param token JWT Token 字符串
     * @return 用户ID字符串，若失败返回 null
     */
    public static User getUserFromToken(String token) {
        try {
            JWT jwt = JWTUtil.parseToken(token).setKey(SECRET_KEY.getBytes(StandardCharsets.UTF_8));
            if (Long.parseLong(jwt.getPayload("exp").toString()) < System.currentTimeMillis()) {
                return null; // Token已过期
            }

            Object userId = jwt.getPayload("userId");
            Object username = jwt.getPayload("username");
            Object role = jwt.getPayload("role");
            if (userId == null || username == null || role == null) {
                return null; // Token无效
            } else {
                User user = new User();
                user.setUserId(userId.toString());
                user.setUsername(username.toString());
                user.setRole(role.toString());
                return user; // 返回用户信息
            }
        } catch (Exception e) {
            return null; // 可选：抛出异常或记录日志
        }
    }
}