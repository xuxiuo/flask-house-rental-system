# Flask House Rental System

基于 Flask + MySQL 的房屋租赁管理系统

## 技术栈

- Python 3.10
- Flask
- SQLAlchemy
- MySQL
- Bootstrap

## 项目功能

- 首页房源展示
- 房源搜索
- 房源详情查看
- 用户中心
- 房屋推荐（Pearson相关系数）
- 房价预测（线性回归）

## 项目结构

house/
├── app.py
├── models.py
├── index_page.py
├── list_page.py
├── detail_page.py
├── user.py
├── static/
├── templates/
└── utils/

## 数据库导入

```sql
source house.sql;
```
