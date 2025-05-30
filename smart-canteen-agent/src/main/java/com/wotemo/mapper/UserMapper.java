package com.wotemo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.wotemo.model.entity.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper extends BaseMapper<User> {
}
