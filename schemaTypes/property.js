export default {
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.custom((value, context) => {
        if (context.document && context.document.adminOverride) return true;
        if (!value) return 'Title is required';
        if (value.length < 5) return 'Title must be at least 5 characters';
        if (value.length > 100) return 'Title must be at most 100 characters';
        return true;
      }),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().min(10),
    },
    {
      name: 'price',
      title: 'Price (₹)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      options: {
        list: [
          { title: 'Apartment', value: 'apartment' },
          { title: 'House', value: 'house' },
          { title: 'Villa', value: 'villa' },
          { title: 'Commercial', value: 'commercial' },
        ],
      },
    },
    {
      name: 'bedrooms',
      title: 'Bedrooms',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(10),
    },
    {
      name: 'bathrooms',
      title: 'Bathrooms',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(10),
    },
    {
      name: 'size',
      title: 'Size (sq ft)',
      type: 'number',
      validation: (Rule) => Rule.required().min(100),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'reference',
      to: [{ type: 'location' }],
    },
    {
      name: 'owner',
      title: 'owner',
      type: 'reference',
      to: [{ type: 'owner' }],
    },
    {
      name: 'images',
      title: 'Property Images',
      type: 'array',
      of: [{ type: 'image' }],
      options: { hotspot: true },
    },
    {
      name: 'featured',
      title: 'Featured Property',
      type: 'boolean',
      description: 'Mark as featured listing',
    },
    {
      name: 'available',
      title: 'Available',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: new Date().toISOString(),
    },
    {
      name: 'targetAudience',
      title: 'Target Audience',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Bachelor', value: 'bachelor', _key: 'bachelor' },
          { title: 'Family', value: 'family', _key: 'family' },
          { title: 'Both', value: 'both', _key: 'both' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Parking', value: 'parking', _key: 'parking' },
          { title: 'Security', value: 'security', _key: 'security' },
          { title: 'Lift', value: 'lift', _key: 'lift' },
          { title: 'Power Backup', value: 'power_backup', _key: 'power_backup' },
          { title: 'Water Supply', value: 'water_supply', _key: 'water_supply' },
          { title: 'Gym', value: 'gym', _key: 'gym' },
          { title: 'Swimming Pool', value: 'swimming_pool', _key: 'swimming_pool' },
          { title: 'Garden', value: 'garden', _key: 'garden' },
          { title: 'Play Area', value: 'play_area', _key: 'play_area' },
          { title: '24/7 Water Supply', value: '24_7_water', _key: '24_7_water' },
          { title: 'Furnished', value: 'furnished', _key: 'furnished' },
          { title: 'Semi-Furnished', value: 'semi_furnished', _key: 'semi_furnished' },
          { title: 'Unfurnished', value: 'unfurnished', _key: 'unfurnished' },
          { title: 'Air Conditioning', value: 'ac', _key: 'ac' },
          { title: 'Heating', value: 'heating', _key: 'heating' },
          { title: 'Internet', value: 'internet', _key: 'internet' },
          { title: 'Pet Friendly', value: 'pet_friendly', _key: 'pet_friendly' },
        ],
      },
    },
    {
      name: 'interests',
      title: 'Interests',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'interest' }] }],
      readOnly: true,
    },
    {
      name: 'adminOverride',
      title: 'Admin Override',
      type: 'boolean',
      hidden: true,
      description: 'Allows admin to bypass validation and republish',
      initialValue: false,
    },
  ],
};
