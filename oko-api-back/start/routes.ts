/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

// import MachinesController from '#controllers/machines_controller'
import router from '@adonisjs/core/services/router'
const MachinesController = () => import('#controllers/machines_controller')

router.post('createMachine', [MachinesController, 'create'])
