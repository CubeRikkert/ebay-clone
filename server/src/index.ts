// src/index.ts
import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import setupDb from './db'
import UserController from './users/controller'
import AdvertisementController from './advertisements/controller';

const port = process.env.PORT || 4000

const app = createKoaServer({
   cors: true,
   controllers: [
        UserController,
        AdvertisementController
   ], 
   
})

setupDb()
  .then(_ =>
    app.listen(port, () => console.log('Listening on port 4000'))
  )
  .catch(err => console.error(err))
