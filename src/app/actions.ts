'use server';

export async function getDataForm() {
  const res = await fetch('https://conect-modules-next13.vercel.app/api/formData')
    .then((response) => response.json())
    .then((data) => console.log('getDataForm-server:', data))
    .catch((error) => console.error('Error:', error));

  return res;
}
