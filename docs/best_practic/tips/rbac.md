## 根据管理员的权限显示

前端检测权限显示按钮 例子：

```php

<if condition="\Libs\System\RBAC::ableAccess('Content', 'Content', 'edit')">
    <a href="javascript:;;" onClick="javascript:openwinx('{:U("Content/edit", ["catid" =>$vo['catid'] , "id" => $vo["id"]])}')">修改</a>
    |
</if>

<if condition="\Libs\System\RBAC::ableAccess('Content', 'Content', 'delete')">
    <a href="{:U('Content/delete',array('catid'=>$vo['catid'],'id'=>$vo['id']))}" class="J_ajax_del" >删除</a>
</if>

```