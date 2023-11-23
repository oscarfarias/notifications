import { NextApiResponse } from 'next'
interface Download {
  res: NextApiResponse
  fileName: string
  contentFile: Buffer
  status: number
}
export function download({
  res,
  fileName,
  contentFile,
  status = 200,
}: Download): void {
  res.setHeader(`Content-Type`, `application/pdf`)
  res.setHeader(`Content-Disposition`, `attachment; filename=${fileName}.pdf`)
  res.status(status).send(contentFile)
}
interface DownloadOptions {
  status?: number
  fileName: string
  contentFile: Buffer
  res: NextApiResponse
}

export function successDownload({
  res,
  status = 200,
  fileName,
  contentFile,
}: DownloadOptions): void {
  download({
    res,
    status,
    fileName,
    contentFile,
  })
}
