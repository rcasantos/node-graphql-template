export interface Info {
  info: (message: string) => void
}

export interface Warn {
  warn: (message: string) => void
}

export interface Error {
  error: (message: string) => void
}

export interface Warning {
  warning: (message: string) => void
}
