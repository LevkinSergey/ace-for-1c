import ace from 'ace-builds'
import 'ace-builds/src-noconflict/ext-searchbox'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/ext-inline_autocomplete'
import 'ace-builds/src-noconflict/ext-linking'
import { AppTo1CWindow } from '@/app-env'
import { StatusBar } from 'ace-builds/src-noconflict/ext-statusbar'

import '../esm-resolver'
import { HelperAceEditor } from './EditorHelper'

window.editor = ace.edit('editor')
window.editor.session.setUseWorker(false)

window.editor.setTheme('ace/theme/ones')
window.editor.session.setMode('ace/mode/_1c')

window.editor.setOptions({
  selectionStyle: 'line',
  highlightSelectedWord: true,
  showLineNumbers: true,
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true,
  enableInlineAutocompletion: true,
  enableLinking: true
})
window.editor.setHighlightSelectedWord(true)

const statusBar = new StatusBar(window.editor, document.getElementById('statusBar'))

export const setSelection = (startRow: number, startColumn: number, endRow: number, endColumn: number) => {
  window.editor.clearSelection()
  var rangeEditor = new ace.Range(startRow, startColumn, endRow, endColumn)
  var selection = window.editor.getSelection()
  selection.setSelectionRange(rangeEditor)
  window.editor.centerSelection()
}

window.editorHelper = new HelperAceEditor()

declare var window: AppTo1CWindow
