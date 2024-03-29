import { Router } from 'express'
import { AuthenticateUserController } from './controller/AuthenticateUserController'
import { CreateMessageControler } from './controller/CreateMessageController'
import { Get3LastMessagesController } from './controller/GetLast3MessagesController'
import { ProfileUserController } from './controller/ProfileUserController'
import { ensureAuthenticated } from './middleware/ensureAuthenticated'

const router = Router()

router.post('/authenticate', new AuthenticateUserController().handle)

router.post(
  '/messages',
  ensureAuthenticated,
  new CreateMessageControler().handle
)

router.get('/messages/last3', new Get3LastMessagesController().handle)

router.get('/profile', ensureAuthenticated, new ProfileUserController().handle)

export { router }
