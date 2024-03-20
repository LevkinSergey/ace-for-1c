import { AppTo1CWindow } from '@/app-env'

import { Ace } from 'ace-builds'
import { emitEventTo1C } from '../appFor1C/eventDispatcherTo1C'
import { ACE_EVENT_CONTENT_CHANGED } from '../appFor1C/eventNamesTo1C'

const handlerModificationEvent = (delta: Ace.Delta) => {
  emitEventTo1C(ACE_EVENT_CONTENT_CHANGED, undefined, undefined)
}

export class HelperAceEditor {
  private generateModificationEvent: boolean

  constructor() {
    this.generateModificationEvent = false
  }

  setGenerateModificationEvent(value: boolean) {
    if (!this.generateModificationEvent && value) {
      window.editor.on('change', handlerModificationEvent)
    } else if (this.generateModificationEvent && !value) {
      window.editor.off('change', handlerModificationEvent)
    }

    this.generateModificationEvent = value
  }
}

declare var window: AppTo1CWindow
