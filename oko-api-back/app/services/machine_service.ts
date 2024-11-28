import { MachinePostDTO } from '#models/dtos/machine_dto'
import Machine from '#models/machine'
import { requestOptions } from './client_configuration.js'
import axios from 'axios'

export default class MachineService {
  async create(machine_dto: MachinePostDTO) {
    try {
      const mc = await Machine.create(machine_dto)
      mc.proxmox_id += 1000
    } catch (error) {
      return
    }
  }

  async clone({ proxmox_id, node, name, templateId }: Machine) {
    const payload = { newid: proxmox_id, node, name }
    const url = `http://${process.env.PROXMOX_API_URL}/api2/json/nodes/${node}/qemu/${templateId}/clone`

    try {
      const res = await axios.post(url, payload, requestOptions)
      return res.data
    } catch (error) {
      return error
    }
  }
}
