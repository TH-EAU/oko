import type { HttpContext } from '@adonisjs/core/http'
import MachineService from '#services/machine_service'
import { inject } from '@adonisjs/core'
import { machineDTOValidator } from '#validators/machine_dto'
import Machine from '#models/machine'

@inject()
export default class MachinesController {
  constructor(private machineService: MachineService) {}
  /**
   * Display a list of machines
   */
  async index({}: HttpContext) {}

  /**
   * Clone a machine from template
   */
  async create({ request }: HttpContext) {
    const data = request.all()
    const payload = await machineDTOValidator.validate(data)

    return await this.machineService.create(payload)

    // return await this.machineService.clone(payload)
  }
}
