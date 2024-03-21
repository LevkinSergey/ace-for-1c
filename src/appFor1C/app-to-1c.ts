import { AppTo1CWindow } from '@/app-env'
import { setSelection } from '../app/ace-editor'

export interface AppTo1C {
  setBaseUrl: (url: string) => void
  close: () => void
  setSelection: (startRow: number, startColumn: number, endRow: number, endColumn: number) => void
  setGenerateModificationEvent: (value: boolean) => void
  loadScript: (url: string) => void
  setMode: (mode: string) => void
}

const setBaseUrl = (url: string): void => {
  const elems = document.getElementsByTagName('base')

  if (elems.length > 0) {
    elems[0].href = url
  }
}

const setGenerateModificationEvent = (value: boolean) => {
  window.editorHelper.setGenerateModificationEvent(value)
}

const close = () => {
  console.log('close')
}

const loadScript = (url: string) => {
  const newel = document.createElement('script')
  newel.type = 'text/javascript'
  newel.src = url
  document.body.appendChild(newel)
}

const setMode = (mode: string) => {
  window.editor.session.setMode(`ace/mode/${mode}`)
}

window.appTo1C = {
  setBaseUrl,
  close,
  setSelection,
  setGenerateModificationEvent,
  loadScript,
  setMode
}

declare var window: AppTo1CWindow
