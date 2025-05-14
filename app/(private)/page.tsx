// app/page.tsx
import { getContents } from "@/features/private/api/getContents"
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material"
import { getTranslations } from "next-intl/server"

interface ContentRow {
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export default async function Page() {
  const contents = await getContents()
  const rows: ContentRow[] =
    contents?.map((r : ContentRow) => ({
      id: r.id,
      title: r.title,
      url: r.url,
      thumbnailUrl: r.thumbnailUrl,
    })) || []

  const t = await getTranslations("HomePage")

  return (
    <div className="p-6">
      <h1 className="text-black mb-4">{t("title")}</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>{t("name")}</strong></TableCell>
              <TableCell><strong>{t("url")}</strong></TableCell>
              <TableCell><strong>{t("thumbnail")}</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.url}</TableCell>
                <TableCell>
                  <img
                    src={row.thumbnailUrl}
                    alt={row.title}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
