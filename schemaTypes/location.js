export default {
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'state',
      title: 'State',
      type: 'string',
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
    },
    {
      name: 'coordinates',
      title: 'Coordinates',
      type: 'geopoint',
    },
  ],
};
