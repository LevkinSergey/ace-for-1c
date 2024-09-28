ace.config.setModuleLoader('ace/mode/json', () => import('ace-builds/src-noconflict/mode-json.js'))
ace.config.setModuleLoader('ace/mode/json5', () => import('ace-builds/src-noconflict/mode-json5.js'))

ace.config.setModuleLoader('ace/mode/json_worker', () => import('ace-builds/src-noconflict/worker-json.js'))

ace.config.setModuleLoader('ace/snippets/json', () => import('ace-builds/src-noconflict/snippets/json.js'))
ace.config.setModuleLoader('ace/snippets/json5', () => import('ace-builds/src-noconflict/snippets/json5.js'))
