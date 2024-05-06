import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,b as a}from"./app-Bw62I61B.js";const l={},d=a(`<p>操作</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>首行首列
public static object ExecuteScalar(string sql, params SqlParameter[] param)
        {
            using (SqlConnection con = new SqlConnection(conn))
            {
                if (con.State == ConnectionState.Closed)
                {
                    con.Open();
                }
                using (SqlCommand com = new SqlCommand(sql, con))
                {
                    if (param != null)
                    {
                        com.Parameters.AddRange(param);
                    }
                    return com.ExecuteScalar();
                }
            }
        }

查询
public static DataTable GetDate(string sql, params SqlParameter[] parm)
        {
            using (SqlConnection con = new SqlConnection(conn))
            {
                if (con.State == ConnectionState.Closed)
                {
                    con.Open();
                }
                SqlDataAdapter da = new SqlDataAdapter(sql, con);
                DataSet ds = new DataSet();
                if (parm != null)
                {
                    da.SelectCommand.Parameters.AddRange(parm);
                }
                da.Fill(ds);
                return ds.Tables[0];
            }

        }

受影响行数
 public static bool ExecuteNonQuery(string sql, params SqlParameter[] parm)
        {
            bool i = false;
            using (SqlConnection con = new SqlConnection(conn))
            {
                if (con.State == ConnectionState.Closed)
                {
                    con.Open();
                }
                using (SqlCommand com = new SqlCommand(sql, con))
                {
                    if (parm != null)
                    {
                        com.Parameters.AddRange(parm);
                    }
                    if (Convert.ToInt32(com.ExecuteNonQuery()) &gt; 0)
                    {
                        i = true;
                    }
                    return i;
                }
            }
        }

SqlDataReader 查询
  public static SqlDataReader DataReader(string sql, params SqlParameter[] parm)
        {
            SqlConnection con = new SqlConnection(conn);//此处不能使用using
            if (con.State == ConnectionState.Closed)
            {
                con.Open();
            }
            using (SqlCommand cmd = new SqlCommand(sql, con))
            {
                if (parm != null)
                {
                    cmd.Parameters.AddRange(parm);
                }
                return cmd.ExecuteReader(CommandBehavior.CloseConnection);
            }
        }
执行存储过程
  public static SqlDataReader DataReaderByProc(string procname, params SqlParameter[] parm)
        {
            SqlConnection con = new SqlConnection(conn);
            using (SqlCommand cmd = new SqlCommand(procname, con))
            {
                if (con.State == ConnectionState.Closed)
                {
                    con.Open();
                }
                if (parm != null)
                {
                    cmd.Parameters.AddRange(parm);
                }
                cmd.CommandType = CommandType.StoredProcedure;
                return cmd.ExecuteReader(CommandBehavior.CloseConnection);
            }
        }



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),s=[d];function r(t,c){return e(),i("div",null,s)}const v=n(l,[["render",r],["__file","dbhelper.html.vue"]]),u=JSON.parse('{"path":"/dataBase/sqlserver/dbhelper.html","title":"DBHelper","lang":"zh-CN","frontmatter":{"title":"DBHelper","lang":"zh-CN","date":"2021-12-30T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dataBase"],"tag":["无"],"filename":"dbhelper","slug":"yavuc0","docsId":"26493356","description":"操作","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dataBase/sqlserver/dbhelper.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"DBHelper"}],["meta",{"property":"og:description","content":"操作"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-01T14:55:27.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2021-12-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-01T14:55:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DBHelper\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-12-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-01T14:55:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[],"git":{"createdTime":1690042937000,"updatedTime":1711983327000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":2}]},"readingTime":{"minutes":0.79,"words":238},"filePathRelative":"dataBase/sqlserver/dbhelper.md","localizedDate":"2021年12月30日","excerpt":"<p>操作</p>\\n<div class=\\"language-c#\\" data-ext=\\"c#\\" data-title=\\"c#\\"><pre class=\\"language-c#\\"><code>首行首列\\npublic static object ExecuteScalar(string sql, params SqlParameter[] param)\\n        {\\n            using (SqlConnection con = new SqlConnection(conn))\\n            {\\n                if (con.State == ConnectionState.Closed)\\n                {\\n                    con.Open();\\n                }\\n                using (SqlCommand com = new SqlCommand(sql, con))\\n                {\\n                    if (param != null)\\n                    {\\n                        com.Parameters.AddRange(param);\\n                    }\\n                    return com.ExecuteScalar();\\n                }\\n            }\\n        }\\n\\n查询\\npublic static DataTable GetDate(string sql, params SqlParameter[] parm)\\n        {\\n            using (SqlConnection con = new SqlConnection(conn))\\n            {\\n                if (con.State == ConnectionState.Closed)\\n                {\\n                    con.Open();\\n                }\\n                SqlDataAdapter da = new SqlDataAdapter(sql, con);\\n                DataSet ds = new DataSet();\\n                if (parm != null)\\n                {\\n                    da.SelectCommand.Parameters.AddRange(parm);\\n                }\\n                da.Fill(ds);\\n                return ds.Tables[0];\\n            }\\n\\n        }\\n\\n受影响行数\\n public static bool ExecuteNonQuery(string sql, params SqlParameter[] parm)\\n        {\\n            bool i = false;\\n            using (SqlConnection con = new SqlConnection(conn))\\n            {\\n                if (con.State == ConnectionState.Closed)\\n                {\\n                    con.Open();\\n                }\\n                using (SqlCommand com = new SqlCommand(sql, con))\\n                {\\n                    if (parm != null)\\n                    {\\n                        com.Parameters.AddRange(parm);\\n                    }\\n                    if (Convert.ToInt32(com.ExecuteNonQuery()) &gt; 0)\\n                    {\\n                        i = true;\\n                    }\\n                    return i;\\n                }\\n            }\\n        }\\n\\nSqlDataReader 查询\\n  public static SqlDataReader DataReader(string sql, params SqlParameter[] parm)\\n        {\\n            SqlConnection con = new SqlConnection(conn);//此处不能使用using\\n            if (con.State == ConnectionState.Closed)\\n            {\\n                con.Open();\\n            }\\n            using (SqlCommand cmd = new SqlCommand(sql, con))\\n            {\\n                if (parm != null)\\n                {\\n                    cmd.Parameters.AddRange(parm);\\n                }\\n                return cmd.ExecuteReader(CommandBehavior.CloseConnection);\\n            }\\n        }\\n执行存储过程\\n  public static SqlDataReader DataReaderByProc(string procname, params SqlParameter[] parm)\\n        {\\n            SqlConnection con = new SqlConnection(conn);\\n            using (SqlCommand cmd = new SqlCommand(procname, con))\\n            {\\n                if (con.State == ConnectionState.Closed)\\n                {\\n                    con.Open();\\n                }\\n                if (parm != null)\\n                {\\n                    cmd.Parameters.AddRange(parm);\\n                }\\n                cmd.CommandType = CommandType.StoredProcedure;\\n                return cmd.ExecuteReader(CommandBehavior.CloseConnection);\\n            }\\n        }\\n\\n\\n\\n</code></pre></div>","autoDesc":true}');export{v as comp,u as data};
