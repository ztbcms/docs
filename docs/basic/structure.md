## 目录结构

```
.
├── app 应用核心目录
│   ├── Application
│   │   ├── Admin 后台管理模块
│   │   ├── Api 接口模块
│   │   ├── Attachment 附件模块
│   │   ├── Content 内容管理
│   │   │   ├── Fields 字段模板
│   │   │   ├── TagLib 标签库
│   │   │   └── View
│   │   │       ├── Addtemplate 内容添加模板页
│   │   │       ├── Category 栏目列表模板页 
│   │   │       ├── Edittemplate  内容编辑模板页
│   │   │       ├── Listtemplate  内容列表模板页
│   │   │       ├── Tags 标签模板页
│   │   ├── Install 系统安装模块
│   │   ├── Migrate 数据迁移模块，数据迁移脚本
│   │   ├── System  应用Model,Service
│   │   ├── Template 模板模块
│   │   ├── Testing 测试样例模块
│   ├── Common 全局通用模块 
│   ├── Core ThinkPHP核心目录
│   ├── Libs  ZTBCMS 系统目录
│   └── Template  前端模板目录
│       └── Default
├── d  上传数据目录
├── runtime  缓存目录
├── statics 静态文件
└── vendor composer第三方法依赖目录

```