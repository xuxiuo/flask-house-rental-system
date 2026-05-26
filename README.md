# Flask + MySQL 房屋租赁推荐系统

浏览器
   ↓
Flask路由
   ↓
业务逻辑
   ↓
SQLAlchemy
   ↓
MySQL数据库



## 项目目录：

house2/
├── .idea/                    # PyCharm/IDEA 工程配置（非业务代码）
└── house/                    # ★ 核心应用目录
    ├── app.py                # Flask 主入口，注册蓝图
    ├── settings.py           # 数据库配置
    ├── models.py             # ORM 数据模型（3 张表）
    ├── index_page.py         # 首页 + 关键字联想搜索 API
    ├── list_page.py          # 列表页 + 分页
    ├── detail_page.py        # 详情页 + 图表数据 API + 推荐逻辑
    ├── user.py               # 用户注册/登录/收藏/个人信息
    ├── utils/                # 算法与数据库工具
    │   ├── con_to_db.py      # 原生 PyMySQL 查询（推荐算法用）
    │   ├── pearson_recommend.py  # 皮尔逊协同过滤推荐
    │   └── regression_data.py    # sklearn 线性回归预测
    ├── templates/            # Jinja2 前端页面（5 个）
    │   ├── index.html
    │   ├── list.html
    │   ├── search_list.html
    │   ├── detail_page.html
    │   └── user_page.html
    └── static/               # 静态资源
        ├── css/              # 自定义样式 + Clean Blog 主题
        ├── js/               # 业务 JS + ECharts 图表
        ├── img/              # 图片（模板中引用，仓库中可能缺失）
        ├── scss/             # Clean Blog 主题源码
        └── vendor/           # 第三方库（Bootstrap/jQuery/FontAwesome）

## app.py

:red_circle:核心功能：

​	:one:创建Flask应用实例

​	:two:加载配置类

​	:three:初始化数据库连接

​	:four:注册四个蓝图

**`蓝图`**

蓝图（Blueprint） 是 Flask 框架中用于组织和管理路由的模块化机制。它允许你将应用拆分成多个独立的模块，每个模块可以包含自己的路由、模板、静态文件等。

好处：

​	模块化：每个功能独立管理
​	可维护性：代码结构清晰，易于查找和修改
​	团队协作：不同开发者可以负责不同蓝图
​	复用性：蓝图可以在多个项目中重用
​	命名空间隔离：不同蓝图可以有相同名称的路由

 



