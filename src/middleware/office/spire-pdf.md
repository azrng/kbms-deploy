---
title: Spire.PDF
lang: zh-CN
date: 2021-02-22
publish: true
author: azrng
isOriginal: true
category:
 - 中间件
tag:
 - Spire
 - pdf
---
# Spire.PDF

## PDF转图片

```csharp
using PdfDocument doc = new PdfDocument(picBytes);
//convert to pdf file.
for (var i = 0; i < doc.Pages.Count; i++)
{
    var image = doc.SaveAsImage(i);//得到图片流
    Console.WriteLine($"{i}    截取为图片   " + watch.ElapsedMilliseconds);
    await fileOperation.UploadFileStreamAsync("pacs", "test/" + Guid.NewGuid() + ".jpg", image, "image/jpeg");
    Console.WriteLine($"{i}   上传图片结束  " + watch.ElapsedMilliseconds);
}
```

## 创建PDF

```csharp
PdfDocument doc = new PdfDocument();
for (int i = 0; i < 4; i++)
{
    PdfImage im = PdfImage.FromFile("00"+i.ToString()+".jpg");
    float width = im.Width;
    float height = im.Height;
    PdfPageBase page = doc.Pages.Add(new SizeF(width, height), new PdfMargins(0, 0, 0, 0));
    page.Canvas.DrawImage(im, 0, 0, width, height);
}
PdfImage im2 = PdfImage.FromFile("021.jpg");
float width2 = im2.Width;
float height2 = im2.Height;
PdfPageBase page2 = doc.Pages.Add(new SizeF(width2, height2), new PdfMargins(0, 0, 0, 0));
page2.Canvas.DrawImage(im2, 0, 0, width2, height2);

//Save pdf file.
doc.SaveToFile("MyFirstPDF.pdf");
doc.Close();
```

# 资料

本文摘抄自博客园

