import vine from '@vinejs/vine'

export const machineDTOValidator = vine.compile(
  vine.object({
    templateId: vine.number(),
    name: vine.string().trim(),
  })
)
