export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx330245996f810ccb",
    // 公众号appSecret
    appSecret: "7eaffe950a7bbc99c2a2dd1a14286584",
    // 模板消息id
    templateId: "acNSYKyidsOl0F4BzDhD8_BZ3eBdI3n07sVQARd0C3k",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["o1Q9R6WlJ1UY6Yj6k0bL3cEgcFCc"],
     
    // 信息配置
    // 所在省份
    province: "广东",
    // 所在城市
    city: "广州",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "宝宝", "year": "2002", "date": "12-27", "type": 'new'},
      {"name": "家公", "year": "1993", "date": "08-09", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2022-06-05",
    // 结婚纪念日
    marryDate: "2020-01-04"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
