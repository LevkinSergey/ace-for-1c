/// <reference types="node" />

import { HelperAceEditor } from './app/EditorHelper'
import { AppTo1C } from './appFor1C/app-to-1c'
import { Ace } from 'ace-builds'

interface AppTo1CWindow extends Window {
  appTo1C: AppTo1C
  isWebClient: boolean
  editor: Ace.Editor
  editorHelper: HelperAceEditor
}
