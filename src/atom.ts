import { atom } from "recoil";

export const isDarkAtom = atom({
  //state 이름(고유)
  key: "isDark",
  // 기본값
  default: false,
});
