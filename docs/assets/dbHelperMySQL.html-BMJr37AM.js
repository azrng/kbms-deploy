import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,b as l}from"./app-DMmdIwn0.js";const t={},a=l(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class DbHelperMySQL
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),s=[a];function r(d,m){return e(),i("div",null,s)}const u=n(t,[["render",r],["__file","dbHelperMySQL.html.vue"]]),o=JSON.parse('{"path":"/dataBase/mysql/dbHelperMySQL.html","title":"DbHelperMySQL","lang":"zh-CN","frontmatter":{"title":"DbHelperMySQL","lang":"zh-CN","date":"2021-05-14T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dataBase"],"tag":["helper"],"head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dataBase/mysql/dbHelperMySQL.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"DbHelperMySQL"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-18T14:41:28.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"helper"}],["meta",{"property":"article:published_time","content":"2021-05-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-18T14:41:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DbHelperMySQL\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-05-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-18T14:41:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[],"git":{"createdTime":1695484404000,"updatedTime":1702910488000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":6.2,"words":1860},"filePathRelative":"dataBase/mysql/dbHelperMySQL.md","localizedDate":"2021年5月14日","excerpt":"<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>public class DbHelperMySQL\\n{\\n    //数据库连接字符串(web.config来配置)，可以动态更改connectionString支持多数据库.\\n    public static string connectionString = \\"server=localhost;database=table1;uid=root;pwd=123456\\";\\n\\n    #region 最大值\\n\\n    /// &lt;summary&gt;\\n    /// 得到最大值\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"FieldName\\"&gt;字段名&lt;/param&gt;\\n    /// &lt;param name=\\"TableName\\"&gt;表名字&lt;/param&gt;\\n    /// &lt;returns&gt;&lt;/returns&gt;\\n    public static int GetMaxID(string FieldName, string TableName)\\n    {\\n        string strsql = \\"select max(\\" + FieldName + \\")+1 from \\" + TableName;\\n        object obj = GetSingle(strsql);\\n        if (obj == null)\\n        {\\n            return 1;\\n        }\\n        else\\n        {\\n            return int.Parse(obj.ToString());\\n        }\\n    }\\n\\n    #endregion\\n\\n    #region 是否存在\\n\\n    /// &lt;summary&gt;\\n    /// 是否存在\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"strSql\\"&gt;&lt;/param&gt;\\n    /// &lt;returns&gt;&lt;/returns&gt;\\n    public static bool Exists(string strSql)\\n    {\\n        object obj = GetSingle(strSql);\\n        int cmdresult;\\n        if ((Object.Equals(obj, null)) || (Object.Equals(obj, System.DBNull.Value)))\\n        {\\n            cmdresult = 0;\\n        }\\n        else\\n        {\\n            cmdresult = int.Parse(obj.ToString());\\n        }\\n\\n        return cmdresult != 0;\\n    }\\n\\n    /// &lt;summary&gt;\\n    /// 是否存在（基于MySqlParameter）\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"strSql\\"&gt;&lt;/param&gt;\\n    /// &lt;param name=\\"cmdParms\\"&gt;&lt;/param&gt;\\n    /// &lt;returns&gt;&lt;/returns&gt;\\n    public static bool Exists(string strSql, params MySqlParameter[] cmdParms)\\n    {\\n        object obj = GetSingle(strSql, cmdParms);\\n        int cmdresult;\\n        if ((Object.Equals(obj, null)) || (Object.Equals(obj, System.DBNull.Value)))\\n        {\\n            cmdresult = 0;\\n        }\\n        else\\n        {\\n            cmdresult = int.Parse(obj.ToString());\\n        }\\n\\n        return cmdresult != 0;\\n    }\\n\\n    #endregion\\n\\n    #region 增删改\\n\\n    /// &lt;summary&gt;\\n    /// 返回影响的记录数\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"SQLString\\"&gt;SQL语句&lt;/param&gt;\\n    /// &lt;returns&gt;影响的记录数&lt;/returns&gt;\\n    public static int ExecuteSql(string SQLString)\\n    {\\n        using (MySqlConnection connection = new MySqlConnection(connectionString))\\n        {\\n            using (MySqlCommand cmd = new MySqlCommand(SQLString, connection))\\n            {\\n                try\\n                {\\n                    connection.Open();\\n                    return cmd.ExecuteNonQuery();\\n                }\\n                catch (MySqlException e)\\n                {\\n                    connection.Close();\\n                    throw e;\\n                }\\n            }\\n        }\\n    }\\n\\n    /// &lt;summary&gt;\\n    /// 返回受影响行数\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"sql\\"&gt;sql&lt;/param&gt;\\n    /// &lt;param name=\\"times\\"&gt;超时时间&lt;/param&gt;\\n    /// &lt;returns&gt;&lt;/returns&gt;\\n    public static int ExecuteSqlByTime(string sql, int times)\\n    {\\n        using (MySqlConnection connection = new MySqlConnection(connectionString))\\n        {\\n            using (MySqlCommand cmd = new MySqlCommand(sql, connection))\\n            {\\n                try\\n                {\\n                    connection.Open();\\n                    cmd.CommandTimeout = times;\\n                    int rows = cmd.ExecuteNonQuery();\\n                    return rows;\\n                }\\n                catch (MySql.Data.MySqlClient.MySqlException e)\\n                {\\n                    connection.Close();\\n                    throw e;\\n                }\\n            }\\n        }\\n    }\\n\\n    /// &lt;summary&gt;\\n    /// 返回受影响行数\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"SQLString\\"&gt;strsql&lt;/param&gt;\\n    /// &lt;param name=\\"cmdParms\\"&gt;参数&lt;/param&gt;\\n    /// &lt;returns&gt;&lt;/returns&gt;\\n    public static int ExecuteSql(string SQLString, params MySqlParameter[] cmdParms)\\n    {\\n        using (MySqlConnection connection = new MySqlConnection(connectionString))\\n        {\\n            if (connection.State == ConnectionState.Closed)\\n            {\\n                connection.Open();\\n            }\\n\\n            using (MySqlCommand cmd = new MySqlCommand(SQLString, connection))\\n            {\\n                if (cmdParms != null)\\n                {\\n                    cmd.Parameters.AddRange(cmdParms);\\n                }\\n\\n                try\\n                {\\n                    return Convert.ToInt32(cmd.ExecuteNonQuery());\\n                }\\n                catch (Exception)\\n                {\\n                    return 0;\\n                }\\n            }\\n        }\\n    }\\n\\n    #endregion\\n\\n    #region 执行多条SQL语句\\n\\n    /// &lt;summary&gt;\\n    /// 执行多条SQL语句，实现数据库事务。\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"SQLStringList\\"&gt;多条SQL语句&lt;/param&gt;\\n    public static int ExecuteSqlTran(List&lt;String&gt; SQLStringList)\\n    {\\n        using (MySqlConnection conn = new MySqlConnection(connectionString))\\n        {\\n            conn.Open();\\n            MySqlCommand cmd = new MySqlCommand();\\n            cmd.Connection = conn;\\n            MySqlTransaction tx = conn.BeginTransaction();\\n            cmd.Transaction = tx;\\n            try\\n            {\\n                int count = 0;\\n                for (int n = 0; n &lt; SQLStringList.Count; n++)\\n                {\\n                    string strsql = SQLStringList[n];\\n                    if (strsql.Trim().Length &gt; 1)\\n                    {\\n                        cmd.CommandText = strsql;\\n                        count += cmd.ExecuteNonQuery();\\n                    }\\n                }\\n\\n                tx.Commit();\\n                return count;\\n            }\\n            catch\\n            {\\n                tx.Rollback();\\n                return 0;\\n            }\\n        }\\n    }\\n\\n    #endregion\\n\\n    #region 首行首列\\n\\n    /// &lt;summary&gt;\\n    /// 首行首列\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"SQLString\\"&gt;计算查询结果语句&lt;/param&gt;\\n    /// &lt;returns&gt;查询结果（object）&lt;/returns&gt;\\n    public static object GetSingle(string SQLString)\\n    {\\n        using (MySqlConnection connection = new MySqlConnection(connectionString))\\n        {\\n            using (MySqlCommand cmd = new MySqlCommand(SQLString, connection))\\n            {\\n                try\\n                {\\n                    connection.Open();\\n                    object obj = cmd.ExecuteScalar();\\n                    if ((Object.Equals(obj, null)) || (Object.Equals(obj, System.DBNull.Value)))\\n                    {\\n                        return null;\\n                    }\\n                    else\\n                    {\\n                        return obj;\\n                    }\\n                }\\n                catch (MySql.Data.MySqlClient.MySqlException e)\\n                {\\n                    connection.Close();\\n                    throw e;\\n                }\\n            }\\n        }\\n    }\\n\\n    /// &lt;summary&gt;\\n    /// 首行首列\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"SQLString\\"&gt;sql语句&lt;/param&gt;\\n    /// &lt;param name=\\"Times\\"&gt;过期时间&lt;/param&gt;\\n    /// &lt;returns&gt;&lt;/returns&gt;\\n    public static object GetSingle(string SQLString, int Times)\\n    {\\n        using (MySqlConnection connection = new MySqlConnection(connectionString))\\n        {\\n            using (MySqlCommand cmd = new MySqlCommand(SQLString, connection))\\n            {\\n                try\\n                {\\n                    connection.Open();\\n                    cmd.CommandTimeout = Times;\\n                    object obj = cmd.ExecuteScalar();\\n                    if (Equals(obj, null) || (Equals(obj, DBNull.Value)))\\n                    {\\n                        return null;\\n                    }\\n                    else\\n                    {\\n                        return obj;\\n                    }\\n                }\\n                catch (MySqlException e)\\n                {\\n                    connection.Close();\\n                    throw e;\\n                }\\n            }\\n        }\\n    }\\n\\n    /// &lt;summary&gt;\\n    /// 首行首列\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"SQLString\\"&gt;strsql&lt;/param&gt;\\n    /// &lt;param name=\\"cmdParms\\"&gt;参数&lt;/param&gt;\\n    /// &lt;returns&gt;首行首列&lt;/returns&gt;\\n    public static object GetSingle(string SQLString, params MySqlParameter[] cmdParms)\\n    {\\n        using (MySqlConnection connection = new MySqlConnection(connectionString))\\n        {\\n            using (MySqlCommand cmd = new MySqlCommand())\\n            {\\n                try\\n                {\\n                    PrepareCommand(cmd, connection, null, SQLString, cmdParms);\\n                    object obj = cmd.ExecuteScalar();\\n                    cmd.Parameters.Clear();\\n                    if ((Equals(obj, null)) || (Equals(obj, DBNull.Value)))\\n                    {\\n                        return null;\\n                    }\\n                    else\\n                    {\\n                        return obj;\\n                    }\\n                }\\n                catch (MySqlException e)\\n                {\\n                    throw e;\\n                }\\n            }\\n        }\\n    }\\n\\n    #endregion\\n\\n    #region 查询\\n\\n    /// &lt;summary&gt;\\n    /// 执行查询语句，返回DataSet\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"SQLString\\"&gt;查询语句&lt;/param&gt;\\n    /// &lt;returns&gt;DataSet&lt;/returns&gt;\\n    public static DataSet Query(string SQLString)\\n    {\\n        using (MySqlConnection connection = new MySqlConnection(connectionString))\\n        {\\n            DataSet ds = new DataSet();\\n            try\\n            {\\n                connection.Open();\\n                MySqlDataAdapter command = new MySqlDataAdapter(SQLString, connection);\\n                command.Fill(ds, \\"ds\\");\\n            }\\n            catch (MySqlException ex)\\n            {\\n                throw new Exception(ex.Message);\\n            }\\n\\n            return ds;\\n        }\\n    }\\n\\n    /// &lt;summary&gt;\\n    /// 执行查询语句，返回DataSet\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"SQLString\\"&gt;sql语句&lt;/param&gt;\\n    /// &lt;param name=\\"Times\\"&gt;过期时间&lt;/param&gt;\\n    /// &lt;returns&gt;&lt;/returns&gt;\\n    public static DataSet Query(string SQLString, int Times)\\n    {\\n        using (MySqlConnection connection = new MySqlConnection(connectionString))\\n        {\\n            DataSet ds = new DataSet();\\n            try\\n            {\\n                connection.Open();\\n                MySqlDataAdapter command = new MySqlDataAdapter(SQLString, connection);\\n                command.SelectCommand.CommandTimeout = Times;\\n                command.Fill(ds, \\"ds\\");\\n            }\\n            catch (MySqlException ex)\\n            {\\n                throw new Exception(ex.Message);\\n            }\\n\\n            return ds;\\n        }\\n    }\\n\\n    /// &lt;summary&gt;\\n    /// 执行查询语句，返回DataSet\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"SQLString\\"&gt;strsql&lt;/param&gt;\\n    /// &lt;param name=\\"cmdParms\\"&gt;参数&lt;/param&gt;\\n    /// &lt;returns&gt;返回DataSet&lt;/returns&gt;\\n    public static DataSet GetData(string SQLString, params MySqlParameter[] cmdParms)\\n    {\\n        using (MySqlConnection connection = new MySqlConnection(connectionString))\\n        {\\n            MySqlCommand cmd = new MySqlCommand();\\n            PrepareCommand(cmd, connection, null, SQLString, cmdParms);\\n            using (MySqlDataAdapter da = new MySqlDataAdapter(cmd))\\n            {\\n                DataSet ds = new DataSet();\\n                try\\n                {\\n                    da.Fill(ds);\\n                    cmd.Parameters.Clear();\\n                }\\n                catch (MySqlException ex)\\n                {\\n                    throw new Exception(ex.Message);\\n                }\\n\\n                return ds;\\n            }\\n        }\\n    }\\n\\n    #endregion\\n\\n    #region 执行存储过程\\n\\n    /// &lt;summary&gt;\\n    /// 执行存储过程\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"ProcName\\"&gt;存储过程名称&lt;/param&gt;\\n    /// &lt;param name=\\"parm\\"&gt;参数&lt;/param&gt;\\n    /// &lt;returns&gt;&lt;/returns&gt;\\n    public static MySqlDataReader GetDataTableByProc(string ProcName, params MySqlParameter[] parm)\\n    {\\n        MySqlConnection conn = new MySqlConnection(connectionString);\\n        using (MySqlCommand cmd = new MySqlCommand(ProcName, conn))\\n        {\\n            if (conn.State == ConnectionState.Closed)\\n            {\\n                conn.Open();\\n            }\\n\\n            if (parm != null)\\n            {\\n                cmd.Parameters.AddRange(parm);\\n            }\\n\\n            cmd.CommandType = CommandType.StoredProcedure;\\n            return cmd.ExecuteReader(CommandBehavior.CloseConnection);\\n        }\\n    }\\n\\n    #endregion\\n\\n    #region 扩展\\n\\n    /// &lt;summary&gt;\\n    /// 执行sql语句\\n    /// &lt;/summary&gt;\\n    private static void PrepareCommand(MySqlCommand cmd, MySqlConnection conn, MySqlTransaction trans,\\n        string cmdText, MySqlParameter[] cmdParms)\\n    {\\n        if (conn.State != ConnectionState.Open)\\n            conn.Open();\\n        cmd.Connection = conn;\\n        cmd.CommandText = cmdText;\\n        if (trans != null)\\n            cmd.Transaction = trans;\\n        cmd.CommandType = CommandType.Text; //cmdType;\\n        if (cmdParms != null)\\n        {\\n            foreach (MySqlParameter parameter in cmdParms)\\n            {\\n                if ((parameter.Direction == ParameterDirection.InputOutput ||\\n                        parameter.Direction == ParameterDirection.Input) &amp;&amp;\\n                    (parameter.Value == null))\\n                {\\n                    parameter.Value = DBNull.Value;\\n                }\\n\\n                cmd.Parameters.Add(parameter);\\n            }\\n        }\\n    }\\n\\n    /// &lt;summary&gt;\\n    /// 执行多条SQL语句，实现数据库事务。\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"SQLStringList\\"&gt;SQL语句的哈希表（key为sql语句，value是该语句的MySqlParameter[]）&lt;/param&gt;\\n    public static void ExecuteSqlTran(Hashtable SQLStringList)\\n    {\\n        using (MySqlConnection conn = new MySqlConnection(connectionString))\\n        {\\n            conn.Open();\\n            using (MySqlTransaction trans = conn.BeginTransaction())\\n            {\\n                MySqlCommand cmd = new MySqlCommand();\\n                try\\n                {\\n                    //循环\\n                    foreach (DictionaryEntry myDE in SQLStringList)\\n                    {\\n                        string cmdText = myDE.Key.ToString();\\n                        MySqlParameter[] cmdParms = (MySqlParameter[])myDE.Value;\\n                        PrepareCommand(cmd, conn, trans, cmdText, cmdParms);\\n                        int val = cmd.ExecuteNonQuery();\\n                        cmd.Parameters.Clear();\\n                    }\\n\\n                    trans.Commit();\\n                }\\n                catch\\n                {\\n                    trans.Rollback();\\n                    throw;\\n                }\\n            }\\n        }\\n    }\\n\\n    /// &lt;summary&gt;\\n    /// 执行多条SQL语句，实现数据库事务。\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"SQLStringList\\"&gt;SQL语句的哈希表（key为sql语句，value是该语句的MySqlParameter[]）&lt;/param&gt;\\n    public static void ExecuteSqlTranWithIndentity(Hashtable SQLStringList)\\n    {\\n        using (MySqlConnection conn = new MySqlConnection(connectionString))\\n        {\\n            conn.Open();\\n            using (MySqlTransaction trans = conn.BeginTransaction())\\n            {\\n                MySqlCommand cmd = new MySqlCommand();\\n                try\\n                {\\n                    int indentity = 0;\\n                    //循环\\n                    foreach (DictionaryEntry myDE in SQLStringList)\\n                    {\\n                        string cmdText = myDE.Key.ToString();\\n                        MySqlParameter[] cmdParms = (MySqlParameter[])myDE.Value;\\n                        foreach (MySqlParameter q in cmdParms)\\n                        {\\n                            if (q.Direction == ParameterDirection.InputOutput)\\n                            {\\n                                q.Value = indentity;\\n                            }\\n                        }\\n\\n                        PrepareCommand(cmd, conn, trans, cmdText, cmdParms);\\n                        int val = cmd.ExecuteNonQuery();\\n                        foreach (MySqlParameter q in cmdParms)\\n                        {\\n                            if (q.Direction == ParameterDirection.Output)\\n                            {\\n                                indentity = Convert.ToInt32(q.Value);\\n                            }\\n                        }\\n\\n                        cmd.Parameters.Clear();\\n                    }\\n\\n                    trans.Commit();\\n                }\\n                catch\\n                {\\n                    trans.Rollback();\\n                    throw;\\n                }\\n            }\\n        }\\n    }\\n\\n    #region 查询 * ( 注意：调用该方法后，一定要对MySqlDataReader进行Close )\\n\\n    /// &lt;summary&gt;\\n    /// MySqlDataReader查询 * ( 注意：调用该方法后，一定要对MySqlDataReader进行Close )\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"strSQL\\"&gt;查询语句&lt;/param&gt;\\n    /// &lt;returns&gt;MySqlDataReader&lt;/returns&gt;\\n    public static MySqlDataReader ExecuteReader(string SQLString, params MySqlParameter[] cmdParms)\\n    {\\n        MySqlDataReader sqldata = null;\\n        MySqlConnection connection = new MySqlConnection(connectionString);\\n        MySqlCommand cmd = new MySqlCommand();\\n        try\\n        {\\n            PrepareCommand(cmd, connection, null, SQLString, cmdParms);\\n            MySqlDataReader myReader = cmd.ExecuteReader(CommandBehavior.CloseConnection);\\n            cmd.Parameters.Clear();\\n            sqldata = myReader;\\n        }\\n        catch (MySqlException)\\n        {\\n            sqldata = null;\\n        }\\n\\n        return sqldata;\\n    }\\n\\n    /// &lt;summary&gt;\\n    /// 执行查询语句，返回MySqlDataReader ( 注意：调用该方法后，一定要对MySqlDataReader进行Close )\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"strSql\\"&gt;查询语句&lt;/param&gt;\\n    /// &lt;returns&gt;MySqlDataReader&lt;/returns&gt;\\n    public static MySqlDataReader ExecuteReader(string strSql)\\n    {\\n        var connection = new MySqlConnection(connectionString);\\n        var cmd = new MySqlCommand(strSql, connection);\\n        try\\n        {\\n            connection.Open();\\n            var myReader = cmd.ExecuteReader(CommandBehavior.CloseConnection);\\n            return myReader;\\n        }\\n        catch (MySql.Data.MySqlClient.MySqlException e)\\n        {\\n            throw e;\\n        }\\n    }\\n\\n    #endregion\\n\\n    /// &lt;summary&gt;\\n    /// 执行带一个存储过程参数的的SQL语句。\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"sqlString\\"&gt;SQL语句&lt;/param&gt;\\n    /// &lt;param name=\\"content\\"&gt;参数内容,比如一个字段是格式复杂的文章，有特殊符号，可以通过这个方式添加&lt;/param&gt;\\n    /// &lt;returns&gt;影响的记录数&lt;/returns&gt;\\n    public static int ExecuteSql(string sqlString, string content)\\n    {\\n        using (var connection = new MySqlConnection(connectionString))\\n        {\\n            var cmd = new MySqlCommand(sqlString, connection);\\n            var myParameter = new MySqlParameter(\\"@content\\", SqlDbType.NText) { Value = content };\\n            cmd.Parameters.Add(myParameter);\\n            try\\n            {\\n                connection.Open();\\n                var rows = cmd.ExecuteNonQuery();\\n                return rows;\\n            }\\n            catch (MySqlException e)\\n            {\\n                throw e;\\n            }\\n            finally\\n            {\\n                cmd.Dispose();\\n                connection.Close();\\n            }\\n        }\\n    }\\n\\n    /// &lt;summary&gt;\\n    /// 执行带一个存储过程参数的的SQL语句。\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"sqlString\\"&gt;SQL语句&lt;/param&gt;\\n    /// &lt;param name=\\"content\\"&gt;参数内容,比如一个字段是格式复杂的文章，有特殊符号，可以通过这个方式添加&lt;/param&gt;\\n    /// &lt;returns&gt;影响的记录数&lt;/returns&gt;\\n    public static object ExecuteSqlGet(string sqlString, string content)\\n    {\\n        using (var connection = new MySqlConnection(connectionString))\\n        {\\n            var cmd = new MySqlCommand(sqlString, connection);\\n            var myParameter = new MySqlParameter(\\"@content\\", SqlDbType.NText) { Value = content };\\n            cmd.Parameters.Add(myParameter);\\n            try\\n            {\\n                connection.Open();\\n                var obj = cmd.ExecuteScalar();\\n                if ((object.Equals(obj, null)) || (object.Equals(obj, DBNull.Value)))\\n                {\\n                    return null;\\n                }\\n                else\\n                {\\n                    return obj;\\n                }\\n            }\\n            catch (MySqlException e)\\n            {\\n                throw e;\\n            }\\n            finally\\n            {\\n                cmd.Dispose();\\n                connection.Close();\\n            }\\n        }\\n    }\\n\\n    /// &lt;summary&gt;\\n    /// 向数据库里插入图像格式的字段(和上面情况类似的另一种实例)\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"strSql\\"&gt;SQL语句&lt;/param&gt;\\n    /// &lt;param name=\\"fs\\"&gt;图像字节,数据库的字段类型为image的情况&lt;/param&gt;\\n    /// &lt;returns&gt;影响的记录数&lt;/returns&gt;\\n    public static int ExecuteSqlInsertImg(string strSql, byte[] fs)\\n    {\\n        using (var connection = new MySqlConnection(connectionString))\\n        {\\n            var cmd = new MySqlCommand(strSql, connection);\\n            var myParameter =\\n                new MySqlParameter(\\"@fs\\", SqlDbType.Image) { Value = fs };\\n            cmd.Parameters.Add(myParameter);\\n            try\\n            {\\n                connection.Open();\\n                return cmd.ExecuteNonQuery();\\n            }\\n            catch (MySqlException e)\\n            {\\n                throw e;\\n            }\\n            finally\\n            {\\n                cmd.Dispose();\\n                connection.Close();\\n            }\\n        }\\n    }\\n\\n    #endregion\\n}\\n\\n</code></pre></div>"}');export{u as comp,o as data};
