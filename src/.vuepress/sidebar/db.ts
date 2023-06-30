import { sidebar } from "vuepress-theme-hope";

export const dbSidebar = sidebar({
    '/db/': [
        {
          text: "基础",
          collapsible: true,
          children:
            [
              "/db/base.md",
              "/db/cache-db-consistency.md",
            ]
        },
        {
          text: "PostgreSQL",
          collapsible: true,
          children:
            [
              "/db/pgsql/jsonb_path_query.md",
            ]
        }
      ],
});