---
title: Aspose.PDF
date: '2021/02/22'
publish: true
categories:
 - 中间件
tags:
 - Aspose
 - pdf
---
# Aspose.PDF

# 前言

最近在写关于操作PDF的代码，再加上今天朋友发了一个PDF格式的文件需要我帮忙转换为Word格式的文件，然后就出来了这个文章。

关于这个操作PDF的组件，我最近仔细自己找了可以使用的免费以及收费的组件，然后在参考了一个老哥写的一个文章(https://www.cnblogs.com/RobotZero/p/7742282.html)，最后选择了Aspose。本文的主角就是它，该组件是一个收费的组件，免费版本有页数限制和水印。关于该组件我摘抄一些介绍

> Aspose.Pdf 是一个 PDF 组件，用来生成 PDF 文档而无需 Adobe Acrobat 支持。提供 .NET 和 Java 语言两种版本。

# 操作

涉及技术 .Net5、Aspose.PDF

## PDF转Word

新建项目然后引用需要的组件Aspose.Pdf，以及需要一个GUI包

```
<PackageReference Include="Aspose.Pdf" Version="18.11.0" />
<PackageReference Include="System.Drawing.Common" Version="6.0.0" />
```

关于核心代码我们是看不到了，我们只能去非常简单的使用该组件,比如

```
var path = "E:\\Download\\testFile.pdf";
// load the file to be converted
var pfile = new Document(path);

// save in different formats
pfile.Save("e:\\output.doc", SaveFormat.Doc);
pfile.Save("e:\\output.html", SaveFormat.Html);
```

现在让我们对比一下转换前后的结果,个人感觉效果还是不错的![图片](https://mmbiz.qpic.cn/mmbiz_png/gtQF7ojZDqKlpibTD3ZAqytbW6pKibcXyALdM8u8czDeT2IFiaHO0kxAZfECe6fU1V7B4lRg26Q7edoWhSdnRf1iag/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

## PDF转图片

再附上一个将pdf转图片的代码吧，万一哪里用到了

```
var path = "D:\\Work\\xxxxxx.0.20210915.pdf";

//定义Jpeg转换设备
Document document = new Document(path);
var device = new Aspose.Pdf.Devices.JpegDevice(10);//设置图片质量
Console.WriteLine("默认图片张数：" + document.Pages.Count);
//遍历每一页转为jpg
for (var i = 1; i <= document.Pages.Count; i++)
{
    string filePathOutPut = $"d:\\img\\{i}.jpg";
    FileStream fs = new FileStream(filePathOutPut, FileMode.OpenOrCreate);
    try
    {
        device.Process(document.Pages[i], fs);
        fs.Close();
    }
    catch (Exception ex)
    {
        fs.Close();
        File.Delete(filePathOutPut);
    }
}
Console.WriteLine("保存成功");
```

该代码可以将PDF文件每页保存为一个图片，可以设置图片的质量来选择转换后图片的大小。