import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import property from './property';
import owner from './owner';
import location from './location';
import tenant from './tenant';
import user from './user';
import interest from './interest';

// Add this named export
export const schemaTypes = [property, owner, location, tenant, user, interest];

// Keep your existing default export
export default defineConfig({
  projectId: 'ogyoe0hr',
  dataset: 'production',
  title: 'Property Rental App',
  plugins: [deskTool()],
  schema: {
    types: [property, owner, location, tenant, user, interest],
  },
});