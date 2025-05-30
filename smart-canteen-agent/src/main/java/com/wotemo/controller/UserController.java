package com.wotemo.controller;

import com.wotemo.model.dto.LoginDTO;
import com.wotemo.model.dto.RegisterDTO;
import com.wotemo.model.entity.Result;
import com.wotemo.model.vo.LoginVO;
import com.wotemo.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController("studentControllerV1")
@RequestMapping("/api/student/v1")
@Tag(name = "Student", description = "学生相关接口")
@RequiredArgsConstructor
@Slf4j
public class UserController {
    private final UserService userService;

    @PostMapping("/register")
    @Operation(summary = "注册账号", description = "注册账号")
    public Result<LoginVO> register(@RequestBody RegisterDTO registerDTO) {
        log.info("注册账号");

        var loginVO = userService.register(registerDTO);

        return Result.success(loginVO);
    }

    @PostMapping("/login")
    @Operation(summary = "登录账号", description = "登录账号")
    public Result<LoginVO> login(@RequestBody LoginDTO loginDTO) {
        log.info("登录账号");

        var loginVO = userService.login(loginDTO);

        return Result.success(loginVO);
    }
}
