---
title: .Net之WebAPI
date: '2022/08/25'
publish: true
categories:
 - dotNet
tags:
 - webapi
---
# 介绍

通过一个简单的项目，总结一下常用的几种WebApi编写方式以及请求方式。

> 本文示例代码环境：vs2019、net5、MySQL

# 正文前准备

新创建了一个.Net5 WebAPI程序，安装组件

```
    <PackageReference Include="AutoMapper" Version="10.1.1" />
    <PackageReference Include="AutoMapper.Extensions.Microsoft.DependencyInjection" Version="8.1.1" />
    <PackageReference Include="Common.EFCoreConfigurations" Version="1.0.0" /> <!--自己测试使用封装的nuget包-->
    <PackageReference Include="Microsoft.AspNetCore.Mvc.NewtonsoftJson" Version="5.0.6" />
    <PackageReference Include="Swashbuckle.AspNetCore" Version="5.6.3" />
```

ConfigureServices配置NewtonsoftJson以及Automapper和操作数据库代码

```
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers().AddNewtonsoftJson();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "MyWebApi", Version = "v1" });
            });
            // 自己测试使用所以封装了一个连接数据库的操作
            services.AddMySQLService<OpenContext>("Server=localhost;Database=test;Port=3306;charset=utf8;uid=root;pwd=123456;");
            
            //注入AutoMapper
            services.AddAutoMapper(Assembly.GetExecutingAssembly().DefinedTypes.Where(t => typeof(Profile).GetTypeInfo()
            .IsAssignableFrom(t.AsType())).Select(t => t.AsType()).ToArray());
        }
```

> 注意：在Net core3.0以后，微软移除了Newtonsoft.Json，而使用了System.Text.Json，所以依赖于Newtonsoft.Json的组件将不可用，需要安装 Microsoft.AspNetCore.Mvc.NewtonsoftJson 包

新增一个用户控制器，里面包含了get、post、put、patch、delete几种类型的接口。这里先不贴代码，一点一点看。通过一个用户的添加、修改、删除作为一个演示的流程。

