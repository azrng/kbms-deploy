import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as t,c as o,a as n,d as s,e as l,b as c}from"./app-Bw62I61B.js";const i="/kbms/common/1614064979468-5132c0c8-13c7-4670-ac35-dcea2cf8839d.png",r={},d=c(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>1、一般情况下，数据库备份导出的是一个脚本文件，这个脚本文件里面包含了用户名称以及表空间名称；所以如果备份时候要创建相同的表空间和用户名称。 举例说明，比如使用的客户端是sqldeveloper，那么就是用上面工具里面的导出按钮进行导出成一个脚本文件。 2、需要注意查看原数据库用户名、密码、服务器名称、所属表空间、所属临时表空间</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>先查看源数据库是属于哪个表空间等等，然后导出为dmp格式，还原数据库时候需要先创建数据库，创建数据库是使用<span class="token keyword">Database</span> Configuration Assistant工具进行创建数据库，然后使用cmd去连接数据库
sqlplus 全局数据库名<span class="token operator">/</span>命令  <span class="token keyword">as</span> sysdba
创建表空间：
如果放在一个文件夹中，那么这个文件夹必须提前先创建好
<span class="token keyword">create</span> <span class="token keyword">tablespace</span> 表空间名称 datafile <span class="token string">&#39;F:\\HYInstitute\\HYINSTITUTE.DBF&#39;</span> size <span class="token number">1000</span>M autoExtend <span class="token keyword">on</span><span class="token punctuation">;</span>
然后创建临时表空间
<span class="token keyword">create</span> <span class="token keyword">temporary</span> <span class="token keyword">tablespace</span> CCEN_TMP  tempfile <span class="token string">&#39;E:\\app\\Administrator\\admin\\tablespace_tmp\\CCEN_temp.dbf&#39;</span> size  <span class="token number">1000</span>M autoExtend <span class="token keyword">on</span><span class="token punctuation">;</span>
创建用户：
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> 用户名 IDENTIFIED <span class="token keyword">BY</span> 口令 <span class="token keyword">DEFAULT</span> <span class="token keyword">TABLESPACE</span>  表空间名称<span class="token punctuation">;</span>
或者
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> DYZHCSYKT  IDENTIFIED <span class="token keyword">BY</span> DYZHCSYKT <span class="token keyword">DEFAULT</span> <span class="token keyword">tablespace</span> CCEN <span class="token keyword">temporary</span> <span class="token keyword">tablespace</span> CCEN_TMP<span class="token punctuation">;</span>  
给用户赋权限：
<span class="token keyword">grant</span> <span class="token keyword">connect</span><span class="token punctuation">,</span> resource<span class="token punctuation">,</span>dba <span class="token keyword">to</span> 用户名<span class="token punctuation">;</span>
最后打开第三方客户端，然后使用系统用户名称、口令等进行连接，然后运行备份的dmp文件。
打开cmd运行框，运行
imp tianzhi_smart<span class="token operator">/</span>tianzhi_smart<span class="token variable">@192.168.10.129</span>:<span class="token number">1521</span><span class="token operator">/</span>orclfile<span class="token operator">=</span><span class="token string">&#39;E:\\tianzhi_smart.dmp&#39;</span> <span class="token keyword">full</span><span class="token operator">=</span>y<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用的数据库复制方法是利用工具实现源数据库到目标数据库，不导出来脚本。 遇到问题： 1.如果a服务器连接了一个内部服务器b，而c想要从b服务器数据库复制数据，但是c连接b时候连接失败不能连接，那么可以用a去连接b，主机ip是b的，然后使用c去连接a，主机ip是a的。但是这种方法显示操作一直出错了，忘了之前是咋操作了</p><h2 id="冷备份与冷恢复" tabindex="-1"><a class="header-anchor" href="#冷备份与冷恢复"><span>冷备份与冷恢复</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token number">1.</span> 复制旧的数据库文件
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 用SQLPlus连接数据库:
sqlplus 用户名<span class="token operator">/</span>密码 <span class="token keyword">as</span> sysdba
<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> 关闭DB ：
<span class="token keyword">shutdown</span> immediate；
<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> 复制文件到其他地方存储实现备份
<span class="token number">1</span>）复制三个文件夹
admin；
oradata<span class="token punctuation">(</span>datafile， controlfile，redo【注：数据文件， 控制文件，redo】<span class="token punctuation">)</span>；
flash_recovery_area三个文件夹。
<span class="token number">2</span>）dbhome_1下的内容
<span class="token keyword">database</span><span class="token punctuation">(</span>PWDfile、pfile<span class="token punctuation">)</span>；
dbs<span class="token punctuation">(</span>spfile<span class="token punctuation">)</span>；
NETWORK<span class="token operator">/</span>ADMIN<span class="token punctuation">(</span>listener<span class="token punctuation">.</span>ora、tnsnames<span class="token punctuation">.</span>ora<span class="token punctuation">)</span>。
 
<span class="token number">2.</span> Oracle重新建库恢复
（<span class="token number">1</span>）创建一个和原来一样的数据库。<span class="token punctuation">(</span>安装路径和数据库名必须和原来一致<span class="token punctuation">)</span>
（<span class="token number">2</span>）停止数据库<span class="token keyword">shutdown</span> immediate；
（<span class="token number">3</span>）复制安装目录下的admin、oradata、flash_recovery_area覆盖，复制<span class="token keyword">database</span><span class="token punctuation">(</span>PWDfile、pfile<span class="token punctuation">)</span> 覆盖
（<span class="token number">4</span>）启动数据库 startup<span class="token punctuation">;</span>
 
备注：
无归档模式：将备份文件拷贝回原来的目录即可，然后启动数据库。
归档模式：
①将数据文件、控制文件拷贝回原来目录
②<span class="token keyword">SQL</span><span class="token operator">&gt;</span>startup mount<span class="token punctuation">;</span>
<span class="token keyword">SQL</span><span class="token operator">&gt;</span>recover <span class="token keyword">database</span> <span class="token keyword">using</span> <span class="token keyword">backup</span> controlfile<span class="token punctuation">;</span>
③将相应的归档日志和联机日志拖到CMD命令窗口进行跑日志。
④<span class="token keyword">SQL</span><span class="token operator">&gt;</span><span class="token keyword">alter</span> <span class="token keyword">database</span> <span class="token keyword">open</span> resetlogs<span class="token punctuation">;</span>
 
<span class="token number">3.</span> 软件重装恢复
此时，操作系统重装，如果做冷备恢复，要保证相同操作系统，相同的数据库版本。形势如同异机恢复。
A、不创建实例：（源机上的数据库名字为orcl）
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 恢复oradata<span class="token operator">/</span>orcl目录
在目标机上的oradata目录下建立orcl文件夹，然后进行数据覆盖。
包括数据文件、参数文件、控制文件、日志文件、pwd文件，放在与原系统相同的目录。如果目录有所改变，则需要另外建立控制文件，修改pfile。
 
<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> 恢复admin<span class="token operator">/</span>orcl目录
在目标机上的admin目录下建立orcl文件夹，然后在orcl里面再建立adump、bdump、cdump、udump、dpdump、pfile六个文件夹
<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> 建立服务
把源机的密码文件拷贝到目标机的<span class="token keyword">database</span>目录下。
使用oradim命令在cmd下oradim <span class="token operator">-</span>new <span class="token operator">-</span>sid orcl 表示建立一个服务，sid为orcl（最好名字和源机备份的数据库名字一致，就不需要重建密码文件）。如果是在linux下，不需要此步。
 
<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> 重建创建参数文件、控制文件
拷贝源机的pfile到目标机的一个目录下，修改pfile里面相关文件的路径。
然后通过<span class="token keyword">SQL</span><span class="token operator">&gt;</span><span class="token keyword">create</span> spfile <span class="token keyword">from</span> pfile<span class="token operator">=</span>‘文件路径<span class="token string">&#39;来创建参数文件。
重建控制文件命令：SQL&gt;alter database backup controlfile to trace;
 
然后会在udump文件夹下产生一个追踪文件，打开文件找到如下一段，复制到文本中，修改相应路径然后保存为:createctl.sql文件（sql脚本文件），复制到目标机上。
注意：SQL&gt;alter database backup controlfile to trace as &#39;</span>F:<span class="token operator">/</span>DB_RECOVERY<span class="token operator">/</span>CONTROL_FILE_TRACE<span class="token punctuation">.</span>TXT<span class="token string">&#39;;
复制的原始导出txt中的，相应代码片段如下:

 

STARTUP NOMOUNT
CREATE CONTROLFILE REUSE DATABASE &quot;ORCL&quot; NORESETLOGS  ARCHIVELOG
    MAXLOGFILES 16
    MAXLOGMEMBERS 3
    MAXDATAFILES 100
    MAXINSTANCES 8
    MAXLOGHISTORY 292
LOGFILE
  GROUP 1 &#39;</span>E:\\APP\\ADMINISTRATOR\\ORADATA\\ORCL\\REDO01<span class="token punctuation">.</span>LOG<span class="token string">&#39; SIZE 50M BLOCKSIZE 512,
  GROUP 2 &#39;</span>E:\\APP\\ADMINISTRATOR\\ORADATA\\ORCL\\REDO02<span class="token punctuation">.</span>LOG<span class="token string">&#39; SIZE 50M BLOCKSIZE 512,
  GROUP 3 &#39;</span>E:\\APP\\ADMINISTRATOR\\ORADATA\\ORCL\\REDO03<span class="token punctuation">.</span>LOG<span class="token string">&#39; SIZE 50M BLOCKSIZE 512
-- STANDBY LOGFILE
DATAFILE
 &#39;</span>E:\\APP\\ADMINISTRATOR\\ORADATA\\ORCL\\SYSTEM01<span class="token punctuation">.</span>DBF<span class="token string">&#39;,
 &#39;</span>E:\\APP\\ADMINISTRATOR\\ORADATA\\ORCL\\SYSAUX01<span class="token punctuation">.</span>DBF<span class="token string">&#39;,
  &#39;</span>E:\\APP\\ADMINISTRATOR\\ORADATA\\ORCL\\UNDOTBS01<span class="token punctuation">.</span>DBF<span class="token string">&#39;,
 &#39;</span>E:\\APP\\ADMINISTRATOR\\ORADATA\\ORCL\\USERS01<span class="token punctuation">.</span>DBF<span class="token string">&#39;,
 &#39;</span>E:\\APP\\ADMINISTRATOR\\ORADATA\\ORCL\\EXAMPLE01<span class="token punctuation">.</span>DBF<span class="token string">&#39;,
 &#39;</span>E:\\APP\\ADMINISTRATOR\\ORADATA\\ORCL\\YTQ<span class="token punctuation">.</span>DBF<span class="token string">&#39;,
 &#39;</span>E:\\APP\\ADMINISTRATOR\\ORADATA\\ORCL\\ZJHH<span class="token string">&#39;,
  &#39;</span>E:\\APP\\ADMINISTRATOR\\PRODUCT\\<span class="token number">11.2</span><span class="token number">.0</span>\\DBHOME_1\\<span class="token keyword">DATABASE</span>\\SDE_TBS<span class="token string">&#39;,
 &#39;</span>I:\\ZJECMS\\DB\\DB_BK_DATA\\RMAN_LOCAL_1805\\RMAN_BKUP_1805<span class="token punctuation">.</span>DBF<span class="token string">&#39;
CHARACTER SET ZHS16GBK
;

 
(5)  数据库设置SID和启动服务
c:\\&gt;set ORACLE_SID=orcl
c:\\&gt;sqlplus &quot;/as   sysdba&quot;
 
SQL&gt;create spfile from pfile=&#39;</span>c:\\pfile<span class="token punctuation">.</span>txt<span class="token string">&#39;;
SQL&gt;@c:\\createctl.sql;
SQL&gt;shutdown   immediate;
SQL&gt;startup;
SQL&gt;alter database open resetlogs;
 
备注：
如果（4）、（5）不好用，可以用下面的方法修改这些路径不一致的问题（反正笔者电脑上冷备份恢复时，上面的两个步骤就不好用）：
1）SQL&gt;下执行如下语句，恢复控制文件
STARTUP NOMOUNT
CREATE CONTROLFILE REUSE DATABASE &quot;ORCL&quot; NORESETLOGS  ARCHIVELOG
    MAXLOGFILES 16
    MAXLOGMEMBERS 3
    MAXDATAFILES 100
    MAXINSTANCES 8
    MAXLOGHISTORY 292
2）修改日志、DBF的路径

 

  alter database rename file &#39;</span>E:\\APP\\ADMINISTRATOR\\ORADATA\\ORCL\\REDO01<span class="token punctuation">.</span>LOG<span class="token string">&#39; to &#39;</span>E:\\IDEPROS\\oracle_home\\oradata\\orcl\\REDO01<span class="token punctuation">.</span>LOG<span class="token string">&#39;;
  alter database rename file &#39;</span>E:\\APP\\ADMINISTRATOR\\ORADATA\\ORCL\\REDO02<span class="token punctuation">.</span>LOG<span class="token string">&#39; to &#39;</span>E:\\IDEPROS\\oracle_home\\oradata\\orcl\\REDO02<span class="token punctuation">.</span>LOG<span class="token string">&#39;;
  alter database rename file &#39;</span>E:\\APP\\ADMINISTRATOR\\ORADATA\\ORCL\\REDO03<span class="token punctuation">.</span>LOG<span class="token string">&#39; to &#39;</span>E:\\IDEPROS\\oracle_home\\oradata\\orcl\\REDO03<span class="token punctuation">.</span>LOG<span class="token string">&#39;;
alter database rename file &#39;</span>E:\\APP\\ADMINISTRATOR\\ORADATA\\ORCL\\SYSTEM01<span class="token punctuation">.</span>DBF<span class="token string">&#39; to &#39;</span>E:\\IDEPROS\\oracle_home\\oradata\\orcl\\SYSTEM01<span class="token punctuation">.</span>DBF<span class="token string">&#39;;
 alter database rename file &#39;</span>E:\\APP\\ADMINISTRATOR\\ORADATA\\ORCL\\SYSAUX01<span class="token punctuation">.</span>DBF<span class="token string">&#39; to &#39;</span>E:\\IDEPROS\\oracle_home\\oradata\\orcl\\SYSAUX01<span class="token punctuation">.</span>DBF<span class="token string">&#39;;
 alter database rename file &#39;</span>E:\\APP\\ADMINISTRATOR\\ORADATA\\ORCL\\UNDOTBS01<span class="token punctuation">.</span>DBF<span class="token string">&#39; to &#39;</span>E:\\IDEPROS\\oracle_home\\oradata\\orcl\\UNDOTBS01<span class="token punctuation">.</span>DBF<span class="token string">&#39;;
 alter database rename file &#39;</span>E:\\APP\\ADMINISTRATOR\\ORADATA\\ORCL\\USERS01<span class="token punctuation">.</span>DBF<span class="token string">&#39; to  &#39;</span>E:\\IDEPROS\\oracle_home\\oradata\\orcl\\USERS01<span class="token punctuation">.</span>DBF<span class="token string">&#39;;
 alter database rename file &#39;</span>E:\\APP\\ADMINISTRATOR\\ORADATA\\ORCL\\EXAMPLE01<span class="token punctuation">.</span>DBF<span class="token string">&#39; to  &#39;</span>E:\\IDEPROS\\oracle_home\\oradata\\orcl\\EXAMPLE01<span class="token punctuation">.</span>DBF<span class="token string">&#39;;
 alter database rename file &#39;</span>E:\\APP\\ADMINISTRATOR\\ORADATA\\ORCL\\YTQ<span class="token punctuation">.</span>DBF<span class="token string">&#39; to &#39;</span>E:\\IDEPROS\\oracle_home\\oradata\\orcl\\YTQ<span class="token punctuation">.</span>DBF<span class="token string">&#39;;
 alter database rename file &#39;</span>E:\\APP\\ADMINISTRATOR\\ORADATA\\ORCL\\ZJHH<span class="token string">&#39; to &#39;</span>E:\\IDEPROS\\oracle_home\\oradata\\orcl\\ZJHH<span class="token string">&#39;;
 alter database rename file &#39;</span>E:\\APP\\ADMINISTRATOR\\PRODUCT\\<span class="token number">11.2</span><span class="token number">.0</span>\\DBHOME_1\\<span class="token keyword">DATABASE</span>\\SDE_TBS<span class="token string">&#39; to &#39;</span>E:\\IDEPROS\\oracle_home\\oradata\\orcl\\SDE_TBS<span class="token string">&#39;;
 alter database rename file &#39;</span>I:\\ZJECMS\\DB\\DB_BK_DATA\\RMAN_LOCAL_1805\\RMAN_BKUP_1805<span class="token punctuation">.</span>DBF<span class="token string">&#39; to &#39;</span>E:\\IDEPROS\\oracle_home\\oradata\\orcl\\RMAN_BKUP_1805<span class="token punctuation">.</span>DBF&#39;<span class="token punctuation">;</span>
 

 
<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> TNSNAMES设置
在network\\admin下的tnsnames<span class="token punctuation">.</span>ora中添加如下片段
ORCL <span class="token operator">=</span>
<span class="token punctuation">(</span>DESCRIPTION   <span class="token operator">=</span>
<span class="token punctuation">(</span>ADDRESS_LIST   <span class="token operator">=</span>
<span class="token punctuation">(</span>ADDRESS   <span class="token operator">=</span> <span class="token punctuation">(</span>PROTOCOL <span class="token operator">=</span> TCP<span class="token punctuation">)</span><span class="token punctuation">(</span>HOST <span class="token operator">=</span> <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">)</span><span class="token punctuation">(</span>PORT <span class="token operator">=</span> <span class="token number">1521</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token punctuation">(</span>CONNECT_DATA   <span class="token operator">=</span>
<span class="token punctuation">(</span>SERVICE_NAME   <span class="token operator">=</span> orcl<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
 
<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span> 建立监听
用net configuration为orcl实例新建监听
 
至此，冷备份恢复成功。即使你现在用oem打开数据库时发现提示找不到sid ，但实际上你已经成功了，此时只需要重启一下的你的服务器就可以。
 
 
B、创建实例方式（实例SID与源机数据库SID一致）
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 替换和覆盖oradata\\orcl目录
删除目标机的oradata\\orcl底下的所有文件，把源机的所有<span class="token keyword">data</span>文件、redo文件拷贝到此目录下
<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> 密码文件覆盖
删除目标机的密码文件，拷贝源机密码文件到目标机下。
<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> 控制文件恢复
在源机上重建目标机的控制文件：<span class="token keyword">SQL</span><span class="token operator">&gt;</span><span class="token keyword">alter</span> <span class="token keyword">database</span> <span class="token keyword">backup</span> controlfile <span class="token keyword">to</span> trace<span class="token punctuation">;</span>然后会在udump文件夹下产生一个追踪文件，打开文件找到上面那段，复制到文本中，修改相应路径然后保存为:createctl<span class="token punctuation">.</span><span class="token keyword">sql</span>文件（<span class="token keyword">sql</span>脚本文件），复制到目标机上。
复制代码代码如下:
c:\\<span class="token operator">&gt;</span>sqlplus <span class="token string">&quot;/as   sysdba&quot;</span>
<span class="token keyword">SQL</span><span class="token operator">&gt;</span><span class="token variable">@c</span>:\\createctl<span class="token punctuation">.</span><span class="token keyword">sql</span><span class="token punctuation">;</span>
<span class="token keyword">SQL</span><span class="token operator">&gt;</span><span class="token keyword">shutdown</span>   immediate<span class="token punctuation">;</span>
<span class="token keyword">SQL</span><span class="token operator">&gt;</span>startup<span class="token punctuation">;</span>
<span class="token keyword">SQL</span><span class="token operator">&gt;</span><span class="token keyword">alter</span> <span class="token keyword">database</span> <span class="token keyword">open</span> resetlogs<span class="token punctuation">;</span>
 
<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>  在network\\admin下的tnsnames<span class="token punctuation">.</span>ora中添加如下片段
复制代码代码如下:
ORCL <span class="token operator">=</span>
<span class="token punctuation">(</span>DESCRIPTION   <span class="token operator">=</span>
<span class="token punctuation">(</span>ADDRESS_LIST   <span class="token operator">=</span>
<span class="token punctuation">(</span>ADDRESS   <span class="token operator">=</span> <span class="token punctuation">(</span>PROTOCOL <span class="token operator">=</span> TCP<span class="token punctuation">)</span><span class="token punctuation">(</span>HOST <span class="token operator">=</span> <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">)</span><span class="token punctuation">(</span>PORT <span class="token operator">=</span> <span class="token number">1521</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token punctuation">(</span>CONNECT_DATA   <span class="token operator">=</span>
<span class="token punctuation">(</span>SERVICE_NAME   <span class="token operator">=</span> orcl<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
 
<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> 用net configuration为orcl实例新建监听
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="expdp和impdp" tabindex="-1"><a class="header-anchor" href="#expdp和impdp"><span>EXPDP和IMPDP</span></a></h2><p>注意： EXP和IMP是客户段工具程序，它们既可以在客户端使用，也可以在服务器段使用。 EXPDP和IMPDP是服务端的工具程序，他们只能在ORACLE服务端使用，不能在客户端使用 IMP只适用于EXP导出文件，不适用于EXPDP导出文件;IMPDP只适用于EXPDP导出文件，而不适用于EXP导出文件。   expdp会把空表也导出，虽然还没有分配segment exp是找不到没有分配segment的表     在之前Oracle进行数据库迁移时候是使用的imp、exp进行导入导出的，但是后来推出了expdp 两个的差别是expdp会把空表也导出，虽然还没有分配segment，exp是找不到没有分配segment的表，所以在导出有些数据库的情况下，该数据库导出的dmp文件中不包含空的数据库表，所以需要使用expdp的方式进行导出， 首先在cmd运行下面的导出命令，然后等待结束后会发现在下图中多了一些文件 导出的语句中不需要指定导出目录 <img src="`+i+`" alt="image.png" loading="lazy"> 然后拷贝整个文件夹到需要还原的服务器放入指定的文件夹中（两个服务器需要安装相同版本的软件，创建相同的数据库名称、表名称、用户名称等），然后运行下面的语句进行导入数据库，导入成功即可。       操作示例：DYZHCSYKT是用户名也是该用户的密码，ORABUSONLINE 是数据库名称，schemas=(DYZHCSYKT)是需要导出的用户 导入：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>impdp DYZHCSYKT<span class="token operator">/</span>DYZHCSYKT<span class="token variable">@ORABUSONLINE</span> <span class="token keyword">dumpfile</span><span class="token operator">=</span>EXP_<span class="token operator">%</span><span class="token keyword">date</span>:<span class="token operator">~</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token operator">%</span><span class="token operator">%</span><span class="token keyword">date</span>:<span class="token operator">~</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">%</span><span class="token operator">%</span><span class="token keyword">date</span>:<span class="token operator">~</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">%</span><span class="token punctuation">.</span>DMP LOGFILE<span class="token operator">=</span>EXP_<span class="token operator">%</span><span class="token keyword">date</span>:<span class="token operator">~</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token operator">%</span><span class="token operator">%</span><span class="token keyword">date</span>:<span class="token operator">~</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">%</span><span class="token operator">%</span><span class="token keyword">date</span>:<span class="token operator">~</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">%</span><span class="token punctuation">.</span>log schemas<span class="token operator">=</span><span class="token punctuation">(</span>DYZHCSYKT<span class="token punctuation">)</span>
导出：
expdp DYZHCSYKT<span class="token operator">/</span>DYZHCSYKT<span class="token variable">@ORABUSONLINE</span> <span class="token keyword">dumpfile</span><span class="token operator">=</span>EXP_<span class="token operator">%</span><span class="token keyword">date</span>:<span class="token operator">~</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token operator">%</span><span class="token operator">%</span><span class="token keyword">date</span>:<span class="token operator">~</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">%</span><span class="token operator">%</span><span class="token keyword">date</span>:<span class="token operator">~</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">%</span><span class="token punctuation">.</span>DMP LOGFILE<span class="token operator">=</span>EXP_<span class="token operator">%</span><span class="token keyword">date</span>:<span class="token operator">~</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token operator">%</span><span class="token operator">%</span><span class="token keyword">date</span>:<span class="token operator">~</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">%</span><span class="token operator">%</span><span class="token keyword">date</span>:<span class="token operator">~</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">%</span><span class="token punctuation">.</span>log schemas<span class="token operator">=</span><span class="token punctuation">(</span>DYZHCSYKT<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),u={href:"https://www.cnblogs.com/whsa/p/3975817.html",target:"_blank",rel:"noopener noreferrer"};function k(m,v){const a=p("ExternalLinkIcon");return t(),o("div",null,[d,n("p",null,[s("其他参与资料："),n("a",u,[s("https://www.cnblogs.com/whsa/p/3975817.html"),l(a)])])])}const E=e(r,[["render",k],["__file","shujukubeifenhehaiyuan.html.vue"]]),T=JSON.parse(`{"path":"/dataBase/oracle/shujukubeifenhehaiyuan/shujukubeifenhehaiyuan.html","title":"数据库备份和还原","lang":"zh-CN","frontmatter":{"title":"数据库备份和还原","lang":"zh-CN","date":"2023-09-23T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dataBase"],"tag":["无"],"filename":"shujukubeifenhehaiyuan","slug":"tm2wb3","docsId":"31815651","description":"概述 1、一般情况下，数据库备份导出的是一个脚本文件，这个脚本文件里面包含了用户名称以及表空间名称；所以如果备份时候要创建相同的表空间和用户名称。 举例说明，比如使用的客户端是sqldeveloper，那么就是用上面工具里面的导出按钮进行导出成一个脚本文件。 2、需要注意查看原数据库用户名、密码、服务器名称、所属表空间、所属临时表空间 常用的数据库复制...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dataBase/oracle/shujukubeifenhehaiyuan/shujukubeifenhehaiyuan.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"数据库备份和还原"}],["meta",{"property":"og:description","content":"概述 1、一般情况下，数据库备份导出的是一个脚本文件，这个脚本文件里面包含了用户名称以及表空间名称；所以如果备份时候要创建相同的表空间和用户名称。 举例说明，比如使用的客户端是sqldeveloper，那么就是用上面工具里面的导出按钮进行导出成一个脚本文件。 2、需要注意查看原数据库用户名、密码、服务器名称、所属表空间、所属临时表空间 常用的数据库复制..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/1614064979468-5132c0c8-13c7-4670-ac35-dcea2cf8839d.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-23T15:53:24.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-09-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-23T15:53:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据库备份和还原\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/1614064979468-5132c0c8-13c7-4670-ac35-dcea2cf8839d.png\\"],\\"datePublished\\":\\"2023-09-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-23T15:53:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"冷备份与冷恢复","slug":"冷备份与冷恢复","link":"#冷备份与冷恢复","children":[]},{"level":2,"title":"EXPDP和IMPDP","slug":"expdp和impdp","link":"#expdp和impdp","children":[]}],"git":{"createdTime":1695484404000,"updatedTime":1695484404000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":8.6,"words":2580},"filePathRelative":"dataBase/oracle/shujukubeifenhehaiyuan/shujukubeifenhehaiyuan.md","localizedDate":"2023年9月23日","excerpt":"<h2>概述</h2>\\n<p>1、一般情况下，数据库备份导出的是一个脚本文件，这个脚本文件里面包含了用户名称以及表空间名称；所以如果备份时候要创建相同的表空间和用户名称。\\n举例说明，比如使用的客户端是sqldeveloper，那么就是用上面工具里面的导出按钮进行导出成一个脚本文件。\\n2、需要注意查看原数据库用户名、密码、服务器名称、所属表空间、所属临时表空间</p>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"language-sql\\"><code>先查看源数据库是属于哪个表空间等等，然后导出为dmp格式，还原数据库时候需要先创建数据库，创建数据库是使用<span class=\\"token keyword\\">Database</span> Configuration Assistant工具进行创建数据库，然后使用cmd去连接数据库\\nsqlplus 全局数据库名<span class=\\"token operator\\">/</span>命令  <span class=\\"token keyword\\">as</span> sysdba\\n创建表空间：\\n如果放在一个文件夹中，那么这个文件夹必须提前先创建好\\n<span class=\\"token keyword\\">create</span> <span class=\\"token keyword\\">tablespace</span> 表空间名称 datafile <span class=\\"token string\\">'F:\\\\HYInstitute\\\\HYINSTITUTE.DBF'</span> size <span class=\\"token number\\">1000</span>M autoExtend <span class=\\"token keyword\\">on</span><span class=\\"token punctuation\\">;</span>\\n然后创建临时表空间\\n<span class=\\"token keyword\\">create</span> <span class=\\"token keyword\\">temporary</span> <span class=\\"token keyword\\">tablespace</span> CCEN_TMP  tempfile <span class=\\"token string\\">'E:\\\\app\\\\Administrator\\\\admin\\\\tablespace_tmp\\\\CCEN_temp.dbf'</span> size  <span class=\\"token number\\">1000</span>M autoExtend <span class=\\"token keyword\\">on</span><span class=\\"token punctuation\\">;</span>\\n创建用户：\\n<span class=\\"token keyword\\">CREATE</span> <span class=\\"token keyword\\">USER</span> 用户名 IDENTIFIED <span class=\\"token keyword\\">BY</span> 口令 <span class=\\"token keyword\\">DEFAULT</span> <span class=\\"token keyword\\">TABLESPACE</span>  表空间名称<span class=\\"token punctuation\\">;</span>\\n或者\\n<span class=\\"token keyword\\">CREATE</span> <span class=\\"token keyword\\">USER</span> DYZHCSYKT  IDENTIFIED <span class=\\"token keyword\\">BY</span> DYZHCSYKT <span class=\\"token keyword\\">DEFAULT</span> <span class=\\"token keyword\\">tablespace</span> CCEN <span class=\\"token keyword\\">temporary</span> <span class=\\"token keyword\\">tablespace</span> CCEN_TMP<span class=\\"token punctuation\\">;</span>  \\n给用户赋权限：\\n<span class=\\"token keyword\\">grant</span> <span class=\\"token keyword\\">connect</span><span class=\\"token punctuation\\">,</span> resource<span class=\\"token punctuation\\">,</span>dba <span class=\\"token keyword\\">to</span> 用户名<span class=\\"token punctuation\\">;</span>\\n最后打开第三方客户端，然后使用系统用户名称、口令等进行连接，然后运行备份的dmp文件。\\n打开cmd运行框，运行\\nimp tianzhi_smart<span class=\\"token operator\\">/</span>tianzhi_smart<span class=\\"token variable\\">@192.168.10.129</span>:<span class=\\"token number\\">1521</span><span class=\\"token operator\\">/</span>orclfile<span class=\\"token operator\\">=</span><span class=\\"token string\\">'E:\\\\tianzhi_smart.dmp'</span> <span class=\\"token keyword\\">full</span><span class=\\"token operator\\">=</span>y<span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}`);export{E as comp,T as data};
