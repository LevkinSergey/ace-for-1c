import { AppTo1CWindow } from '@/app-env'
import { setSelection } from '../app/ace-editor'

export interface AppTo1C {
  setBaseUrl: (url: string) => void
  close: () => void
  setSelection: (startRow: number, startColumn: number, endRow: number, endColumn: number) => void
  setGenerateModificationEvent: (value: boolean) => void
}

const setBaseUrl = (url: string): void => {
  const elems = document.getElementsByTagName('base')

  if (elems.length > 0) {
    elems[0].href = url
  }
}

const close = () => {}

export const initAppTo1C = () => {
  window.appTo1C = {
    setBaseUrl,
    close,
    setSelection,
    setGenerateModificationEvent: (value: boolean) => {
      window.editorHelper.setGenerateModificationEvent(value)
    }
  }
}

window.addEventListener('load', () => {
  initAppTo1C()
})

declare var window: AppTo1CWindow