> 记得配置允许跨域请求，要不js请求会报错。详情看[此处](https://mp.weixin.qq.com/s/5MEVtDhHmdmjXe2x-yr6dg)

数据表结构如下

![image.png](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1621257687958-648d6f71-f8ce-4ea9-bb89-6879a3cbc0c6.png)

# POST

约定用于向服务端提交数据操作，请求时候参数放在参数FromBody传递，这里我们用于添加用户操作

## 前端

```
    var par = { "account": "张三", "passWord": "123456" };
    $.ajax({
        type: "post",
        dataType: 'json',
        contentType: "application/json",
        url: "http://localhost:5000/api/User",
        data: JSON.stringify(par),
        success: function (data) {
            console.log(data);
        }
    });
```

## 后端

```
        [HttpPost]
        public async Task<string> AddAsync(AddUserVm dto)
        {
            var exist = await _context.Set<User>().AsNoTracking().AnyAsync(t => !t.IsValid && t.Account == dto.Account);
            if (exist)
                throw new Exception("帐号重复");

            var user = _mapper.Map<User>(dto);

            await _context.Set<User>().AddAsync(user);
            await _context.SaveChangesAsync();
            return user.Id;
        }
```

## Postman

URL：http://localhost:5000/api/User

![image.png](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1621242710618-7743854a-d8e2-4a7f-9a03-f0c62f74ba14.png)

> 传递参数格式为json格式，请求头部默认添加："Content-Type", "application/json"

# GET

传递参数的本质是url字符串拼接，Request-Head头部传递，Request-Body中不能传递，查询我们刚才添加的用户信息

## 后端

```
        [HttpGet]
        public async Task<ActionResult<List<User>>> Get()
        {
            return await _context.Set<User>().AsNoTracking().ToListAsync().ConfigureAwait(false);
        }
```

> 本次示例直接将实体类返回了，生产环境不建议如此操作。

## 前端

```
    $.ajax({
        type: "get",
        url: "http://localhost:5000/api/User",
        contentType: "application/json",
        success: function (data, status) {
            console.log(JSON.stringify(data));
        }
    });
```

## Postman

url：http://localhost:5000/api/User

返回结果

![image.png](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1621241621532-8ba372f2-de88-4fd1-9473-4bf3b12c3f2f.png)

# PUT

更新用户信息

## 前端

```
    var par = { "account": "张三", "passWord": "123456" };
    $.ajax({
        url: "http://localhost:5000/api/User/1394282152006258688",
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify(par),
        success: function (result) {
            console.log(result);
        }
    });
```

## 后端

```
        [HttpPut("{id}")]
        public async Task<ActionResult> Put(string id, [FromBody] UpdateUserVm dto)
        {
            var entity = await _context.Set<User>().FindAsync(id).ConfigureAwait(false);
            if (entity is null)
                return NotFound();
            if (!string.IsNullOrWhiteSpace(dto.Account))
                entity.Account = dto.Account;
            if (!string.IsNullOrWhiteSpace(dto.PassWord))
                entity.PassWord = dto.PassWord;
            _context.Set<User>().Update(entity);
            await _context.SaveChangesAsync();
            return Ok("成功");
        }
```

## Postman

URL：http://localhost:5000/api/User/1394282152006258688

参数传递：Body=>raw=>json

```
{
  "account": "张三",
  "passWord": "333333"
}
```

![image.png](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1621258868977-e2b81899-444d-4cda-99e4-dd6c840a5b0d.png)

# DELETE

删除用户信息

## 前端

```
    $.ajax({
        url: "http://localhost:5000/api/User/1394282152006258688",
        type: "DELETE",
        success: function (result) {
            console.log(result);
        }
    });
```

## 后端

```
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteAsync(string id)
        {
            var entity = await _context.Set<User>().FindAsync(id).ConfigureAwait(false);
            if (entity is null)
                return NotFound();

            entity.IsValid = false;
            _context.Update(entity);
            await _context.SaveChangesAsync();
            return Ok("成功");
        }
```

## Postman

URL：http://localhost:5000/api/User/1394282152006258688

![image.png](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1621259440504-771dd92e-c72a-4ce2-95a1-853d4b8cba0f.png)

# Patch

在此用于更新数据

> 请求格式：[{"op" : "replace", "path" : "/PassWord", "value" : "222222"}]
> add：添加属性或数组元素。 对于现有属性：设置值。
> remove：删除属性或数组元素。
> replace：替换操作

## 前端

```
    var par = [{"op" : "replace", "path" : "/PassWord", "value" : "222222"}];
    $.ajax({
        url: "http://localhost:5000/api/User/1394282152006258688",
        type: "Patch",
        contentType: "application/json",
        data: JSON.stringify(par),
        success: function (result) {
            console.log(result);
        }
    });
```

## 后端

```
        [HttpPatch("{id}")]
        public async Task<ActionResult<string>> PatchAsync([FromRoute] string id, JsonPatchDocument<UpdateUserVm> jsonPatch)
        {
            var entity = await _context.Set<User>().AsNoTracking().FirstOrDefaultAsync(t => t.Id == id && !t.IsValid).ConfigureAwait(false);
            if (entity is null)
                return NotFound();

            var dto = _mapper.Map<UpdateUserVm>(entity);
            jsonPatch.ApplyTo(dto, ModelState);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _context.Set<User>().FindAsync(id).ConfigureAwait(false);
            _mapper.Map(dto,user);
             _context.Set<User>().Update(user);
            await _context.SaveChangesAsync().ConfigureAwait(false);
            return entity.Id;
        }
```

## Postman

### 更新

URL：http://localhost:5000/api/User/1394214078116794368

参数传递：Body=>raw=>json

```
[{"op" : "replace", "path" : "/PassWord", "value" : "222222"}]
```

> op属性指示操作的类型，path属性指示要更新的元素，value属性提供新值。

![image.png](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1621243196124-dfaafdf5-ffa5-4121-93a2-3170a9f14bbf.png)

> 参考文档：https://docs.microsoft.com/zh-cn/aspnet/core/web-api/jsonpatch?view=aspnetcore-5.0
