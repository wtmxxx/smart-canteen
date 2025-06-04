package tgy2.mbm01.agent.agent.task;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import kd.bos.form.gpt.IGPTAction;

import java.util.*;

public class GetFoodList implements IGPTAction {
    @Override
    public Map<String, String> invokeAction(String action, Map<String, String> params) {
        System.out.println("GetFoodList action: " + action + " invoked with params: " + params);

        List<JSONObject> foodList = new ArrayList<>();

        foodList.add(createFood("1", "宫保鸡丁", 25.0, "香辣口味，搭配花生"));
        foodList.add(createFood("2", "鱼香肉丝", 22.0, "微辣酸甜，经典川菜"));
        foodList.add(createFood("3", "红烧排骨", 30.0, "软烂入味，浓郁酱香"));
        foodList.add(createFood("4", "麻婆豆腐", 18.0, "麻辣鲜香，口感细腻"));
        foodList.add(createFood("5", "西红柿炒鸡蛋", 15.0, "家常经典，酸甜可口"));

        String json = JSON.toJSONString(foodList);

        Map<String, String> result = new HashMap<>();
        result.put("foodList", json);
        return result;
    }

    private JSONObject createFood(String id, String name, double price, String description) {
        JSONObject food = new JSONObject();
        food.put("id", id);
        food.put("name", name);
        food.put("price", price);
        food.put("description", description);
        return food;
    }
}
