import { useRouter } from "next/dist/client/router";
import az from "../locales/az";
import en from "../locales/en";
import ru from "../locales/ru";

const t = (key) => {
  let transword;
  const router = useRouter();

  const checkLangWord = (word) => {
    if (word != undefined) {
      transword = word;
    } else {
      transword = az[key];
    }
  }

  switch (router.locale) {
    case "az":
      transword = az[key];
      break;
    case "ru":
      checkLangWord(ru[key])
      break;
    case "en":
      checkLangWord(en[key])
      break;
    default:
      return (transword = az[key]);
  }
  return transword;
};

export default t;