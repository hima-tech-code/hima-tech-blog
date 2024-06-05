import Status from "../status"
import StatusCode from "../statusCode"

export class ResponseReturn<T> {
  private status: Status
  private statusCode: StatusCode
  private responseMessage: string
  private data?: T
  private error?: any
  constructor({
    status, statusCode, responseMessage, data, error
  }: {
    status: Status, statusCode: StatusCode, responseMessage: string, data?: T, error?: any 
  }) {
    this.status = status
    this.statusCode = statusCode
    this.responseMessage = responseMessage
    this.data = data
    this.error = error
  }
}

export default ResponseReturn