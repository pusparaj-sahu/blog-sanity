export default {
  name: 'interest',
  type: 'document',
  title: 'Interested User',
  fields: [
    { name: 'user', type: 'reference', to: [{ type: 'user' }] },
    { name: 'property', type: 'reference', to: [{ type: 'property' }] },
    { name: 'interestedAt', type: 'datetime' },
    { name: 'name', type: 'string' },
    { name: 'email', type: 'string' },
    { name: 'phone', type: 'string' },
  ]
};