import { ApiHandler } from "sst/node/api";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { Table } from "sst/node/table";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export const handler = ApiHandler(async (_evt) => {
  await db.send(
    new PutCommand({
      TableName: Table.Notes.tableName,
      Item: {
        userId: "ramiro123",
        noteId: "note123",
        content: "contenido de la nota",
        createdAt: Date.now(),
      },
    })
  );

  return {
    statusCode: 200,
    body: `Hello world. The time is ${new Date().toISOString()}`,
  };
});
