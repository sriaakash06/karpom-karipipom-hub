import * as React from "react"

type ToastProps = {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
  duration?: number
}

type ToastActionElement = React.ReactNode

export type Toast = ToastProps & {
  id: string
  action?: ToastActionElement
}

let toastId = 0
let listeners: ((toast: Toast) => void)[] = []

export function useToast() {
  const [toast, setToast] = React.useState<Toast | null>(null)

  React.useEffect(() => {
    const listener = (newToast: Toast) => {
      setToast(newToast)
    }
    listeners.push(listener)
    return () => {
      listeners = listeners.filter((l) => l !== listener)
    }
  }, [])

  return {
    toast,
  }
}

export function toast({
  title,
  description,
  action,
  duration = 3000,
}: Omit<ToastProps, "id">) {
  const id = `toast-${++toastId}`

  const newToast: Toast = {
    id,
    title,
    description,
    action,
    duration,
  }

  listeners.forEach((listener) => listener(newToast))

  return id
}
