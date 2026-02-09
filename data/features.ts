import { WandSparkles, Calendar, PencilLine, ShieldCheckIcon, BarChartIcon, CpuIcon } from "lucide-react";
import { IFeature } from "../types";

export const features: IFeature[] = [
    {
        title: "Automatic Post Creation",
        description:
            "AI generates professional, ready‑to‑publish posts tailored to your business and industry.",
        icon: WandSparkles,
        cardBg: "bg-gray-100",
        iconBg: "bg-orange-500",
    },
    {
        title: "Weekly Auto‑Publishing",
        description:
            "Your social media stays consistently active with scheduled posts every week — completely hands‑free.",
        icon: Calendar,
        cardBg: "bg-gray-100",
        iconBg: "bg-orange-500",
    },
    {
        title: "Multi‑Platform Support",
        description:
            "Publish across Facebook, Instagram, and LinkedIn from one simple setup.",
        icon: CpuIcon,
        cardBg: "bg-gray-100",
        iconBg: "bg-orange-500",
    },
    {
        title: "Easy Editing & Full Control",
        description:
            "Review or edit any post anytime, while keeping everything automated by default.",
        icon: PencilLine,
        cardBg: "bg-gray-100",
        iconBg: "bg-orange-500",
    },
]