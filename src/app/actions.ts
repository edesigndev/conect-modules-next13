'use server';

// export async function create(formData: FormData) {
//   const consultantId = formData.get('consultantId');
//   const country = formData.get('country');
//   console.log({ consultantId, country });
//   return { consultantId, country };
//   // Mutate data
// }

// ('use server');

import { cookies } from 'next/headers';

export async function exampleAction() {
  // Get cookie
  const consultantId = cookies().get('consultantId')?.value;
  const country = cookies().get('country')?.value;

  // Set cookie
  // cookies().set('name', 'Delba')

  // Delete cookie
  // cookies().delete('name')
  console.log({ consultantId, country });
}
