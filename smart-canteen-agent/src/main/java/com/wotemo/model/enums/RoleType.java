package com.wotemo.model.enums;

import lombok.Getter;

@Getter
public enum RoleType {
    STUDENT("student"),
    MERCHANT("merchant"),
    ADMIN("admin"),
    RIDER("rider");

    private final String value;

    RoleType(String value) {
        this.value = value;
    }

    // 可选：通过字符串反向查找枚举
    public static RoleType fromValue(String value) {
        for (RoleType role : RoleType.values()) {
            if (role.value.equalsIgnoreCase(value)) {
                return role;
            }
        }
        throw new IllegalArgumentException("未知的角色类型: " + value);
    }
}
