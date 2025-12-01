import { COLORS } from "@/constants/colors";
import { ThemeConfig } from "antd";

export const themeConfig: ThemeConfig = {
    token: {
        colorPrimary: COLORS.blue50,
        fontFamily: "Pretendard, sans-serif",
    },
    components: {
        Input: {
            colorBorder: COLORS.gray20,
            colorTextPlaceholder: COLORS.gray50,
            colorError: COLORS.error,
            controlOutline: "none",
        },
        Form: {
            itemMarginBottom: 12,
        }
    },
}