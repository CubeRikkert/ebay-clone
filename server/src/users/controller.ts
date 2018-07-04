import { JsonController, Get, Param, Body, Post } from 'routing-controllers'
import User from './entity'

@JsonController()
export default class UserController {

    @Get('/users/:id')
    getUser(
        @Param('id') id: number
    ) {
        return User.findOne(id)
    }

    @Get('/users')
    async allUsers() {
        const users = await User.find()
        return { users }
    }

    @Post('/users')
    async createUser(
        @Body() user: User
    ) {
        const {...rest} = user
        const entity = User.create(rest)
        return entity.save()
    }

}