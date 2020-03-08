import * as React from 'react'
import ReactDOM from 'react-dom'

const MODAL_ROOT_ID: string = 'modal-root-node'

const getModalRoot = (): HTMLDivElement => {
  let modalRootNode:
    | HTMLElement
    | HTMLDivElement
    | null = document.getElementById(MODAL_ROOT_ID)
  if (!modalRootNode) {
    modalRootNode = document.body.appendChild(document.createElement('div'))
    modalRootNode.setAttribute('id', MODAL_ROOT_ID)
  }
  return modalRootNode as HTMLDivElement
}

type HalfModalProps = {
  children: React.ReactNode
  show: Boolean
}

const HalfModal = ({ children, show }: HalfModalProps) => {
  const modalRootNode: HTMLDivElement = getModalRoot()
  const element = document.createElement('div')
  React.useEffect(() => {
    modalRootNode.appendChild(element)
    return () => {
      modalRootNode.removeChild(element)
    }
  })
  if (!show) return <div />
  return ReactDOM.createPortal(children, element)
}

export default HalfModal
