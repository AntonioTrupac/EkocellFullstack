import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Onama from './globals/Onama';
import Categories from './collections/Categories';

export default buildConfig({
  serverURL: 'http://localhost:3100',
  admin: {
    user: Users.slug,
  },
  routes: {
    admin: "/admin",
    api: "/api",
  },
  collections: [
    Categories,
    Users,
  ],
  globals:[
    Onama
  ],
  debug: true,
  typescript: {
    outputFile: path.resolve(__dirname, '../../ekocell/payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  cors: ["http://localhost:3000", "http://127.0.0.1:3000/", "http://127.0.0.1:3000"],
  csrf: ["http://localhost:3000", "http://127.0.0.1:3000/", "http://127.0.0.1:3000"],
});
