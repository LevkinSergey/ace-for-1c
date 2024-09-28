ace.config.setModuleLoader('ace/mode/yaml', () => import('ace-builds/src-noconflict/mode-yaml.js'))

ace.config.setModuleLoader('ace/mode/yaml_worker', () => import('ace-builds/src-noconflict/worker-yaml.js'))

ace.config.setModuleLoader('ace/snippets/yaml', () => import('ace-builds/src-noconflict/snippets/yaml.js'))
