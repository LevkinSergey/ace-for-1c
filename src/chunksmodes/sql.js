ace.config.setModuleLoader('ace/mode/mysql', () => import('ace-builds/src-noconflict/mode-mysql.js'))
ace.config.setModuleLoader('ace/mode/pgsql', () => import('ace-builds/src-noconflict/mode-pgsql.js'))
ace.config.setModuleLoader('ace/mode/sql', () => import('ace-builds/src-noconflict/mode-sql.js'))
ace.config.setModuleLoader('ace/mode/sqlserver', () => import('ace-builds/src-noconflict/mode-sqlserver.js'))

ace.config.setModuleLoader('ace/snippets/mysql', () => import('ace-builds/src-noconflict/snippets/mysql.js'))
ace.config.setModuleLoader('ace/snippets/pgsql', () => import('ace-builds/src-noconflict/snippets/pgsql.js'))
ace.config.setModuleLoader('ace/snippets/sql', () => import('ace-builds/src-noconflict/snippets/sql.js'))
ace.config.setModuleLoader('ace/snippets/sqlserver', () => import('ace-builds/src-noconflict/snippets/sqlserver.js'))
