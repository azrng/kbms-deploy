import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o,c as e,a as n,d as s,e as c,b as i}from"./app-DMmdIwn0.js";const l={},u=i(`<h2 id="savechanges事务" tabindex="-1"><a class="header-anchor" href="#savechanges事务"><span>SaveChanges事务</span></a></h2><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">//默认事务是SaveChanges，它可以确保要么成功保存，要么在发生错误不对数据库做任何操作。</span>
<span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name">EFDB01Context</span> db <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">EFDB01Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    db<span class="token punctuation">.</span>T_RoleInfor<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">T_RoleInfor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> roleName <span class="token operator">=</span> <span class="token string">&quot;管理员1&quot;</span><span class="token punctuation">,</span> addTime <span class="token operator">=</span> DateTime<span class="token punctuation">.</span>Now <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    db<span class="token punctuation">.</span>T_RoleInfor<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">T_RoleInfor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> roleName <span class="token operator">=</span> <span class="token string">&quot;管理员2&quot;</span><span class="token punctuation">,</span> addTime <span class="token operator">=</span> DateTime<span class="token punctuation">.</span>Now <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    db<span class="token punctuation">.</span><span class="token function">SaveChanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//关闭默认事务：context.Database.AutoTransactionsEnabled = false;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dbcontexttransaction事务" tabindex="-1"><a class="header-anchor" href="#dbcontexttransaction事务"><span>DbContextTransaction事务</span></a></h2><p>BeginTransaction开启事务、Commit提交事务、Rollback回滚事务、Dispose销毁，如果用Using包裹的话，不再需要手动Rollback，走完Using会自动回滚。如果不用Using包裹事务，就需要在Catch中手动RollBack回滚，并且最好最后手动的Dispose一下 使用场景：同一个上下文多个savechanges的方法、savachanges和EF调用sql语句混用的场景 using包裹事务</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name">EFDB01Context</span> db <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">EFDB01Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> transaction <span class="token operator">=</span> db<span class="token punctuation">.</span>Database<span class="token punctuation">.</span><span class="token function">BeginTransaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">try</span>
        <span class="token punctuation">{</span>
            db<span class="token punctuation">.</span>T_RoleInfor<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">T_RoleInfor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> roleName <span class="token operator">=</span> <span class="token string">&quot;管理员1&quot;</span><span class="token punctuation">,</span> addTime <span class="token operator">=</span> DateTime<span class="token punctuation">.</span>Now <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            db<span class="token punctuation">.</span><span class="token function">SaveChanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            db<span class="token punctuation">.</span>T_RoleInfor<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">T_RoleInfor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token number">111</span><span class="token punctuation">,</span> roleName <span class="token operator">=</span> <span class="token string">&quot;管理员2&quot;</span><span class="token punctuation">,</span> addTime <span class="token operator">=</span> DateTime<span class="token punctuation">.</span>Now <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//报错</span>
            db<span class="token punctuation">.</span><span class="token function">SaveChanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name"><span class="token keyword">string</span></span> sql1 <span class="token operator">=</span> <span class="token string">@&quot;insert into T_RoleInfor (roleName,roleDescription,addTime) values (@roleName,@roleDescription,@addTime)&quot;</span><span class="token punctuation">;</span>
            <span class="token class-name">SqlParameter<span class="token punctuation">[</span><span class="token punctuation">]</span></span> pars1 <span class="token operator">=</span> <span class="token punctuation">{</span>
                            <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqlParameter</span><span class="token punctuation">(</span><span class="token string">&quot;@roleName&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;管理员3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                            <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqlParameter</span><span class="token punctuation">(</span><span class="token string">&quot;@roleDescription&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;txt11&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                            <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqlParameter</span><span class="token punctuation">(</span><span class="token string">&quot;@addTime&quot;</span><span class="token punctuation">,</span>DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">)</span>
                         <span class="token punctuation">}</span><span class="token punctuation">;</span>
            db<span class="token punctuation">.</span>Database<span class="token punctuation">.</span><span class="token function">ExecuteSqlCommand</span><span class="token punctuation">(</span>sql1<span class="token punctuation">,</span> pars1<span class="token punctuation">)</span><span class="token punctuation">;</span>
            transaction<span class="token punctuation">.</span><span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;成功了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            transaction<span class="token punctuation">.</span><span class="token function">Rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;失败了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Try…catch使用事务的方案</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name">EFDB01Context</span> db <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">EFDB01Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> transaction <span class="token operator">=</span> db<span class="token punctuation">.</span>Database<span class="token punctuation">.</span><span class="token function">BeginTransaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> d1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">T_RoleInfor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> roleName <span class="token operator">=</span> <span class="token string">&quot;管理员1&quot;</span><span class="token punctuation">,</span> addTime <span class="token operator">=</span> DateTime<span class="token punctuation">.</span>Now <span class="token punctuation">}</span><span class="token punctuation">;</span>
        db<span class="token punctuation">.</span>T_RoleInfor<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>d1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        db<span class="token punctuation">.</span><span class="token function">SaveChanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        db<span class="token punctuation">.</span>T_RoleInfor<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">T_RoleInfor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> roleName <span class="token operator">=</span> <span class="token string">&quot;管理员2&quot;</span> <span class="token operator">+</span> d1<span class="token punctuation">.</span>id<span class="token punctuation">,</span> addTime <span class="token operator">=</span> DateTime<span class="token punctuation">.</span>Now <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        db<span class="token punctuation">.</span><span class="token function">SaveChanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name"><span class="token keyword">string</span></span> sql1 <span class="token operator">=</span> <span class="token string">@&quot;insert into T_RoleInfor (roleName,roleDescription,addTime) values (@roleName,@roleDescription,@addTime)&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">SqlParameter<span class="token punctuation">[</span><span class="token punctuation">]</span></span> pars1 <span class="token operator">=</span><span class="token punctuation">{</span>
                                                <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqlParameter</span><span class="token punctuation">(</span><span class="token string">&quot;@roleName&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;管理员3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqlParameter</span><span class="token punctuation">(</span><span class="token string">&quot;@roleDescription&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;txt11&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqlParameter</span><span class="token punctuation">(</span><span class="token string">&quot;@addTime&quot;</span><span class="token punctuation">,</span>DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">)</span>
                                            <span class="token punctuation">}</span><span class="token punctuation">;</span>
        db<span class="token punctuation">.</span>Database<span class="token punctuation">.</span><span class="token function">ExecuteSqlCommand</span><span class="token punctuation">(</span>sql1<span class="token punctuation">,</span> pars1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        transaction<span class="token punctuation">.</span><span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;成功了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        transaction<span class="token punctuation">.</span><span class="token function">Rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;失败了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">finally</span>
    <span class="token punctuation">{</span>
        transaction<span class="token punctuation">.</span><span class="token function">Dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="transactionscope" tabindex="-1"><a class="header-anchor" href="#transactionscope"><span>TransactionScope</span></a></h2><p>环境事务</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name">EFDB01Context1</span> db <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">EFDB01Context1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> scope <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TransactionScope</span><span class="token punctuation">(</span><span class="token comment">/*TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadCommitted }*/</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">try</span>
        <span class="token punctuation">{</span>
            <span class="token class-name"><span class="token keyword">var</span></span> data1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">T_RoleInfor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> roleName <span class="token operator">=</span> <span class="token string">&quot;管理员1&quot;</span><span class="token punctuation">,</span> addTime <span class="token operator">=</span> DateTime<span class="token punctuation">.</span>Now <span class="token punctuation">}</span><span class="token punctuation">;</span>
            db<span class="token punctuation">.</span>T_RoleInfor<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>data1<span class="token punctuation">)</span><span class="token punctuation">;</span>
            db<span class="token punctuation">.</span><span class="token function">SaveChanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            db<span class="token punctuation">.</span>T_RoleInfor<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">T_RoleInfor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> roleName <span class="token operator">=</span> <span class="token string">&quot;管理员2&quot;</span> <span class="token operator">+</span> data1<span class="token punctuation">.</span>id<span class="token punctuation">,</span> addTime <span class="token operator">=</span> DateTime<span class="token punctuation">.</span>Now <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//报错</span>
            db<span class="token punctuation">.</span><span class="token function">SaveChanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name"><span class="token keyword">string</span></span> sql1 <span class="token operator">=</span> <span class="token string">@&quot;insert into T_RoleInfor (roleName,roleDescription,addTime) values (@roleName,@roleDescription,@addTime)&quot;</span><span class="token punctuation">;</span>
            <span class="token class-name">SqlParameter<span class="token punctuation">[</span><span class="token punctuation">]</span></span> pars1 <span class="token operator">=</span><span class="token punctuation">{</span>
                                                <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqlParameter</span><span class="token punctuation">(</span><span class="token string">&quot;@roleName&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;管理员3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqlParameter</span><span class="token punctuation">(</span><span class="token string">&quot;@roleDescription&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;txt11&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqlParameter</span><span class="token punctuation">(</span><span class="token string">&quot;@addTime&quot;</span><span class="token punctuation">,</span>DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">)</span>
                                            <span class="token punctuation">}</span><span class="token punctuation">;</span>
            db<span class="token punctuation">.</span>Database<span class="token punctuation">.</span><span class="token function">ExecuteSqlCommand</span><span class="token punctuation">(</span>sql1<span class="token punctuation">,</span> pars1<span class="token punctuation">)</span><span class="token punctuation">;</span>
            scope<span class="token punctuation">.</span><span class="token function">Complete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;成功了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;失败了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果TransactionScope里面使用了异步方法跨线程处理，那么需要使用</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">//指定是否启用跨线程延续的事务流  </span>
<span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> score <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TransactionScope</span><span class="token punctuation">(</span>TransactionScopeAsyncFlowOption<span class="token punctuation">.</span>Enabled<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">{</span>
    <span class="token comment">// xxxx</span>
    
    <span class="token comment">// 提交事务</span>
    score<span class="token punctuation">.</span><span class="token function">Complete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2>`,13),k={href:"https://www.cnblogs.com/yaopengfei/p/11387935.html",target:"_blank",rel:"noopener noreferrer"};function r(d,m){const a=p("ExternalLinkIcon");return o(),e("div",null,[u,n("p",null,[s("参考文档："),n("a",k,[s("https://www.cnblogs.com/yaopengfei/p/11387935.html"),c(a)])])])}const g=t(l,[["render",r],["__file","shiwu.html.vue"]]),h=JSON.parse('{"path":"/orm/efcore/jichuzhishi/shiwu.html","title":"事务操作","lang":"zh-CN","frontmatter":{"title":"事务操作","lang":"zh-CN","date":"2022-05-22T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["orm"],"tag":["无"],"filename":"shiwu","slug":"du65o9","docsId":"30842458","description":"SaveChanges事务 DbContextTransaction事务 BeginTransaction开启事务、Commit提交事务、Rollback回滚事务、Dispose销毁，如果用Using包裹的话，不再需要手动Rollback，走完Using会自动回滚。如果不用Using包裹事务，就需要在Catch中手动RollBack回滚，并且最好最后手...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/orm/efcore/jichuzhishi/shiwu.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"事务操作"}],["meta",{"property":"og:description","content":"SaveChanges事务 DbContextTransaction事务 BeginTransaction开启事务、Commit提交事务、Rollback回滚事务、Dispose销毁，如果用Using包裹的话，不再需要手动Rollback，走完Using会自动回滚。如果不用Using包裹事务，就需要在Catch中手动RollBack回滚，并且最好最后手..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-14T13:07:03.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2022-05-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-14T13:07:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"事务操作\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-22T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-14T13:07:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"SaveChanges事务","slug":"savechanges事务","link":"#savechanges事务","children":[]},{"level":2,"title":"DbContextTransaction事务","slug":"dbcontexttransaction事务","link":"#dbcontexttransaction事务","children":[]},{"level":2,"title":"TransactionScope","slug":"transactionscope","link":"#transactionscope","children":[]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1690042937000,"updatedTime":1697288823000,"contributors":[{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":2},{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":1.83,"words":548},"filePathRelative":"orm/efcore/jichuzhishi/shiwu.md","localizedDate":"2022年5月22日","excerpt":"<h2>SaveChanges事务</h2>\\n<div class=\\"language-csharp\\" data-ext=\\"cs\\" data-title=\\"cs\\"><pre class=\\"language-csharp\\"><code><span class=\\"token comment\\">//默认事务是SaveChanges，它可以确保要么成功保存，要么在发生错误不对数据库做任何操作。</span>\\n<span class=\\"token keyword\\">using</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">EFDB01Context</span> db <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token constructor-invocation class-name\\">EFDB01Context</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n    db<span class=\\"token punctuation\\">.</span>T_RoleInfor<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Add</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token constructor-invocation class-name\\">T_RoleInfor</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> roleName <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"管理员1\\"</span><span class=\\"token punctuation\\">,</span> addTime <span class=\\"token operator\\">=</span> DateTime<span class=\\"token punctuation\\">.</span>Now <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    db<span class=\\"token punctuation\\">.</span>T_RoleInfor<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Add</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token constructor-invocation class-name\\">T_RoleInfor</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> roleName <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"管理员2\\"</span><span class=\\"token punctuation\\">,</span> addTime <span class=\\"token operator\\">=</span> DateTime<span class=\\"token punctuation\\">.</span>Now <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    db<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">SaveChanges</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">//关闭默认事务：context.Database.AutoTransactionsEnabled = false;</span>\\n</code></pre></div>","autoDesc":true}');export{g as comp,h as data};