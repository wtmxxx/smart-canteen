package com.wotemo.interceptor;

import cn.hutool.core.util.StrUtil;
import cn.hutool.json.JSONObject;
import cn.hutool.json.JSONUtil;
import com.wotemo.model.entity.User;
import com.wotemo.model.enums.ResultCode;
import com.wotemo.utils.MyJwtUtil;
import com.wotemo.utils.UserContext;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import java.io.IOException;

@Slf4j
@Component
public class AuthInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        // 1. 获取请求头中的用户信息
        String jwtToken = request.getHeader("Authorization");

        User user;
        try {
            if (jwtToken == null || !jwtToken.startsWith("Bearer ")) {
                throw new RuntimeException("Token is missing or invalid format.");
            }
            user = MyJwtUtil.getUserFromToken(jwtToken.substring(7));
        } catch (Exception e) {
            sendUnauthorizedResponse(response);
            return false;
        }

        // 2. 判断是否为空
        if (user != null && StrUtil.isNotBlank(user.getUserId()) &&
                StrUtil.isNotBlank(user.getUsername()) &&
                StrUtil.isNotBlank(user.getRole())) {
            // 不为空，保存到ThreadLocal
            UserContext.setUserId(user);
            return true;
        }

        sendUnauthorizedResponse(response);
        return false;
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        // 移除用户
        UserContext.removeUser();
    }

    private void sendUnauthorizedResponse(HttpServletResponse response) {
        try {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.setContentType("application/json;charset=UTF-8");

            JSONObject errorResponse = JSONUtil.createObj()
                    .set("code", ResultCode.UNAUTHORIZED.getCode())
                    .set("msg", ResultCode.UNAUTHORIZED.getMessage())
                    .set("data", null);

            response.getWriter().write(errorResponse.toString());
        } catch (IOException e) {
            log.error("响应未授权信息失败", e);
        }
    }
}
