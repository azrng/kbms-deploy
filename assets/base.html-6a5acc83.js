const t=JSON.parse('{"key":"v-21618151","path":"/dotnetcore/unit-test/base.html","title":"基础介绍","lang":"zh-CN","frontmatter":{"title":"基础介绍","lang":"zh-CN","date":"2021-08-25T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNet"],"tag":["unit","单元测试"],"description":"Intro “不会写单元测试的程序员不是合格的程序员，不写单元测试的程序员不是优秀的工程师。” ​\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t—— 一只想要成为一个优秀程序员的渣逼程序猿。 那么问题来了，什么是单元测试，如何做单元测试。 单元测试 单元测试的定义 按照维基百科上的说法，单元测试（Unit Testing）又称为模块测试, 是针对程序模块（软件设计的最小单位）来进行正确性检验的测试工作。 程序单元是应用的最小可测试部件。在面向对象编程中，最小单元就是方法，包括基类、抽象类、或者派生类（子类）中的方法。 按照通俗的理解，一个单元测试判断某个特定场条件下某个特定方法的行为，如斐波那契数列算法，冒泡排序算法。","head":[["meta",{"property":"og:url","content":"https://azrng.github.io/kbms/kbms/dotnetcore/unit-test/base.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"基础介绍"}],["meta",{"property":"og:description","content":"Intro “不会写单元测试的程序员不是合格的程序员，不写单元测试的程序员不是优秀的工程师。” ​\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t—— 一只想要成为一个优秀程序员的渣逼程序猿。 那么问题来了，什么是单元测试，如何做单元测试。 单元测试 单元测试的定义 按照维基百科上的说法，单元测试（Unit Testing）又称为模块测试, 是针对程序模块（软件设计的最小单位）来进行正确性检验的测试工作。 程序单元是应用的最小可测试部件。在面向对象编程中，最小单元就是方法，包括基类、抽象类、或者派生类（子类）中的方法。 按照通俗的理解，一个单元测试判断某个特定场条件下某个特定方法的行为，如斐波那契数列算法，冒泡排序算法。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-09T02:19:17.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"unit"}],["meta",{"property":"article:tag","content":"单元测试"}],["meta",{"property":"article:published_time","content":"2021-08-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-09T02:19:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基础介绍\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-08-25T00:00:00.000Z\\",\\"dateModified\\":\\"2022-12-09T02:19:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"单元测试的定义","slug":"单元测试的定义","link":"#单元测试的定义","children":[]},{"level":2,"title":"单元测试的好处","slug":"单元测试的好处","link":"#单元测试的好处","children":[]},{"level":2,"title":"单元测试的原则","slug":"单元测试的原则","link":"#单元测试的原则","children":[]},{"level":2,"title":"MS Test","slug":"ms-test","link":"#ms-test","children":[]},{"level":2,"title":"NUnit","slug":"nunit","link":"#nunit","children":[]},{"level":2,"title":"XUnit","slug":"xunit","link":"#xunit","children":[]},{"level":2,"title":"XUnit 的基本使用","slug":"xunit-的基本使用","link":"#xunit-的基本使用","children":[]}],"git":{"createdTime":1670219403000,"updatedTime":1670552357000,"contributors":[{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":2},{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":6.27,"words":1881},"filePathRelative":"dotnetcore/unit-test/base.md","localizedDate":"2021年8月25日","excerpt":"<h1> Intro</h1>\\n<blockquote>\\n<p>“不会写单元测试的程序员不是合格的程序员，不写单元测试的程序员不是优秀的工程师。”</p>\\n<p>​\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t—— 一只想要成为一个优秀程序员的渣逼程序猿。</p>\\n</blockquote>\\n<p>那么问题来了，什么是单元测试，如何做单元测试。</p>\\n<h1> 单元测试</h1>\\n<h2> 单元测试的定义</h2>\\n<p>按照维基百科上的说法，单元测试（Unit Testing）又称为模块测试, 是针对程序模块（软件设计的最小单位）来进行正确性检验的测试工作。 程序单元是应用的最小可测试部件。在面向对象编程中，最小单元就是方法，包括基类、抽象类、或者派生类（子类）中的方法。 按照通俗的理解，一个单元测试判断某个特定场条件下某个特定方法的行为，如斐波那契数列算法，冒泡排序算法。</p>","autoDesc":true}');export{t as data};