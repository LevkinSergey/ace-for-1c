ace.config.setModuleLoader('ace/mode/xml', () => import('ace-builds/src-noconflict/mode-xml.js'))

ace.config.setModuleLoader('ace/mode/xml_worker', () => import('ace-builds/src-noconflict/worker-xml.js'))

ace.config.setModuleLoader('ace/snippets/xml', () => import('ace-builds/src-noconflict/snippets/xml.js'))
