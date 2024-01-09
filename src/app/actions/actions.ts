'use server';

export async function create(formData: FormData) {
  const consultantId = formData.get('consultantId');
  const country = formData.get('country');
  console.log({ consultantId, country });
  return { consultantId, country };
}
