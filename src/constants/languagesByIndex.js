import { languages } from "./languages";

const languageByIndex = (index) => languages[index % languages.length];

export default languageByIndex;
