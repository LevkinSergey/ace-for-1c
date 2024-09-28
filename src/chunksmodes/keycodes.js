ace.config.setModuleLoader('ace/keyboard/emacs', () => import('ace-builds/src-noconflict/keybinding-emacs.js'))
ace.config.setModuleLoader('ace/keyboard/sublime', () => import('ace-builds/src-noconflict/keybinding-sublime.js'))
ace.config.setModuleLoader('ace/keyboard/vim', () => import('ace-builds/src-noconflict/keybinding-vim.js'))
ace.config.setModuleLoader('ace/keyboard/vscode', () => import('ace-builds/src-noconflict/keybinding-vscode.js'))
