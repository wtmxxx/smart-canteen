package com.wotemo.service.impl;

import cn.hutool.core.lang.UUID;
import cn.hutool.crypto.digest.BCrypt;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.wotemo.mapper.UserMapper;
import com.wotemo.model.dto.LoginDTO;
import com.wotemo.model.dto.RegisterDTO;
import com.wotemo.model.entity.User;
import com.wotemo.model.enums.RoleType;
import com.wotemo.model.vo.LoginVO;
import com.wotemo.service.UserService;
import com.wotemo.utils.MyJwtUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

    @Override
    public LoginVO register(RegisterDTO registerDTO) {

        // 1. 检查用户名是否已注册
        User existing = this.getOne(new LambdaQueryWrapper<User>()
                .eq(User::getUsername, registerDTO.getUsername())
        );
        if (existing != null) {
            throw new RuntimeException("该用户名已注册");
        }

        // 2. 加密密码
        String hashedPassword = BCrypt.hashpw(registerDTO.getPassword());

        // 3. 构建实体对象
        User user = User.builder()
                .userId(UUID.randomUUID(true).toString())
                .username(registerDTO.getUsername())
                .password(hashedPassword)
                .role(RoleType.fromValue(registerDTO.getRole()).getValue())
                .build();

        // 4. 保存用户
        this.save(user);

        // 5. 生成JWT
        String token = MyJwtUtil.generateToken(user);

        return new LoginVO(token);
    }

    @Override
    public LoginVO login(LoginDTO loginDTO) {
        // 1. 查询用户是否存在
        User user = this.getOne(new LambdaQueryWrapper<User>()
                .eq(User::getUsername, loginDTO.getUsername())
        );

        if (user == null) {
            throw new RuntimeException("用户名未注册");
        }

        // 2. 校验密码
        if (!BCrypt.checkpw(loginDTO.getPassword(), user.getPassword())) {
            throw new RuntimeException("密码错误");
        }

        if (!user.getRole().equals(RoleType.fromValue(loginDTO.getRole()).getValue())) {
            throw new RuntimeException("角色不匹配");
        }

        // 3. 生成 JWT
        String token = MyJwtUtil.generateToken(user);

        return new LoginVO(token);
    }
}
