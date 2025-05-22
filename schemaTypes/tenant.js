export default {
    name: 'tenant',
    title: 'Tenant',
    type: 'document',
    fields: [
      {
        name: 'fullName',
        title: 'Full Name',
        type: 'string',
        validation: (Rule) => Rule.required().min(3).max(50),
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule) => Rule.required().email(),
      },
      {
        name: 'phone',
        title: 'Phone Number',
        type: 'string',
        validation: (Rule) =>
          Rule.required().regex(/^\+?[1-9]\d{1,14}$/, {
            name: 'phone number',
            invert: false,
          }),
      },
      {
        name: 'profileImage',
        title: 'Profile Image',
        type: 'image',
        options: { hotspot: true },
      },
      {
        name: 'moveInDate',
        title: 'Move-in Date',
        type: 'datetime',
      },
      {
        name: 'rentedProperty',
        title: 'Rented Property',
        type: 'reference',
        to: [{ type: 'property' }],
      },
      {
        name: 'status',
        title: 'Tenant Status',
        type: 'string',
        options: {
          list: [
            { title: 'Interested', value: 'interested' },
            { title: 'Approved', value: 'approved' },
            { title: 'Rejected', value: 'rejected' },
            { title: 'Currently Renting', value: 'renting' },
          ],
        },
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        initialValue: new Date().toISOString(),
      },
    ],
  };
  