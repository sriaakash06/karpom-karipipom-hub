import * as React from "react"

type ToastProps = {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
  duration?: number
  variant?: "default" | "destructive"
}

type ToastActionElement = React.ReactNode

export type Toast = ToastProps & {
  id: string
  action?: ToastActionElement
}

let toastId = 0
let listeners: ((toasts: Toast[]) => void)[] = []
let memoryState: Toast[] = []

function dispatch(toast: Toast) {
  memoryState = [toast, ...memoryState].slice(0, 5)
  listeners.forEach((listener) => listener(memoryState))
}

export function useToast() {
  const [toasts, setToasts] = React.useState<Toast[]>(memoryState)

  React.useEffect(() => {
    listeners.push(setToasts)
    return () => {
      const index = listeners.indexOf(setToasts)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [])

  return {
    toasts,
    toast: (props: Omit<ToastProps, "id">) => {
      const id = `toast-${++toastId}`
      const newToast: Toast = { id, ...props }
      dispatch(newToast)
      return id
    },
  }
}

export function toast({
  title,
  description,
  action,
  duration = 3000,
  variant = "default",
}: Omit<ToastProps, "id">) {
  const id = `toast-${++toastId}`

  const newToast: Toast = {
    id,
    title,
    description,
    action,
    duration,
    variant,
  }

  dispatch(newToast)

  return id
}
