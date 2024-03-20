import { AppTo1CWindow } from '@/app-env'
import { emitEventTo1C } from '@/appFor1C/eventDispatcherTo1C'
import { EVENT_CONTENT_CHANGED } from '@/appFor1C/eventNamesTo1C'
import { Ace } from 'ace-builds'

export class HelperAceEditor {
  private generateModificationEvent: boolean
  private readonly handlerModificationEvent: (delta: Ace.Delta) => void

  constructor() {
    this.generateModificationEvent = false

    this.handlerModificationEvent = (delta: Ace.Delta) => {
      emitEventTo1C(EVENT_CONTENT_CHANGED, undefined)
    }
  }

  setGenerateModificationEvent(value: boolean) {
    if (!this.generateModificationEvent && value) {
      window.editor.on('change', this.handlerModificationEvent)
    } else if (this.generateModificationEvent && !value) {
      window.editor.off('change', this.handlerModificationEvent)
    }

    this.generateModificationEvent = value
  }
}

declare var window: AppTo1CWindow
