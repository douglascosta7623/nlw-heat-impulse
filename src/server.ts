import { serverHttp, io } from './app'

serverHttp.listen(4000, () => console.log(`Server is Running on Port 4000`))

export { serverHttp, io }
