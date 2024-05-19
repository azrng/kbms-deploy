import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as e,d as l}from"./app-Bfb6-vFH.js";const s={},d=l(`<h2 id="连接数据库" tabindex="-1"><a class="header-anchor" href="#连接数据库"><span>连接数据库</span></a></h2><h3 id="net连接" tabindex="-1"><a class="header-anchor" href="#net连接"><span>.Net连接</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>server=xxx;port=3306;userid=myuserid;password=pwd123;database=db125;charset=utf8;
Server=192.168.100.104;database=azrngblog;uid=root;pwd=123456;SslMode=None;
Server=localhost;Database=test;Port=3306;charset=utf8;uid=root;pwd=123456;sslmode=none;TreatTinyAsBoolean=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下是启用连接池的，等用于下面</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>server=xxx;port=3306;userid=myuserid;password=pwd123;database=db125;charset=utf8;Pooling=true;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>大多数情况下使用连接池是更好的，但是有些情况下如果一个实例上点数据库就有好几百个，超过连接数的限制，那么这种情况下应该不启用连接池。设置Pooling=false。</p><h3 id="jdbc连接" tabindex="-1"><a class="header-anchor" href="#jdbc连接"><span>JDBC连接</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>jdbc:mysql://localhost:3306
jdbc:mysql://localhost:3306?user=root
dbc:mysql://localhost:3306?user=root&amp;password=123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查询" tabindex="-1"><a class="header-anchor" href="#查询"><span>查询</span></a></h2><h3 id="分页返回记录条数" tabindex="-1"><a class="header-anchor" href="#分页返回记录条数"><span>分页返回记录条数</span></a></h3><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public PagingModel&lt;List&lt;AuthorManageResponse&gt;&gt; GetAuthorList(int PageNumber, int PageSize, string Value)
{
	PagingModel&lt;List&lt;AuthorManageResponse&gt;&gt; pagingModel = new PagingModel&lt;List&lt;AuthorManageResponse&gt;&gt;();
	using (var db = new RepositoryBase().BeginTrans())
	{
		string strSql = @&quot;SELECT SQL_CALC_FOUND_ROWS * FROM dynews_channel a WHERE a.\`Name\` like @keyword and a.F_DeleteMark==0 and a.F_EnabledMark=1 ORDER BY a.F_CreatorTime desc LIMIT @PageIndex,@PageCount;
SELECT found_rows() AS rowcountt; &quot;;
		MySqlParameter[] mySqlParameters = {
				 new MySqlParameter(){ ParameterName=&quot;@keyword &quot;,Value=&quot;%&quot;+Value+&quot;%&quot;},
				 new MySqlParameter(){ ParameterName=&quot;@PageIndex&quot;,Value=(PageNumber-1)*PageSize},
				 new MySqlParameter(){ ParameterName=&quot;@PageCount&quot;,Value=PageSize}
				};
		DataSet ds = DbHelper.Query(strSql, mySqlParameters);//这个是一个简单的根据sql语句查询方法
		DataTable dt1 = ds.Tables[0];
		DataTable dt2 = ds.Tables[1];

		var channelList = Json.ToObject&lt;List&lt;AuthorManageResponse&gt;&gt;(dt1.ToJson());
		for (int i = 0; i &lt; channelList.Count; i++)
		{
			channelList[i].No = ((PageNumber - 1) * PageSize) + i + 1;

		}
		long total = dt2.Rows[0][0].ToInt();
		pagingModel.PageData = channelList;
		pagingModel.Total = dt2.Rows[0][0].ToInt();
		pagingModel.Pages = total.ToInt() / PageSize;
		return pagingModel;
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回二进制" tabindex="-1"><a class="header-anchor" href="#返回二进制"><span>返回二进制</span></a></h3><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public void BinaryAndVarBinaryParameters()
        {
            AdoHelper ado = AdoHelper.CreateHelper(DbProvideType.MySql);

            ado.ExecuteNonQuery(conn, CommandType.Text, &quot;CREATE PROCEDURE spTest3(OUT out1 BINARY(20), OUT out2 VARBINARY(20)) &quot; +
          &quot;BEGIN SET out1 = &#39;out1&#39;; SET out2=&#39;out2&#39;; END&quot;);


            IDataParameter[] param1 = new IDataParameter[]{
                ado.GetParameter(&quot;out1&quot;, DbType.Object, ParameterDirection.Output),
                ado.GetParameter(&quot;out2&quot;, DbType.Object, ParameterDirection.Output)
            };
            
            ado.ExecuteNonQuery(conn, CommandType.StoredProcedure, &quot;spTest3&quot;, param1);
            Console.ReadLine();
        }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="调用存储过程" tabindex="-1"><a class="header-anchor" href="#调用存储过程"><span>调用存储过程</span></a></h2><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public void InputOutputParameters()
{
    AdoHelper ado = AdoHelper.CreateHelper(DbProvideType.MySql);

    ado.ExecuteNonQuery(conn, CommandType.Text, &quot;CREATE PROCEDURE spTest1( INOUT strVal VARCHAR(50), INOUT numVal INT, OUT outVal INT UNSIGNED ) &quot; +
    &quot;BEGIN  SET strVal = CONCAT(strVal,&#39;ending&#39;); SET numVal=numVal * 2;  SET outVal=99; END&quot;);

    IDataParameter[] param1 = new IDataParameter[]{
        ado.GetParameter(&quot;numVal&quot;, DbType.Int32, ParameterDirection.InputOutput),
        ado.GetParameter(&quot;strVal&quot;, DbType.String, ParameterDirection.InputOutput),
        ado.GetParameter(&quot;outVal&quot;, DbType.UInt64, ParameterDirection.Output)
    };
    //存储过程参数按照名称对应
    param1[1].Value = &quot;beginning&quot;;
    param1[0].Value = 32;
    ado.ExecuteNonQuery(conn, CommandType.StoredProcedure, &quot;spTest1&quot;, param1);
    Console.ReadLine();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="批量导入" tabindex="-1"><a class="header-anchor" href="#批量导入"><span>批量导入</span></a></h2><p>MySqlBulkLoader 使用这个实现从excel中的数据导入到mysql数据库中</p><p>举例子：https://blog.csdn.net/zhou2s_101216/article/details/50875211</p><h2 id="dbhelpermysql" tabindex="-1"><a class="header-anchor" href="#dbhelpermysql"><span>DbHelperMySQL</span></a></h2><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public class DbHelperMySQL
{
    //数据库连接字符串(web.config来配置)，可以动态更改connectionString支持多数据库.
    public static string connectionString = &quot;server=localhost;database=table1;uid=root;pwd=123456&quot;;

    #region 最大值

    /// &lt;summary&gt;
    /// 得到最大值
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;FieldName&quot;&gt;字段名&lt;/param&gt;
    /// &lt;param name=&quot;TableName&quot;&gt;表名字&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    public static int GetMaxID(string FieldName, string TableName)
    {
        string strsql = &quot;select max(&quot; + FieldName + &quot;)+1 from &quot; + TableName;
        object obj = GetSingle(strsql);
        if (obj == null)
        {
            return 1;
        }
        else
        {
            return int.Parse(obj.ToString());
        }
    }

    #endregion

    #region 是否存在

    /// &lt;summary&gt;
    /// 是否存在
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;strSql&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    public static bool Exists(string strSql)
    {
        object obj = GetSingle(strSql);
        int cmdresult;
        if ((Object.Equals(obj, null)) || (Object.Equals(obj, System.DBNull.Value)))
        {
            cmdresult = 0;
        }
        else
        {
            cmdresult = int.Parse(obj.ToString());
        }

        return cmdresult != 0;
    }

    /// &lt;summary&gt;
    /// 是否存在（基于MySqlParameter）
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;strSql&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;cmdParms&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    public static bool Exists(string strSql, params MySqlParameter[] cmdParms)
    {
        object obj = GetSingle(strSql, cmdParms);
        int cmdresult;
        if ((Object.Equals(obj, null)) || (Object.Equals(obj, System.DBNull.Value)))
        {
            cmdresult = 0;
        }
        else
        {
            cmdresult = int.Parse(obj.ToString());
        }

        return cmdresult != 0;
    }

    #endregion

    #region 增删改

    /// &lt;summary&gt;
    /// 返回影响的记录数
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;SQLString&quot;&gt;SQL语句&lt;/param&gt;
    /// &lt;returns&gt;影响的记录数&lt;/returns&gt;
    public static int ExecuteSql(string SQLString)
    {
        using (MySqlConnection connection = new MySqlConnection(connectionString))
        {
            using (MySqlCommand cmd = new MySqlCommand(SQLString, connection))
            {
                try
                {
                    connection.Open();
                    return cmd.ExecuteNonQuery();
                }
                catch (MySqlException e)
                {
                    connection.Close();
                    throw e;
                }
            }
        }
    }

    /// &lt;summary&gt;
    /// 返回受影响行数
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;sql&quot;&gt;sql&lt;/param&gt;
    /// &lt;param name=&quot;times&quot;&gt;超时时间&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    public static int ExecuteSqlByTime(string sql, int times)
    {
        using (MySqlConnection connection = new MySqlConnection(connectionString))
        {
            using (MySqlCommand cmd = new MySqlCommand(sql, connection))
            {
                try
                {
                    connection.Open();
                    cmd.CommandTimeout = times;
                    int rows = cmd.ExecuteNonQuery();
                    return rows;
                }
                catch (MySql.Data.MySqlClient.MySqlException e)
                {
                    connection.Close();
                    throw e;
                }
            }
        }
    }

    /// &lt;summary&gt;
    /// 返回受影响行数
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;SQLString&quot;&gt;strsql&lt;/param&gt;
    /// &lt;param name=&quot;cmdParms&quot;&gt;参数&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    public static int ExecuteSql(string SQLString, params MySqlParameter[] cmdParms)
    {
        using (MySqlConnection connection = new MySqlConnection(connectionString))
        {
            if (connection.State == ConnectionState.Closed)
            {
                connection.Open();
            }

            using (MySqlCommand cmd = new MySqlCommand(SQLString, connection))
            {
                if (cmdParms != null)
                {
                    cmd.Parameters.AddRange(cmdParms);
                }

                try
                {
                    return Convert.ToInt32(cmd.ExecuteNonQuery());
                }
                catch (Exception)
                {
                    return 0;
                }
            }
        }
    }

    #endregion

    #region 执行多条SQL语句

    /// &lt;summary&gt;
    /// 执行多条SQL语句，实现数据库事务。
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;SQLStringList&quot;&gt;多条SQL语句&lt;/param&gt;
    public static int ExecuteSqlTran(List&lt;String&gt; SQLStringList)
    {
        using (MySqlConnection conn = new MySqlConnection(connectionString))
        {
            conn.Open();
            MySqlCommand cmd = new MySqlCommand();
            cmd.Connection = conn;
            MySqlTransaction tx = conn.BeginTransaction();
            cmd.Transaction = tx;
            try
            {
                int count = 0;
                for (int n = 0; n &lt; SQLStringList.Count; n++)
                {
                    string strsql = SQLStringList[n];
                    if (strsql.Trim().Length &gt; 1)
                    {
                        cmd.CommandText = strsql;
                        count += cmd.ExecuteNonQuery();
                    }
                }

                tx.Commit();
                return count;
            }
            catch
            {
                tx.Rollback();
                return 0;
            }
        }
    }

    #endregion

    #region 首行首列

    /// &lt;summary&gt;
    /// 首行首列
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;SQLString&quot;&gt;计算查询结果语句&lt;/param&gt;
    /// &lt;returns&gt;查询结果（object）&lt;/returns&gt;
    public static object GetSingle(string SQLString)
    {
        using (MySqlConnection connection = new MySqlConnection(connectionString))
        {
            using (MySqlCommand cmd = new MySqlCommand(SQLString, connection))
            {
                try
                {
                    connection.Open();
                    object obj = cmd.ExecuteScalar();
                    if ((Object.Equals(obj, null)) || (Object.Equals(obj, System.DBNull.Value)))
                    {
                        return null;
                    }
                    else
                    {
                        return obj;
                    }
                }
                catch (MySql.Data.MySqlClient.MySqlException e)
                {
                    connection.Close();
                    throw e;
                }
            }
        }
    }

    /// &lt;summary&gt;
    /// 首行首列
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;SQLString&quot;&gt;sql语句&lt;/param&gt;
    /// &lt;param name=&quot;Times&quot;&gt;过期时间&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    public static object GetSingle(string SQLString, int Times)
    {
        using (MySqlConnection connection = new MySqlConnection(connectionString))
        {
            using (MySqlCommand cmd = new MySqlCommand(SQLString, connection))
            {
                try
                {
                    connection.Open();
                    cmd.CommandTimeout = Times;
                    object obj = cmd.ExecuteScalar();
                    if (Equals(obj, null) || (Equals(obj, DBNull.Value)))
                    {
                        return null;
                    }
                    else
                    {
                        return obj;
                    }
                }
                catch (MySqlException e)
                {
                    connection.Close();
                    throw e;
                }
            }
        }
    }

    /// &lt;summary&gt;
    /// 首行首列
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;SQLString&quot;&gt;strsql&lt;/param&gt;
    /// &lt;param name=&quot;cmdParms&quot;&gt;参数&lt;/param&gt;
    /// &lt;returns&gt;首行首列&lt;/returns&gt;
    public static object GetSingle(string SQLString, params MySqlParameter[] cmdParms)
    {
        using (MySqlConnection connection = new MySqlConnection(connectionString))
        {
            using (MySqlCommand cmd = new MySqlCommand())
            {
                try
                {
                    PrepareCommand(cmd, connection, null, SQLString, cmdParms);
                    object obj = cmd.ExecuteScalar();
                    cmd.Parameters.Clear();
                    if ((Equals(obj, null)) || (Equals(obj, DBNull.Value)))
                    {
                        return null;
                    }
                    else
                    {
                        return obj;
                    }
                }
                catch (MySqlException e)
                {
                    throw e;
                }
            }
        }
    }

    #endregion

    #region 查询

    /// &lt;summary&gt;
    /// 执行查询语句，返回DataSet
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;SQLString&quot;&gt;查询语句&lt;/param&gt;
    /// &lt;returns&gt;DataSet&lt;/returns&gt;
    public static DataSet Query(string SQLString)
    {
        using (MySqlConnection connection = new MySqlConnection(connectionString))
        {
            DataSet ds = new DataSet();
            try
            {
                connection.Open();
                MySqlDataAdapter command = new MySqlDataAdapter(SQLString, connection);
                command.Fill(ds, &quot;ds&quot;);
            }
            catch (MySqlException ex)
            {
                throw new Exception(ex.Message);
            }

            return ds;
        }
    }

    /// &lt;summary&gt;
    /// 执行查询语句，返回DataSet
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;SQLString&quot;&gt;sql语句&lt;/param&gt;
    /// &lt;param name=&quot;Times&quot;&gt;过期时间&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    public static DataSet Query(string SQLString, int Times)
    {
        using (MySqlConnection connection = new MySqlConnection(connectionString))
        {
            DataSet ds = new DataSet();
            try
            {
                connection.Open();
                MySqlDataAdapter command = new MySqlDataAdapter(SQLString, connection);
                command.SelectCommand.CommandTimeout = Times;
                command.Fill(ds, &quot;ds&quot;);
            }
            catch (MySqlException ex)
            {
                throw new Exception(ex.Message);
            }

            return ds;
        }
    }

    /// &lt;summary&gt;
    /// 执行查询语句，返回DataSet
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;SQLString&quot;&gt;strsql&lt;/param&gt;
    /// &lt;param name=&quot;cmdParms&quot;&gt;参数&lt;/param&gt;
    /// &lt;returns&gt;返回DataSet&lt;/returns&gt;
    public static DataSet GetData(string SQLString, params MySqlParameter[] cmdParms)
    {
        using (MySqlConnection connection = new MySqlConnection(connectionString))
        {
            MySqlCommand cmd = new MySqlCommand();
            PrepareCommand(cmd, connection, null, SQLString, cmdParms);
            using (MySqlDataAdapter da = new MySqlDataAdapter(cmd))
            {
                DataSet ds = new DataSet();
                try
                {
                    da.Fill(ds);
                    cmd.Parameters.Clear();
                }
                catch (MySqlException ex)
                {
                    throw new Exception(ex.Message);
                }

                return ds;
            }
        }
    }

    #endregion

    #region 执行存储过程

    /// &lt;summary&gt;
    /// 执行存储过程
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;ProcName&quot;&gt;存储过程名称&lt;/param&gt;
    /// &lt;param name=&quot;parm&quot;&gt;参数&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    public static MySqlDataReader GetDataTableByProc(string ProcName, params MySqlParameter[] parm)
    {
        MySqlConnection conn = new MySqlConnection(connectionString);
        using (MySqlCommand cmd = new MySqlCommand(ProcName, conn))
        {
            if (conn.State == ConnectionState.Closed)
            {
                conn.Open();
            }

            if (parm != null)
            {
                cmd.Parameters.AddRange(parm);
            }

            cmd.CommandType = CommandType.StoredProcedure;
            return cmd.ExecuteReader(CommandBehavior.CloseConnection);
        }
    }

    #endregion

    #region 扩展

    /// &lt;summary&gt;
    /// 执行sql语句
    /// &lt;/summary&gt;
    private static void PrepareCommand(MySqlCommand cmd, MySqlConnection conn, MySqlTransaction trans,
        string cmdText, MySqlParameter[] cmdParms)
    {
        if (conn.State != ConnectionState.Open)
            conn.Open();
        cmd.Connection = conn;
        cmd.CommandText = cmdText;
        if (trans != null)
            cmd.Transaction = trans;
        cmd.CommandType = CommandType.Text; //cmdType;
        if (cmdParms != null)
        {
            foreach (MySqlParameter parameter in cmdParms)
            {
                if ((parameter.Direction == ParameterDirection.InputOutput ||
                        parameter.Direction == ParameterDirection.Input) &amp;&amp;
                    (parameter.Value == null))
                {
                    parameter.Value = DBNull.Value;
                }

                cmd.Parameters.Add(parameter);
            }
        }
    }

    /// &lt;summary&gt;
    /// 执行多条SQL语句，实现数据库事务。
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;SQLStringList&quot;&gt;SQL语句的哈希表（key为sql语句，value是该语句的MySqlParameter[]）&lt;/param&gt;
    public static void ExecuteSqlTran(Hashtable SQLStringList)
    {
        using (MySqlConnection conn = new MySqlConnection(connectionString))
        {
            conn.Open();
            using (MySqlTransaction trans = conn.BeginTransaction())
            {
                MySqlCommand cmd = new MySqlCommand();
                try
                {
                    //循环
                    foreach (DictionaryEntry myDE in SQLStringList)
                    {
                        string cmdText = myDE.Key.ToString();
                        MySqlParameter[] cmdParms = (MySqlParameter[])myDE.Value;
                        PrepareCommand(cmd, conn, trans, cmdText, cmdParms);
                        int val = cmd.ExecuteNonQuery();
                        cmd.Parameters.Clear();
                    }

                    trans.Commit();
                }
                catch
                {
                    trans.Rollback();
                    throw;
                }
            }
        }
    }

    /// &lt;summary&gt;
    /// 执行多条SQL语句，实现数据库事务。
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;SQLStringList&quot;&gt;SQL语句的哈希表（key为sql语句，value是该语句的MySqlParameter[]）&lt;/param&gt;
    public static void ExecuteSqlTranWithIndentity(Hashtable SQLStringList)
    {
        using (MySqlConnection conn = new MySqlConnection(connectionString))
        {
            conn.Open();
            using (MySqlTransaction trans = conn.BeginTransaction())
            {
                MySqlCommand cmd = new MySqlCommand();
                try
                {
                    int indentity = 0;
                    //循环
                    foreach (DictionaryEntry myDE in SQLStringList)
                    {
                        string cmdText = myDE.Key.ToString();
                        MySqlParameter[] cmdParms = (MySqlParameter[])myDE.Value;
                        foreach (MySqlParameter q in cmdParms)
                        {
                            if (q.Direction == ParameterDirection.InputOutput)
                            {
                                q.Value = indentity;
                            }
                        }

                        PrepareCommand(cmd, conn, trans, cmdText, cmdParms);
                        int val = cmd.ExecuteNonQuery();
                        foreach (MySqlParameter q in cmdParms)
                        {
                            if (q.Direction == ParameterDirection.Output)
                            {
                                indentity = Convert.ToInt32(q.Value);
                            }
                        }

                        cmd.Parameters.Clear();
                    }

                    trans.Commit();
                }
                catch
                {
                    trans.Rollback();
                    throw;
                }
            }
        }
    }

    #region 查询 * ( 注意：调用该方法后，一定要对MySqlDataReader进行Close )

    /// &lt;summary&gt;
    /// MySqlDataReader查询 * ( 注意：调用该方法后，一定要对MySqlDataReader进行Close )
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;strSQL&quot;&gt;查询语句&lt;/param&gt;
    /// &lt;returns&gt;MySqlDataReader&lt;/returns&gt;
    public static MySqlDataReader ExecuteReader(string SQLString, params MySqlParameter[] cmdParms)
    {
        MySqlDataReader sqldata = null;
        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand cmd = new MySqlCommand();
        try
        {
            PrepareCommand(cmd, connection, null, SQLString, cmdParms);
            MySqlDataReader myReader = cmd.ExecuteReader(CommandBehavior.CloseConnection);
            cmd.Parameters.Clear();
            sqldata = myReader;
        }
        catch (MySqlException)
        {
            sqldata = null;
        }

        return sqldata;
    }

    /// &lt;summary&gt;
    /// 执行查询语句，返回MySqlDataReader ( 注意：调用该方法后，一定要对MySqlDataReader进行Close )
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;strSql&quot;&gt;查询语句&lt;/param&gt;
    /// &lt;returns&gt;MySqlDataReader&lt;/returns&gt;
    public static MySqlDataReader ExecuteReader(string strSql)
    {
        var connection = new MySqlConnection(connectionString);
        var cmd = new MySqlCommand(strSql, connection);
        try
        {
            connection.Open();
            var myReader = cmd.ExecuteReader(CommandBehavior.CloseConnection);
            return myReader;
        }
        catch (MySql.Data.MySqlClient.MySqlException e)
        {
            throw e;
        }
    }

    #endregion

    /// &lt;summary&gt;
    /// 执行带一个存储过程参数的的SQL语句。
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;sqlString&quot;&gt;SQL语句&lt;/param&gt;
    /// &lt;param name=&quot;content&quot;&gt;参数内容,比如一个字段是格式复杂的文章，有特殊符号，可以通过这个方式添加&lt;/param&gt;
    /// &lt;returns&gt;影响的记录数&lt;/returns&gt;
    public static int ExecuteSql(string sqlString, string content)
    {
        using (var connection = new MySqlConnection(connectionString))
        {
            var cmd = new MySqlCommand(sqlString, connection);
            var myParameter = new MySqlParameter(&quot;@content&quot;, SqlDbType.NText) { Value = content };
            cmd.Parameters.Add(myParameter);
            try
            {
                connection.Open();
                var rows = cmd.ExecuteNonQuery();
                return rows;
            }
            catch (MySqlException e)
            {
                throw e;
            }
            finally
            {
                cmd.Dispose();
                connection.Close();
            }
        }
    }

    /// &lt;summary&gt;
    /// 执行带一个存储过程参数的的SQL语句。
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;sqlString&quot;&gt;SQL语句&lt;/param&gt;
    /// &lt;param name=&quot;content&quot;&gt;参数内容,比如一个字段是格式复杂的文章，有特殊符号，可以通过这个方式添加&lt;/param&gt;
    /// &lt;returns&gt;影响的记录数&lt;/returns&gt;
    public static object ExecuteSqlGet(string sqlString, string content)
    {
        using (var connection = new MySqlConnection(connectionString))
        {
            var cmd = new MySqlCommand(sqlString, connection);
            var myParameter = new MySqlParameter(&quot;@content&quot;, SqlDbType.NText) { Value = content };
            cmd.Parameters.Add(myParameter);
            try
            {
                connection.Open();
                var obj = cmd.ExecuteScalar();
                if ((object.Equals(obj, null)) || (object.Equals(obj, DBNull.Value)))
                {
                    return null;
                }
                else
                {
                    return obj;
                }
            }
            catch (MySqlException e)
            {
                throw e;
            }
            finally
            {
                cmd.Dispose();
                connection.Close();
            }
        }
    }

    /// &lt;summary&gt;
    /// 向数据库里插入图像格式的字段(和上面情况类似的另一种实例)
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;strSql&quot;&gt;SQL语句&lt;/param&gt;
    /// &lt;param name=&quot;fs&quot;&gt;图像字节,数据库的字段类型为image的情况&lt;/param&gt;
    /// &lt;returns&gt;影响的记录数&lt;/returns&gt;
    public static int ExecuteSqlInsertImg(string strSql, byte[] fs)
    {
        using (var connection = new MySqlConnection(connectionString))
        {
            var cmd = new MySqlCommand(strSql, connection);
            var myParameter =
                new MySqlParameter(&quot;@fs&quot;, SqlDbType.Image) { Value = fs };
            cmd.Parameters.Add(myParameter);
            try
            {
                connection.Open();
                return cmd.ExecuteNonQuery();
            }
            catch (MySqlException e)
            {
                throw e;
            }
            finally
            {
                cmd.Dispose();
                connection.Close();
            }
        }
    }

    #endregion
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),a=[d];function r(t,v){return i(),e("div",null,a)}const u=n(s,[["render",r],["__file","codeOperator.html.vue"]]),b=JSON.parse('{"path":"/dataBase/mysql/codeOperator.html","title":"操作说明","lang":"zh-CN","frontmatter":{"title":"操作说明","lang":"zh-CN","date":"2021-05-14T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dataBase"],"tag":["无"],"filename":"fanhuierjinzhi","slug":"rsv1ii","docsId":"31802960","description":"连接数据库 .Net连接 默认情况下是启用连接池的，等用于下面 大多数情况下使用连接池是更好的，但是有些情况下如果一个实例上点数据库就有好几百个，超过连接数的限制，那么这种情况下应该不启用连接池。设置Pooling=false。 JDBC连接 查询 分页返回记录条数 返回二进制 调用存储过程 批量导入 MySqlBulkLoader 使用这个实现从ex...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dataBase/mysql/codeOperator.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"操作说明"}],["meta",{"property":"og:description","content":"连接数据库 .Net连接 默认情况下是启用连接池的，等用于下面 大多数情况下使用连接池是更好的，但是有些情况下如果一个实例上点数据库就有好几百个，超过连接数的限制，那么这种情况下应该不启用连接池。设置Pooling=false。 JDBC连接 查询 分页返回记录条数 返回二进制 调用存储过程 批量导入 MySqlBulkLoader 使用这个实现从ex..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-18T14:41:28.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2021-05-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-18T14:41:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"操作说明\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-05-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-18T14:41:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"连接数据库","slug":"连接数据库","link":"#连接数据库","children":[{"level":3,"title":".Net连接","slug":"net连接","link":"#net连接","children":[]},{"level":3,"title":"JDBC连接","slug":"jdbc连接","link":"#jdbc连接","children":[]}]},{"level":2,"title":"查询","slug":"查询","link":"#查询","children":[{"level":3,"title":"分页返回记录条数","slug":"分页返回记录条数","link":"#分页返回记录条数","children":[]},{"level":3,"title":"返回二进制","slug":"返回二进制","link":"#返回二进制","children":[]}]},{"level":2,"title":"调用存储过程","slug":"调用存储过程","link":"#调用存储过程","children":[]},{"level":2,"title":"批量导入","slug":"批量导入","link":"#批量导入","children":[]},{"level":2,"title":"DbHelperMySQL","slug":"dbhelpermysql","link":"#dbhelpermysql","children":[]}],"git":{"createdTime":1695484404000,"updatedTime":1702910488000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":2}]},"readingTime":{"minutes":7.88,"words":2365},"filePathRelative":"dataBase/mysql/codeOperator.md","localizedDate":"2021年5月14日","excerpt":"<h2>连接数据库</h2>\\n<h3>.Net连接</h3>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>server=xxx;port=3306;userid=myuserid;password=pwd123;database=db125;charset=utf8;\\nServer=192.168.100.104;database=azrngblog;uid=root;pwd=123456;SslMode=None;\\nServer=localhost;Database=test;Port=3306;charset=utf8;uid=root;pwd=123456;sslmode=none;TreatTinyAsBoolean=true\\n</code></pre></div>","autoDesc":true}');export{u as comp,b as data};
