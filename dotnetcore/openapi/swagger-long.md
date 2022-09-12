---
title: swagger-Long精度丢失处理
date: '2022/09/12'
publish: true
categories:
 - dotNet
tags:
 - openapi
---
# 目的

最近两天在给朋友讲解如何使用ajax调用接口时候，我发现我用swagger调用接口返回的long类型的数据最后几位都变成了0(例如：6974150586715898000)，本来是以为sqlite数据库不支持long类型导致我存进去的数据出了问题，然后我使用接口测试工具调用后发现数据是正确的。然后想到之前听前端同事说过他们没有long类型他们使用的字符串来处理的我返回的long类型，那么就思考如何去处理swagger这个问题吧。

> 这个这两天才发现，说明我真的好久没有swagger调用接口了，虽然展示了，然后只是展示了。

# 解决方案

既然前端同事是通过字符串来处理的，那么我当然也可以转成字符串之后再返回出去。我是使用的Newtonsoft.Json做解析Json的，所以修改默认的解析



首先我们需要修改Swashbuckle.AspNetCore.Newtonsoft包默认的解析处理DefaultContractResolver，针对long类型做特殊处理

```csharp
public class CustomContractResolver : DefaultContractResolver
{
    /// <summary>
    /// 对长整型做处理
    /// </summary>
    /// <param name="objectType"></param>
    /// <returns></returns>
    protected override JsonConverter ResolveContractConverter(Type objectType)
    {
        if (objectType == typeof(long))
        {
            return new JsonConverterLong();
        }
        return base.ResolveContractConverter(objectType);
    }
}
```

JsonConverterLong内容如下

```csharp
/// <summary>
/// Long类型Json序列化重写
/// 在js中传输会导致精度丢失，故而在序列化时转换成字符类型
/// </summary>
public class JsonConverterLong : JsonConverter
{
    /// <summary>
    /// 是否可以转换
    /// </summary>
    /// <param name="objectType"></param>
    /// <returns></returns>
    public override bool CanConvert(Type objectType)
    {
        return true;
    }

    /// <summary>
    /// 读json
    /// </summary>
    /// <param name="reader"></param>
    /// <param name="objectType"></param>
    /// <param name="existingValue"></param>
    /// <param name="serializer"></param>
    /// <returns></returns>
    public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
    {
        if ((reader.ValueType == null || reader.ValueType == typeof(long?)) && reader.Value == null)
        {
            return null;
        }
        else
        {
            _ = long.TryParse(reader.Value != null ? reader.Value.ToString() : "", out long value);
            return value;
        }
    }

    /// <summary>
    /// 写json
    /// </summary>
    /// <param name="writer"></param>
    /// <param name="value"></param>
    /// <param name="serializer"></param>
    public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
    {
        if (value == null)
            writer.WriteValue(value);
        else
            writer.WriteValue(value.ToString());
    }
}
```

在上面编写结束之后我们还需要进行配置也就是设置SerializerSettings

```csharp
services.AddControllers().AddNewtonsoftJson(options =>
{
    //时间格式化
    options.SerializerSettings.DateFormatString = "yyyy-MM-dd HH:mm:ss";
    
    //swagger显示枚举
    options.SerializerSettings.Converters.Add(new StringEnumConverter());

    // 设置自定义序列化
    options.SerializerSettings.ContractResolver = new CustomContractResolver();
});
```

最后再次使用swagger界面调用返回值已经变成了6974150586715897857，成功解决问题。

# 总结

关于这个精度丢失的问题这次是第二次遇到了，上次是使用Apifox升级之后就出现了这个问题，然后我还去提了bug，结果是因为更新之后出来了一个兼容bigint的开关并且默认是关闭状态。
