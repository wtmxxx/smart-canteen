package com.wotemo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.wotemo.model.dto.LoginDTO;
import com.wotemo.model.dto.RegisterDTO;
import com.wotemo.model.entity.User;
import com.wotemo.model.vo.LoginVO;

public interface UserService extends IService<User> {
    LoginVO register(RegisterDTO registerDTO);

    LoginVO login(LoginDTO loginDTO);
}
