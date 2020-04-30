import { api } from '@/config'
import { getDataViaApi } from '@/utils/http'

const getDummy = (callBack, errorHandler) => {
  getDataViaApi(api.dummy, callBack, errorHandler)
}

export { getDummy }
