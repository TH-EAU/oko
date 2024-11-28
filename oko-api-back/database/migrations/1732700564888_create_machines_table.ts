import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'machines'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.increments('proxmox_id').notNullable().unsigned().unique()
      table.string('node')
      table.string('name')
      table.integer('templateId')
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')
      table
        .enu('status', ['NotCreated', 'Pending', 'Created', 'Up', 'Down', 'Error'])
        .defaultTo('NotCreated')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
