// app/page.tsx
import { getTranslations } from "next-intl/server"

export default async function Page() {  

  const t = await getTranslations("HomePage")

  return (
    <div className="p-6">
      <h1 className="text-black mb-4">{t("title")}</h1>
     
    </div>
  )
}
