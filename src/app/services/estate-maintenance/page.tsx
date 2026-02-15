import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Estate & Acreage Maintenance | Stone & Salt",
  description:
    "Professional large property maintenance for estates, farms, and rural homes. Now part of our Select Residential Services.",
};

export default function EstateMowingPage() {
  redirect("/services/maintenance");
}
