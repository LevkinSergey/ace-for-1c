import { AppTo1CWindow } from '@/app-env'

export interface MouseEventTo1C extends MouseEvent {
  eventData1C: {
    name: string
    data: string
  }
}

export class MouseEventTo1C extends MouseEvent {}

export function emitEventTo1C(name: string, data: any, event?: Event | UIEvent) {
  //отключаем стандартную обработку события
  if (event) {
    event.preventDefault()
    event.stopPropagation()
  }

  let eventData = data
  if (typeof eventData === 'object') {
    eventData = JSON.stringify(eventData)
  }
  let lastEvent = new MouseEventTo1C('click', {
    bubbles: false,
    cancelable: true,
    composed: false
  })
  lastEvent.preventDefault()
  lastEvent.eventData1C = {
    name: name,
    data: eventData
  }
  if (window.isWebClient) {
    return document.body.dispatchEvent(lastEvent)
  }
  lastEvent.stopPropagation()

  return dispatchEvent(lastEvent)
}

declare var window: AppTo1CWindow
