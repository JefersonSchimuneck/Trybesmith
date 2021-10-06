import { z } from 'zod';

const saleSchema = z.object({
  userId: z.number({
    required_error: "UserId is required",
    invalid_type_error: "UserId must be a number"
  }),
  itemId: z.number({
    required_error: "ItemId is required",
    invalid_type_error: "ItemId must be a number"
  }),
  quantity: z.number({
    required_error: "Quantity is required",
    invalid_type_error: "Quantity must be a number"
  }),
})

export { saleSchema }