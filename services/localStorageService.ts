const localStorageService = {
  getData: (key: string) => {
    if (process.client) {
      const item = localStorage.getItem(key)
      if (item) {
        return JSON.parse(item)
      }
    }
    return null
  },

  setObjectData: (key: string, value: Record<string, any>) => {
    if (process.client) {
      const item = localStorageService.getData(key)
      const combined = {
        ...item ?? {},
        ...value
      }
      const str = JSON.stringify(combined)
      localStorage.setItem(key, str)
    }
  }
}

export default localStorageService
