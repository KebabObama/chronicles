import { permanentRedirect } from "@/i18n/navigation";

export default () => {
  permanentRedirect({ href: "/", locale: "en" });
};
