import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'),
  organization: z
    .string()
    .max(200, 'Organization must be less than 200 characters')
    .optional()
    .or(z.literal('')),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(254, 'Email must be less than 254 characters'),
  phone: z
    .string()
    .regex(/^[\d\s+\-()]*$/, 'Phone number contains invalid characters')
    .max(20, 'Phone must be less than 20 characters')
    .optional()
    .or(z.literal('')),
  service: z.string().min(1, 'Please select a service'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
  consent: z.boolean().refine(val => val === true, {
    message: 'You must agree to the Privacy Policy and consent to data processing',
  }),
  website: z.string().max(0, 'Bot detected').optional().or(z.literal('')),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
