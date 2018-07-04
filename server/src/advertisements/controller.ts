import { JsonController, Get, Param, Body, Post } from 'routing-controllers'
import Advertisement from './entity'

@JsonController()
export default class AdvertisementController {

    @Get('/advertisements/:id')
    getAdvertisement(
        @Param('id') id: number
    ) {
        return Advertisement.findOne(id)
    }

    @Get('/advertisements')
    async allAdvertisements() {
        const advertisements = await Advertisement.find()
        return { advertisements }
    }

    @Post('/advertisements')
    async createAdvertisement(
        @Body() advertisement: Advertisement
    ) {
        const {...rest} = advertisement
        const entity = Advertisement.create(rest)
        return entity.save()
    }

}