export default class Utils {
  static gethash(url, key) {
    const hashIndex = url.indexOf('#')
    if (hashIndex !== -1) {
      const hashString = url.substr(hashIndex + 1)
      const hashParams = hashString.split('&')
      //   console.log('hashParams=', hashString, hashParams)
      for (let i = 0; i < hashParams.length; i++) {
        const keyValue = hashParams[i].split('=')
        if (keyValue[0] === key) {
          return keyValue[1]
        }
      }
    }
    return null
  }
}
