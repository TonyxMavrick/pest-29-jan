import { createBrowserRouter } from "react-router";
import { RootLayout } from "@/app/components/layout/RootLayout";
import { Home } from "@/app/pages/Home";
import { About } from "@/app/pages/About";
import { Services } from "@/app/pages/Services";
import { Contact } from "@/app/pages/Contact";
import { TermsConditions } from "@/app/pages/TermsConditions";
import { PrivacyPolicy } from "@/app/pages/PrivacyPolicy";
import { NotFound } from "@/app/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "contact", Component: Contact },
      { path: "terms", Component: TermsConditions },
      { path: "privacy", Component: PrivacyPolicy },
      { path: "*", Component: NotFound },
    ],
  },
]);
