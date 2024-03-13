import ace from 'ace-builds'
// import "../ace-extension/on"
import "ace-builds/src-noconflict/ext-searchbox";
// import { CommandBarTooltip } from "ace-builds/src-noconflict/ext-command_bar";
// import "ace-builds/src-noconflict/snippets/javascript"
import "ace-builds/src-noconflict/ext-language_tools";
// import "ace-builds/src-noconflict/ext-emmet";
import "ace-builds/src-noconflict/ext-inline_autocomplete"
import { AppTo1CWindow } from '@/app-env';
// import { StatusBar } from "ace-builds/src-noconflict/ext-statusbar";
// import "ace-builds/src-noconflict/ext-linking"
// import 'ace-builds/src-noconflict/ext-prompt'

import "../esm-resolver";

window.editor = ace.edit("editor");
window.editor.session.setUseWorker(false)

window.editor.setTheme("ace/theme/ones");
window.editor.session.setMode("ace/mode/bsl_query");

window.editor.setOptions({
  selectionStyle: 'line',
  highlightSelectedWord: true,
  showLineNumbers: true,
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true,

});
window.editor.setHighlightSelectedWord(true);


declare var window: AppTo1CWindow;
