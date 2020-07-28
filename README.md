## 联盟魔网API文档

### 文章API

#### 1.获取全部文章

**路径**：/api/v3/article

**方法**：GET

**参数**：

| 参数类型 |  字段   | 属性 |
| :------: | :-----: | :--: |
|  query   | *typeId | int  |

> 说明：带`*`号字段为可选参数

**返回值：**

```json
{
    "data": [
        {
            "id": 12,
            "title": "test_title111",
            "introduce": "test_introduce111",
            "addTime": "123123123111",
            "typeName": "编程技能",
            "username": "Neekko33"
        },
        {
            "id": 10,
            "title": "Linux操作系统常用命令",
            "introduce": "",
            "addTime": "0",
            "typeName": "编程技能",
            "username": "Neekko33"
        }
    ],
    "code": 0,
    "openId": 1587365911497,
    "msg": "请求成功"
}
```

#### 2.根据ID获取文章

**路径**：/api/v3/article/:id

**方法**：GET

**参数**：

| 参数类型 | 字段 |  属性  |
| :------: | :--: | :----: |
|  param   |  id  | number |

**返回值：**

```json
{
    "data": [
        {
            "id": 1,
            "title": "React基础部分笔记",
            "introduce": "",
            "content": "",
            "typeId": 1,
            "userId": 1,
            "addTime": "0",
            "typeName": "编程技能",
            "username": "Neekko33"
        }
    ],
    "code": 0,
    "openId": 1587366177116,
    "msg": "请求成功"
}
```

#### 4.添加文章

**路径**：/api/v3/article

**方法**：POST

**参数**：

| 参数类型 |   字段    |  属性  |
| :------: | :-------: | :----: |
|   body   |   title   | string |
|    -     |  content  | string |
|    -     | introduce | string |
|    -     |  addTime  | number |
|    -     |  typeId   | number |
|    -     |  userId   | number |

**返回值**：

```json
{
    "code": 0,
    "openId": 1587366225413,
    "msg": "请求成功"
}
```

#### 5.删除文章

**路径**：/api/v3/article/:id

**方法**：DELETE

**参数**：

| 参数类型 | 字段 |  属性  |
| :------: | :--: | :----: |
|  param   |  id  | number |

**返回值**：

```json
{
    "code": 0,
    "openId": 1587366225413,
    "msg": "请求成功"
}
```

#### 6.修改文章

**路径**：/api/v3/article/:id

**方法**：PUT

**参数**：

| 参数类型 | 字段 |  属性  |
| :------: | :--: | :----: |
|   body   |  id  | number |

**返回值**：

```json
{
    "code": 0,
    "openId": 1587366225413,
    "msg": "请求成功"
}
```

### 用户API

#### 1. 登陆

**路径**：/api/v3/login

**方法**：POST

**参数**：

| 参数类型 |   字段   |  属性  |
| :------: | :------: | :----: |
|   body   | username | string |
|    -     | password | string |

**返回值**：

```json
{
    "data": [
        {
            "id": 1,
            "username": "Neekko33"
        }
    ],
    "code": 0,
    "openId": 1587378157795,
    "msg": "请求成功"
}
```

### 类型API

#### 1.增加类型

**路径**：/api/v3/type

**方法**：POST

**参数**：

| 参数类型 |   字段   |  属性  |
| :------: | :------: | :----: |
|   body   | typeName | string |

**返回值**：

```json
{
    "code": 0,
    "openId": 1587366225413,
    "msg": "请求成功"
}
```

#### 2.删除类型

**路径**：/v3/type/:id

**方法**：DELETE

**参数**：

| 参数类型 |   字段   |  属性  |
| :------: | :------: | :----: |
|   body   | username | string |

**返回值**：

```json
{
    "code": 0,
    "openId": 1587366225413,
    "msg": "请求成功"
}
```

#### 3.修改类型

**路径**：/api/v3/type/:id

**方法**：PUT

**参数**：

| 参数类型 |   字段   |  属性  |
| :------: | :------: | :----: |
|   body   | username | string |
|    -     | password | string |

**返回值**：

```json
{
    "code": 0,
    "openId": 1587366225413,
    "msg": "请求成功"
}
```

#### 4.获取全部类型

**路径**：/api/v3/type

**方法**：GET

**返回值**：

```json
{
    "data": [
        {
            "id": 1,
            "typeName": "编程技能"
        },
        {
            "id": 2,
            "typeName": "生活随笔"
        }
    ],
    "code": 0,
    "openId": 1587366303501,
    "msg": "请求成功"
}
```

### 留言API

#### 1.增加留言

**路径**：/api/v3/message

**方法**：POST

**参数**：

| 参数类型 |   字段   |  属性  |
| :------: | :------: | :----: |
|   body   | typeName | string |

**返回值**：

```json
{
    "code": 0,
    "openId": 1587366225413,
    "msg": "请求成功"
}
```

#### 2.删除留言

**路径**：/api/v3/message/:id

**方法**：DELETE

**参数**：

| 参数类型 | 字段 |  属性  |
| :------: | :--: | :----: |
|  param   |  id  | number |

**返回值**：

```json
{
    "code": 0,
    "openId": 1587366225413,
    "msg": "请求成功"
}
```

#### 3.获取全部留言

**路径**：/api/v3/message

**方法**：GET

**返回值：**

```json
{
    "data": [
        {
            "id": 8,
            "createTime": "1586597696625",
            "content": "",
            "editorName": ""
        },
        {
            "id": 7,
            "createTime": "1585971381817",
            "content": "",
            "editorName": ""
        }
    ],
    "code": 0,
    "openId": 1587366398449,
    "msg": "请求成功"
}
```

### 文件API

#### 1.上传图片

**路径**：/api/v3/file

**方法**：POST

**参数**：

Content-Type : multipart/form-data

| 参数类型  | 字段 | 属性 |
| :-------: | :--: | :--: |
| form-data | file |  -   |

### YYSTV API

#### 1.获取全部数据

**路径：**/api/v3/yysTV

**方法**：GET

**返回值**：

```json
{
    "data": [
        {
            "id": 1,
            "title": "只狼手办、西施惠粘土：我们的淘宝小店上新货啦~",
            "href": "https://www.yystv.cn/p/6448",
            "bg": "https://alioss.yystv.cn/cover/7fa6676463de5b5be753262b56309efe.jpg"
        },
        {
            "id": 2,
            "title": "【白夜谈】啥都会变，除了蒂法的美",
            "href": "https://www.yystv.cn/p/6458",
            "bg": "https://alioss.yystv.cn/cover/e76dcd3151cd7b2ffeed7998e12b1861.jpg"
        }
    ],
    "code": 0,
    "openId": 1587366694479,
    "msg": "请求成功"
}
```



