## 数据结构

- id

- parent_id
    - int
    - 上一条记录id，方便排除错误记录

- to
    - 记录流入者
    - varchar

- to_type
    - 记录流入者者类型
    - varchar
    
- from
    - 记录流出者
    - varchar

- from_type
    - 记录流出者类型
    - varchar
    
- target
    - 记录来源者
    - varchar(255)

- target_type
    - 记录来源者类型
    - varchar(255)

- income
    - 收入
    - float

- pay
    - 支付
    - float

- balance
    - 余额
    - float

- detail
    - 记录详情
    - Text

- status
    - 记录状态：0在正常，1无效，2冻结
    - int

- create_time
    - int
    - 创建时间

- update_time
    - int
    - 更新时间

- remark
    - 备注信息
