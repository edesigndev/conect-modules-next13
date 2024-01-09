'use server';

import { z } from 'zod';

const schema = z.object({
  consultantId: z.string({
    invalid_type_error: 'Invalid consultantId',
  }),
  country: z.string({
    invalid_type_error: 'Invalid country',
  }),
});

export default async function createUser(formData: FormData) {
  const validatedFields = schema.safeParse({
    consultantId: formData.get('consultantId'),
    country: formData.get('country'),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Mutate data
}
