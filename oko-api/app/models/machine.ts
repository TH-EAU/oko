import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { MachineStatus } from './enums/machine_enums.js'

export default class Machine extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare proxmox_id: number

  @column()
  declare node: string

  @column()
  declare name: string

  @column()
  declare templateId: number

  @column()
  declare user_id: number

  @column()
  declare status: MachineStatus

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
