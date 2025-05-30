package com.wotemo.interceptor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.BadSqlGrammarException;
import org.springframework.validation.BindException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {
    // 处理 SQL 错误
    @ExceptionHandler({BadSqlGrammarException.class, SQLException.class, DataAccessException.class})
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public Map<String, Object> handleSqlException(Exception ex) {
        log.error("SQL 执行异常：{}", ex.getMessage(), ex);
        return buildErrorResponse(500, "数据库内部错误，请联系管理员！");
    }

    // 参数校验失败（@Valid）
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Map<String, Object> handleValidationException(MethodArgumentNotValidException ex) {
        log.warn("参数校验失败：{}", ex.getMessage());
        String errorMessage = ex.getBindingResult().getFieldErrors().stream()
                .map(fieldError -> fieldError.getField() + ": " + fieldError.getDefaultMessage())
                .findFirst()
                .orElse("参数不合法");
        return buildErrorResponse(400, errorMessage);
    }

    // 表单参数绑定异常
    @ExceptionHandler(BindException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Map<String, Object> handleBindException(BindException ex) {
        log.warn("表单参数绑定异常：{}", ex.getMessage());
        String errorMessage = ex.getBindingResult().getFieldErrors().stream()
                .map(fieldError -> fieldError.getField() + ": " + fieldError.getDefaultMessage())
                .findFirst()
                .orElse("参数绑定错误");
        return buildErrorResponse(400, errorMessage);
    }

    // 未捕获异常兜底处理
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public Map<String, Object> handleGenericException(Exception ex) {
        log.error("系统未知异常：{}", ex.getMessage(), ex);
        return buildErrorResponse(400, ex.getLocalizedMessage());
    }

    // 返回结构统一封装
    private Map<String, Object> buildErrorResponse(int code, String message) {
        Map<String, Object> map = new HashMap<>();
        map.put("code", code);
        map.put("msg", message);
        map.put("data", null);
        return map;
    }
}
