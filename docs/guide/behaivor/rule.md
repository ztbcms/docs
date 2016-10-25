## 行为规则使用说明

### 规则定义格式1：

格式： `table:$table|field:$field|condition:$condition|rule:$rule[|cycle:$cycle|max:$max]`

规则字段解释：

- table：要操作的数据表，不需要加表前缀
- field：要操作的字段
- condition：操作的条件，目前支持字符串。条件中引用行为参数，使用`{$parameter}`的形式（该形式只对行为标签参数是为数组的有效，纯碎的参数使用`{$self}`）
- rule：对字段进行的具体操作，目前支持加、减
- cycle：执行周期，单位（小时），表示`$cycle`小时内最多执行`$max`次
- max：单个周期内的最大执行次数（`$cycle`和`$max`必须同时定义，否则无效）


### 规则定义格式2：

格式： `phpfile:$phpfile[|module:$module]`

规则字段解释：

- phpfile：直接调用已经定义好的行为文件。
- module：行为所属模块，没有该参数时，自动定位到 `app\Common\Behavior` 目录。

### 规则定义格式3：

格式： `sql:$sql[|cycle:$cycle|max:$max]`

规则字段解释：

- sql：需要执行的SQL语句，表前缀可以使用`cms_`代替。参数可以使用 `{$parameter}` 的形式（该形式只对行为标签参数是为数组的有效，纯碎的参数使用`{$self}）`
- cycle：执行周期，单位（小时），表示`$cycle`小时内最多执行`$max`次
- max：单个周期内的最大执行次数（`$cycle`和`$max`必须同时定义，否则无效）