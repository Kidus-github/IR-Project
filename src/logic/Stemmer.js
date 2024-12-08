import Translator from "./Translator.js";

const suffix_list =
  "ኦችኣችኧውንንኣ|ኦችኣችህኡ|ኦችኣችኧውን|ኣችኧውንንኣ|ኦችኣችኧው|ኢዕኧልኧሽ|ኦችኣችን|ኣውኢው|ኣችኧውኣል|ችኣት|ችኣችህኡ|ችኣችኧው|ኣልኧህኡ|ኣውኦች|ኣልኧህ|ኣልኧሽ|ኣልችህኡ|ኣልኣልኧች|ብኣችኧውስ|ብኣችኧው|ኣችኧውን|ኣልኧች|ኣልኧን|ኣልኣችህኡ|ኣችህኡን|ኣችህኡ|ኣችህኡት|ውኦችንንኣ|ውኦችን|ኣችኧው|ውኦችኡን|ውኦችኡ|ውንኣ|ኦችኡን|ውኦች|ኝኣንኧትም|ኝኣንኣ|ኝኣንኧት|ኝኣን|ኝኣውም|ኝኣው|ኣውኣ|ብኧትን|ኣችህኡም|ችኣችን|ኦችህ|ኦችሽ|ኦችኡ|ኦችኤ|ኦውኣ|ኦቿ|ችው|ችኡ|ኤችኡ|ንኧው|ንኧት|ኣልኡ|ኣችን|ክኡም|ክኡት|ክኧው|ችን|ችም|ችህ|ችሽ|ችን|ችው|ይኡሽን|ይኡሽ|ውኢ|ኦችንንኣ|ኣውኢ|ብኧት|ኦች|ኦችኡ|ውኦን|ኝኣ|ኝኣውን|ኝኣው|ኦችን|ኣል|ም|ሽው|ክም|ኧው|ውኣ|ትም|ውኦ|ውም|ውን|ንም|ሽን|ኣች|ኡት|ኢት|ክኡ|ኤ|ህ|ሽ|ኡ|ሽ|ክ|ች|ኡን|ን|ም|ንኣ";
const prefix_list =
  "ስልኧምኣይ|ይኧምኣት|ዕንድኧ|ይኧትኧ|ብኧምኣ|ብኧትኧ|ዕኧል|ስልኧ|ምኧስ|ዕይኧ|ይኣል|ስኣት|ስኣን|ስኣይ|ስኣል|ይኣስ|ይኧ|ልኧ|ብኧ|ክኧ|እን|አል|አስ|ትኧ|አት|አን|አይ|ይ|አ|እ";
const suffix_arr = [];
const preffix_arr = [];

function stem(word) {
  let cv_string = Translator.transliterate(word, "am"); // consonant-vowel string

  // Prepare suffix array
  const sarr = suffix_list.split("|");
  sarr.forEach((suffix) => {
    suffix_arr.push(Translator.transliterate(suffix, "am"));
  });

  suffix_arr.push("Wa"); // Special case for ሯ

  // Prepare prefix array
  const parr = prefix_list.split("|");
  parr.forEach((prefix) => {
    preffix_arr.push(Translator.transliterate(prefix, "am"));
  });

  // Remove suffixes
  suffix_arr.every(function (sfx) {
    if (cv_string.endsWith(sfx)) {
      let regex = new RegExp(`${sfx}$`, `i`);
      cv_string = cv_string.replace(regex, "");
      return false;
    } else return true;
  });

  // Remove prefixes
  preffix_arr.every(function (pfx) {
    if (cv_string.startsWith(pfx)) {
      let regex = new RegExp(`^${pfx}`);
      cv_string = cv_string.replace(regex, "");
      return false;
    } else return true;
  });

  // Remove infixes
  if (/.+([^aeiou])[aeiou]\1[aeiou].?/i.test(cv_string)) {
    cv_string = cv_string.replace(
      /\S\S[^aeiou][aeiou]/i,
      cv_string[0] + cv_string[1]
    );
  } else if (/^(.+)a\1$/i.test(cv_string)) {
    cv_string = cv_string.replace(/a.+/i, "");
  }

  // if (/[bcdfghjklmnpqrstvwxyz]{2}e/i.test(cv_string)) {
  //   let ccv = cv_string.match(/[bcdfghjklmnpqrstvwxyz]{2}e/i)!

  //   cv_string = cv_string.replace(
  //     /[bcdfghjklmnpqrstvwxyz]{2}e/i,
  //     ccv[0].substring(0, 1) + "X" + ccv[0].substring(1)
  //   )
  // }

  return Translator.transliterate(cv_string, "en");
}

export default stem;
