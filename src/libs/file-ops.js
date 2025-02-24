import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "@/utils/s3";

export async function uploadFile({ key, folder, body }) {
  const buffer = Buffer.from(await body.arrayBuffer());
  try {
    const command = new PutObjectCommand({
      Bucket: "eventmakers",
      Key: `${folder}/${key}`,
      Body: buffer,
      ContentType: body.type,
    });

    const fileUpload = await s3Client.send(command);
  } catch (error) {
    console.error(error);
  }
}
