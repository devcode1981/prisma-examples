import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import { resolvers } from './resolvers'
import { prismaBinding } from './prisma-binding'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    binding: prismaBinding,
    db: prisma,
  },
} as any)

server.start(() => console.log('Server is running on localhost:4000'))
