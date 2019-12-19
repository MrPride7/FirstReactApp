import { withNaming } from "@bem-react/classname";

export default function bem(name: string) {
  return withNaming({ e: "__", m: "--", v: "_" })(name);
}
