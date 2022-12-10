import{_ as t,W as p,X as i,Y as n,Z as s,$ as e,a0 as o,y as l}from"./framework.cf23f0c7.js";const r={},c=o(`<h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><p>Supervisor是一个进程管理工具，当进程中断的时候Supervisor能自动重新启动它。可以运行在各种类unix的机器上，supervisor就是用Python开发的一套通用的进程管理程序，能将一个普通的命令行进程变为后台daemon，并监控进程状态，异常退出时能自动重启。</p><h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> supervisor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">### 查看supervisorctl支持的命令</span>
<span class="token comment"># supervisorctl help    </span>
default commands <span class="token punctuation">(</span>type <span class="token builtin class-name">help</span> <span class="token operator">&lt;</span>topic<span class="token operator">&gt;</span><span class="token punctuation">)</span>:
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
<span class="token function">add</span>    <span class="token builtin class-name">exit</span>      <span class="token function">open</span>  reload  restart   start   <span class="token function">tail</span>   
avail  <span class="token function">fg</span>        pid   remove  <span class="token function">shutdown</span>  status  update 
<span class="token function">clear</span>  maintail  quit  reread  signal    stop    version

<span class="token comment">### 查看当前运行的进程列表</span>
<span class="token comment"># supervisorctl status</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>update 更新新的配置到supervisord（不会重启原来已运行的程序）</p><p>reload，载入所有配置文件，并按新的配置启动、管理所有进程（会重启原来已运行的程序）</p><p>start xxx: 启动某个进程</p><p>restart xxx: 重启某个进程</p><p>stop xxx: 停止某一个进程(xxx)，xxx为[program:theprogramname]里配置的值</p><p>stop groupworker: 重启所有属于名为groupworker这个分组的进程(start,restart同理)</p><p>stop all，停止全部进程，注：start、restart、stop都不会载入最新的配置文</p><p>reread，当一个服务由自动启动修改为手动启动时执行一下就ok</p><h1 id="配置文件说明" tabindex="-1"><a class="header-anchor" href="#配置文件说明" aria-hidden="true">#</a> 配置文件说明</h1><p>echo_supervisord_conf详解：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@centos-011 ~ 07:50:00<span class="token punctuation">]</span><span class="token comment">#cat /etc/supervisord.conf.bak</span>
<span class="token punctuation">;</span> Sample supervisor config file.
 
<span class="token punctuation">[</span>unix_http_server<span class="token punctuation">]</span>
<span class="token assign-left variable">file</span><span class="token operator">=</span>/var/run/supervisor/supervisor.sock   <span class="token punctuation">;</span> socket 路径
 
<span class="token punctuation">;</span><span class="token assign-left variable">chmod</span><span class="token operator">=</span>0700                 <span class="token punctuation">;</span> socket 文件的权限
<span class="token punctuation">;</span><span class="token assign-left variable">chown</span><span class="token operator">=</span>nobody:nogroup       <span class="token punctuation">;</span> socket 所属用户及组
<span class="token punctuation">;</span><span class="token assign-left variable">username</span><span class="token operator">=</span>user              <span class="token punctuation">;</span> 用户名
<span class="token punctuation">;</span><span class="token assign-left variable">password</span><span class="token operator">=</span><span class="token number">123</span>               <span class="token punctuation">;</span> 密码
 
<span class="token punctuation">;</span><span class="token punctuation">[</span>inet_http_server<span class="token punctuation">]</span>         <span class="token punctuation">;</span> 是否启用服务，默认是关闭的（启用的话可以看到supervisor 管理的服务状态）
<span class="token punctuation">;</span><span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1:9001        <span class="token punctuation">;</span> 监听的IP及端口
<span class="token punctuation">;</span><span class="token assign-left variable">username</span><span class="token operator">=</span>user              <span class="token punctuation">;</span> 用户名
<span class="token punctuation">;</span><span class="token assign-left variable">password</span><span class="token operator">=</span><span class="token number">123</span>               <span class="token punctuation">;</span> 密码
 
<span class="token punctuation">[</span>supervisord<span class="token punctuation">]</span>               <span class="token punctuation">;</span> supervisord 全局配置
<span class="token assign-left variable">logfile</span><span class="token operator">=</span>/var/log/supervisor/supervisord.log  <span class="token punctuation">;</span> supervisor 日志路径
<span class="token assign-left variable">logfile_maxbytes</span><span class="token operator">=</span>50MB       <span class="token punctuation">;</span> 单个日志文件最大数
<span class="token assign-left variable">logfile_backups</span><span class="token operator">=</span><span class="token number">10</span>          <span class="token punctuation">;</span> 保留多少个日志文件（默认10个）
<span class="token assign-left variable">loglevel</span><span class="token operator">=</span>info               <span class="token punctuation">;</span> <span class="token punctuation">(</span>log level<span class="token punctuation">;</span>default info<span class="token punctuation">;</span> others: debug,warn,trace<span class="token punctuation">)</span>
<span class="token assign-left variable">pidfile</span><span class="token operator">=</span>/var/run/supervisord.pid <span class="token punctuation">;</span> pid 文件路径
<span class="token assign-left variable">nodaemon</span><span class="token operator">=</span>false              <span class="token punctuation">;</span> 启动是否丢到前台，设置为false ，表示以daemon 的方式启动
<span class="token assign-left variable">minfds</span><span class="token operator">=</span><span class="token number">1024</span>                 <span class="token punctuation">;</span> 最小文件打开数，对应系统limit.conf 中的nofile ,默认最小为1024，最大为4096
<span class="token assign-left variable">minprocs</span><span class="token operator">=</span><span class="token number">200</span>                <span class="token punctuation">;</span> 最小的进程打开数，对应系统的limit.conf 中的nproc,默认为200
<span class="token punctuation">;</span><span class="token assign-left variable">umask</span><span class="token operator">=</span>022                  <span class="token punctuation">;</span> <span class="token punctuation">(</span>process <span class="token function">file</span> creation <span class="token builtin class-name">umask</span><span class="token punctuation">;</span>default 022<span class="token punctuation">)</span>
<span class="token punctuation">;</span><span class="token assign-left variable">user</span><span class="token operator">=</span>chrism                 <span class="token punctuation">;</span> 启动supervisord 服务的用户，默认为root
<span class="token punctuation">;</span><span class="token assign-left variable">identifier</span><span class="token operator">=</span>supervisor       <span class="token punctuation">;</span> <span class="token punctuation">(</span>supervisord identifier, default is <span class="token string">&#39;supervisor&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">;</span><span class="token assign-left variable">directory</span><span class="token operator">=</span>/tmp              <span class="token punctuation">;</span> 这里的目录指的是服务的工作目录
<span class="token punctuation">;</span><span class="token assign-left variable">nocleanup</span><span class="token operator">=</span>true              <span class="token punctuation">;</span> <span class="token punctuation">(</span>don<span class="token string">&#39;t clean up tempfiles at start;default false)
;childlogdir=/tmp            ; (&#39;</span>AUTO<span class="token string">&#39; child log dir, default $TEMP)
;environment=KEY=value       ; (key value pairs to add to environment)
;strip_ansi=false            ; (strip ansi escape codes in logs; def. false)
 
; the below section must remain in the config file for RPC
; (supervisorctl/web interface) to work, additional interfaces may be
; added by defining them in separate rpcinterface: sections
[rpcinterface:supervisor]
supervisor.rpcinterface_factory = supervisor.rpcinterface:make_main_rpcinterface
 
[supervisorctl]
serverurl=unix:///var/run/supervisor/supervisor.sock ; use a unix:// URL  for a unix socket
;serverurl=http://127.0.0.1:9001 ; use an http:// url to specify an inet socket
;username=chris              ; should be same as http_username if set
;password=123                ; should be same as http_password if set
;prompt=mysupervisor         ; cmd line prompt (default &quot;supervisor&quot;)
;history_file=~/.sc_history  ; use readline history if available
 
; The below sample program section shows all possible program subsection values,
; create one or more &#39;</span>real<span class="token string">&#39; program: sections to be able to control them under
; supervisor.
 
;[program:theprogramname]      ; 定义一个守护进程 ，比如下面的elasticsearch 
;command=/bin/cat              ; 启动程序使用的命令，可以是绝对路径或者相对路径
;process_name=%(program_name)s ; 一个python字符串表达式，用来表示supervisor进程启动的这个的名称，默认值是%(program_name)s
;numprocs=1                    ; Supervisor启动这个程序的多个实例，如果numprocs&gt;1，则process_name的表达式必须包含%(process_num)s，默认是1
;directory=/tmp                ; supervisord在生成子进程的时候会切换到该目录
;umask=022                     ; umask for process (default None)
;priority=999                  ; 权重，可以控制程序启动和关闭时的顺序，权重越低：越早启动，越晚关闭。默认值是999
;autostart=true                ; 如果设置为true，当supervisord启动的时候，进程会自动启动
;autorestart=true              ; 设置为随 supervisord 重启而重启，值可以是false、true、unexpected。false：进程不会自动重启
;startsecs=10                  ; 程序启动后等待多长时间后才认为程序启动成功，默认是10秒
;startretries=3                ; supervisord尝试启动一个程序时尝试的次数。默认是3
;exitcodes=0,2                 ; 一个预期的退出返回码，默认是0,2。
;stopsignal=QUIT               ; 当收到stop请求的时候，发送信号给程序，默认是TERM信号，也可以是 HUP, INT, QUIT, KILL, USR1, or USR2
;stopwaitsecs=10               ; 在操作系统给supervisord发送SIGCHILD信号时等待的时间
;user=chrism                   ; 如果supervisord以root运行，则会使用这个设置用户启动子程序
;redirect_stderr=true          ; 如果设置为true，进程则会把标准错误输出到supervisord后台的标准输出文件描述符
;stdout_logfile=/a/path        ; 把进程的标准输出写入文件中，如果stdout_logfile没有设置或者设置为AUTO，则supervisor会自动选择一个文件位置
;stdout_logfile_maxbytes=1MB   ; 标准输出log文件达到多少后自动进行轮转，单位是KB、MB、GB。如果设置为0则表示不限制日志文件大小
;stdout_logfile_backups=10     ; 标准输出日志轮转备份的数量，默认是10，如果设置为0，则不备份
;stdout_capture_maxbytes=1MB   ; 当进程处于stderr capture mode模式的时候，写入FIFO队列的最大bytes值，单位可以是KB、MB、GB
;stdout_events_enabled=false   ; 如果设置为true，当进程在写它的stderr
;stderr_logfile=/a/path        ; 把进程的错误日志输出一个文件中，除非redirect_stderr参数被设置为true
;stderr_logfile_maxbytes=1MB   ; 错误log文件达到多少后自动进行轮转，单位是KB、MB、GB。如果设置为0则表示不限制日志文件大小
;stderr_logfile_backups=10     ; 错误日志轮转备份的数量，默认是10，如果设置为0，则不备份
;stderr_capture_maxbytes=1MB   ; 当进程处于stderr capture mode模式的时候，写入FIFO队列的最大bytes值，单位可以是KB、MB、GB
;stderr_events_enabled=false   ; 如果设置为true，当进程在写它的stderr到文件描述符的时候，PROCESS_LOG_STDERR事件会被触发
;environment=A=1,B=2           ; 一个k/v对的list列表
;serverurl=AUTO                ; 是否允许子进程和内部的HTTP服务通讯，如果设置为AUTO，supervisor会自动的构造一个url
 
; The below sample eventlistener section shows all possible
; eventlistener subsection values, create one or more &#39;</span>real<span class="token string">&#39;
; eventlistener: sections to be able to handle event notifications
; sent by supervisor.
 #这个地方是自定义一个守护进程
[program:elasticsearch]                       ; 定义一个守护进程 elasticsearch
environment=ES_HOME=/usr/local/elasticsearch  ; 设置ES_HOME 环境变量
user=elk                                      ; 启动elasticsearch 的用户
directory=/usr/local/elasticsearch            ; 进入到这个目录中
command=/usr/local/elasticsearch/bin/elasticsearch ; 执行启动命令
numprocs=1                                    ; Supervisor启动这个程序的多个实例，如果numprocs&gt;1，则process_name的表达式必须包含%(process_num)s，默认是1
autostart=true                                ; 设置为随 supervisord 启动而启动
autorestart=true                              ; 设置为随 supervisord 重启而重启
startretries=3                                ; 设置elasticsearch 重启的重试次数
priority=1                                    ; 权重，可以控制程序启动和关闭时的顺序，权重越低：越早启动，越晚关闭。默认值是999  
 
;[eventlistener:theeventlistenername]
;command=/bin/eventlistener    ; the program (relative uses PATH, can take args)
;process_name=%(program_name)s ; process_name expr (default %(program_name)s)
;numprocs=1                    ; number of processes copies to start (def 1)
;events=EVENT                  ; event notif. types to subscribe to (req&#39;</span>d<span class="token punctuation">)</span>
<span class="token punctuation">;</span><span class="token assign-left variable">buffer_size</span><span class="token operator">=</span><span class="token number">10</span>                <span class="token punctuation">;</span> event buffer queue size <span class="token punctuation">(</span>default <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token punctuation">;</span><span class="token assign-left variable">directory</span><span class="token operator">=</span>/tmp                <span class="token punctuation">;</span> directory to cwd to before <span class="token builtin class-name">exec</span> <span class="token punctuation">(</span>def no cwd<span class="token punctuation">)</span>
<span class="token punctuation">;</span><span class="token assign-left variable">umask</span><span class="token operator">=</span>022                     <span class="token punctuation">;</span> <span class="token builtin class-name">umask</span> <span class="token keyword">for</span> process <span class="token punctuation">(</span>default None<span class="token punctuation">)</span>
<span class="token punctuation">;</span><span class="token assign-left variable">priority</span><span class="token operator">=</span>-1                   <span class="token punctuation">;</span> the relative start priority <span class="token punctuation">(</span>default -1<span class="token punctuation">)</span>
<span class="token punctuation">;</span><span class="token assign-left variable">autostart</span><span class="token operator">=</span>true                <span class="token punctuation">;</span> start at supervisord start <span class="token punctuation">(</span>default: <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">;</span><span class="token assign-left variable">autorestart</span><span class="token operator">=</span>unexpected        <span class="token punctuation">;</span> restart at unexpected quit <span class="token punctuation">(</span>default: unexpected<span class="token punctuation">)</span>
<span class="token punctuation">;</span><span class="token assign-left variable">startsecs</span><span class="token operator">=</span><span class="token number">10</span>                  <span class="token punctuation">;</span> number of secs prog must stay running <span class="token punctuation">(</span>def. <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">;</span><span class="token assign-left variable">startretries</span><span class="token operator">=</span><span class="token number">3</span>                <span class="token punctuation">;</span> max <span class="token comment"># of serial start failures (default 3)</span>
<span class="token punctuation">;</span><span class="token assign-left variable">exitcodes</span><span class="token operator">=</span><span class="token number">0,2</span>                 <span class="token punctuation">;</span> <span class="token string">&#39;expected&#39;</span> <span class="token builtin class-name">exit</span> codes <span class="token keyword">for</span> process <span class="token punctuation">(</span>default <span class="token number">0,2</span><span class="token punctuation">)</span>
<span class="token punctuation">;</span><span class="token assign-left variable">stopsignal</span><span class="token operator">=</span>QUIT               <span class="token punctuation">;</span> signal used to <span class="token function">kill</span> process <span class="token punctuation">(</span>default <span class="token environment constant">TERM</span><span class="token punctuation">)</span>
<span class="token punctuation">;</span><span class="token assign-left variable">stopwaitsecs</span><span class="token operator">=</span><span class="token number">10</span>               <span class="token punctuation">;</span> max num secs to <span class="token function">wait</span> b4 SIGKILL <span class="token punctuation">(</span>default <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token punctuation">;</span><span class="token assign-left variable">user</span><span class="token operator">=</span>chrism                   <span class="token punctuation">;</span> setuid to this UNIX account to run the program
<span class="token punctuation">;</span><span class="token assign-left variable">redirect_stderr</span><span class="token operator">=</span>true          <span class="token punctuation">;</span> redirect proc stderr to stdout <span class="token punctuation">(</span>default <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">;</span><span class="token assign-left variable">stdout_logfile</span><span class="token operator">=</span>/a/path        <span class="token punctuation">;</span> stdout log path, NONE <span class="token keyword">for</span> none<span class="token punctuation">;</span> default AUTO
<span class="token punctuation">;</span><span class="token assign-left variable">stdout_logfile_maxbytes</span><span class="token operator">=</span>1MB   <span class="token punctuation">;</span> max <span class="token comment"># logfile bytes b4 rotation (default 50MB)</span>
<span class="token punctuation">;</span><span class="token assign-left variable">stdout_logfile_backups</span><span class="token operator">=</span><span class="token number">10</span>     <span class="token punctuation">;</span> <span class="token comment"># of stdout logfile backups (default 10)</span>
<span class="token punctuation">;</span><span class="token assign-left variable">stdout_events_enabled</span><span class="token operator">=</span>false   <span class="token punctuation">;</span> emit events on stdout writes <span class="token punctuation">(</span>default <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">;</span><span class="token assign-left variable">stderr_logfile</span><span class="token operator">=</span>/a/path        <span class="token punctuation">;</span> stderr log path, NONE <span class="token keyword">for</span> none<span class="token punctuation">;</span> default AUTO
<span class="token punctuation">;</span><span class="token assign-left variable">stderr_logfile_maxbytes</span><span class="token operator">=</span>1MB   <span class="token punctuation">;</span> max <span class="token comment"># logfile bytes b4 rotation (default 50MB)</span>
<span class="token punctuation">;</span>stderr_logfile_backups        <span class="token punctuation">;</span> <span class="token comment"># of stderr logfile backups (default 10)</span>
<span class="token punctuation">;</span><span class="token assign-left variable">stderr_events_enabled</span><span class="token operator">=</span>false   <span class="token punctuation">;</span> emit events on stderr writes <span class="token punctuation">(</span>default <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">;</span><span class="token assign-left variable">environment</span><span class="token operator">=</span>A<span class="token operator">=</span><span class="token number">1</span>,B<span class="token operator">=</span><span class="token number">2</span>           <span class="token punctuation">;</span> process environment additions
<span class="token punctuation">;</span><span class="token assign-left variable">serverurl</span><span class="token operator">=</span>AUTO                <span class="token punctuation">;</span> override serverurl computation <span class="token punctuation">(</span>childutils<span class="token punctuation">)</span>
 
<span class="token punctuation">;</span> The below sample group section shows all possible group values,
<span class="token punctuation">;</span> create one or <span class="token function">more</span> <span class="token string">&#39;real&#39;</span> group: sections to create <span class="token string">&quot;heterogeneous&quot;</span>
<span class="token punctuation">;</span> process groups.
 
<span class="token punctuation">;</span><span class="token punctuation">[</span>group:thegroupname<span class="token punctuation">]</span>          <span class="token punctuation">;</span> 服务组管理，可以将多个服务名写到这里管理<span class="token punctuation">(</span>组名自定义）
<span class="token punctuation">;</span><span class="token assign-left variable">programs</span><span class="token operator">=</span>progname1,progname2  <span class="token punctuation">;</span> 上面配置好的服务名，比如elasticsearch,kibana,logstash
<span class="token punctuation">;</span><span class="token assign-left variable">priority</span><span class="token operator">=</span><span class="token number">999</span>                  <span class="token punctuation">;</span> the relative start priority <span class="token punctuation">(</span>default <span class="token number">999</span><span class="token punctuation">)</span>
 
<span class="token punctuation">;</span> The <span class="token punctuation">[</span>include<span class="token punctuation">]</span> section can just contain the <span class="token string">&quot;files&quot;</span> setting.  This
<span class="token punctuation">;</span> setting can list multiple files <span class="token punctuation">(</span>separated by whitespace or
<span class="token punctuation">;</span> newlines<span class="token punctuation">)</span>.  It can also contain wildcards.  The filenames are
<span class="token punctuation">;</span> interpreted as relative to this file.  Included files *cannot*
<span class="token punctuation">;</span> include files themselves.
 
<span class="token punctuation">[</span>include<span class="token punctuation">]</span>
files <span class="token operator">=</span> supervisord.d/*.ini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要部署的程序test_one配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>program:test_one<span class="token punctuation">]</span>
<span class="token assign-left variable">command</span><span class="token operator">=</span>java <span class="token parameter variable">-jar</span> /data/smallvideo/supervisor/taskApp-exec.jar TaskTestOne  <span class="token punctuation">;</span> 被监控的进程路径
<span class="token assign-left variable">priority</span><span class="token operator">=</span><span class="token number">1</span>                    <span class="token punctuation">;</span> 数字越高，优先级越高
<span class="token assign-left variable">numprocs</span><span class="token operator">=</span><span class="token number">1</span>                    <span class="token punctuation">;</span> 启动几个进程
<span class="token assign-left variable">autostart</span><span class="token operator">=</span>true                <span class="token punctuation">;</span> 随着supervisord的启动而启动
<span class="token assign-left variable">autorestart</span><span class="token operator">=</span>true              <span class="token punctuation">;</span> 自动重启
<span class="token assign-left variable">startretries</span><span class="token operator">=</span><span class="token number">10</span>               <span class="token punctuation">;</span> 启动失败时的最多重试次数
<span class="token assign-left variable">exitcodes</span><span class="token operator">=</span><span class="token number">0</span>                   <span class="token punctuation">;</span> 正常退出代码
<span class="token assign-left variable">stopsignal</span><span class="token operator">=</span>KILL               <span class="token punctuation">;</span> 用来杀死进程的信号
<span class="token assign-left variable">stopwaitsecs</span><span class="token operator">=</span><span class="token number">10</span>               <span class="token punctuation">;</span> 发送SIGKILL前的等待时间
<span class="token assign-left variable">redirect_stderr</span><span class="token operator">=</span>true          <span class="token punctuation">;</span> 重定向stderr到stdout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>supervisor配置文件详解</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>- command：启动程序使用的命令，可以是绝对路径或者相对路径
- process_name：一个python字符串表达式，用来表示supervisor进程启动的这个的名称，默认值是%<span class="token punctuation">(</span>program_name<span class="token punctuation">)</span>s
- numprocs：Supervisor启动这个程序的多个实例，如果numprocs<span class="token operator">&gt;</span><span class="token number">1</span>，则process_name的表达式必须包含%<span class="token punctuation">(</span>process_num<span class="token punctuation">)</span>s，默认是1
- numprocs_start：一个int偏移值，当启动实例的时候用来计算numprocs的值
- priority：权重，可以控制程序启动和关闭时的顺序，权重越低：越早启动，越晚关闭。默认值是999
- autostart：如果设置为true，当supervisord启动的时候，进程会自动重启。
- autorestart：值可以是false、true、unexpected。false：进程不会自动重启，unexpected：当程序退出时的退出码不是exitcodes中定义的时，进程会重启，true：进程会无条件重启当退出的时候。
- startsecs：程序启动后等待多长时间后才认为程序启动成功
- startretries：supervisord尝试启动一个程序时尝试的次数。默认是3
- exitcodes：一个预期的退出返回码，默认是0,2。
- stopsignal：当收到stop请求的时候，发送信号给程序，默认是<span class="token environment constant">TERM</span>信号，也可以是 HUP, INT, QUIT, KILL, USR1, or USR2。
- stopwaitsecs：在操作系统给supervisord发送SIGCHILD信号时等待的时间
- stopasgroup：如果设置为true，则会使supervisor发送停止信号到整个进程组
- killasgroup：如果设置为true，则在给程序发送SIGKILL信号的时候，会发送到整个进程组，它的子进程也会受到影响。
- user：如果supervisord以root运行，则会使用这个设置用户启动子程序
- redirect_stderr：如果设置为true，进程则会把标准错误输出到supervisord后台的标准输出文件描述符。
- stdout_logfile：把进程的标准输出写入文件中，如果stdout_logfile没有设置或者设置为AUTO，则supervisor会自动选择一个文件位置。
- stdout_logfile_maxbytes：标准输出log文件达到多少后自动进行轮转，单位是KB、MB、GB。如果设置为0则表示不限制日志文件大小
- stdout_logfile_backups：标准输出日志轮转备份的数量，默认是10，如果设置为0，则不备份
- stdout_capture_maxbytes：当进程处于stderr capture mode模式的时候，写入FIFO队列的最大bytes值，单位可以是KB、MB、GB
- stdout_events_enabled：如果设置为true，当进程在写它的stderr到文件描述符的时候，PROCESS_LOG_STDERR事件会被触发
- stderr_logfile：把进程的错误日志输出一个文件中，除非redirect_stderr参数被设置为true
- stderr_logfile_maxbytes：错误log文件达到多少后自动进行轮转，单位是KB、MB、GB。如果设置为0则表示不限制日志文件大小
- stderr_logfile_backups：错误日志轮转备份的数量，默认是10，如果设置为0，则不备份
- stderr_capture_maxbytes：当进程处于stderr capture mode模式的时候，写入FIFO队列的最大bytes值，单位可以是KB、MB、GB
- stderr_events_enabled：如果设置为true，当进程在写它的stderr到文件描述符的时候，PROCESS_LOG_STDERR事件会被触发
- environment：一个k/v对的list列表
- directory：supervisord在生成子进程的时候会切换到该目录
- umask：设置进程的umask
- serverurl：是否允许子进程和内部的HTTP服务通讯，如果设置为AUTO，supervisor会自动的构造一个url
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h1>`,22),u={href:"http://www.cnblogs.com/toutou/",target:"_blank",rel:"noopener noreferrer"},d={href:"http://www.cnblogs.com/toutou/",target:"_blank",rel:"noopener noreferrer"};function v(k,m){const a=l("ExternalLinkIcon");return p(),i("div",null,[c,n("p",null,[s("作 者："),n("a",u,[s("请叫我头头哥"),e(a)]),s(" 出 处："),n("a",d,[s("http://www.cnblogs.com/toutou/"),e(a)])])])}const f=t(r,[["render",v],["__file","supervisor.html.vue"]]);export{f as default};
