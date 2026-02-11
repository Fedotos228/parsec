import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { GraphQLClient } from 'graphql-request'

const API_URL = "http://localhost:8888/parsec/graphql"

const client = new GraphQLClient(API_URL, {
  fetch
})

export async function wpFetch<TResult, TVariables>(
  query: TypedDocumentNode<TResult, TVariables>,
  variables?: TVariables 
): Promise<TResult> {
  return await client.request(query, variables as any)
}