import path from "path";
import { buildConfig } from "payload/config";
import Onama from "./collections/Onama";

// import Examples from './collections/Examples';
import Users from "./collections/Users";

export default buildConfig({
  serverURL: "http://localhost:3005",
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: "Ekocell",
    }
  },
  collections: [
    Users,
    Onama
    // Add Collections here
    // Examples,
  ],
  upload: {
    limits: {
      fileSize: 5000000, // 5MB, written in bytes
    },
  },
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  cors: ["http://localhost:3000"],
});
