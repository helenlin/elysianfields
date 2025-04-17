// original poems ******************************************

const elysianfield1 =
  "november peels off the skin of the road\n\ni sweat through a polyp snowfield \nwhich i must annihilate\n\ntoo much rests on the left spine glowing in the dark\n\nbeyond the paling fence\nthe 2mm hole in the world";

const elysianfield2 =
  "back before closing at the\nmass subsidiary zone\n\ndust yoked to \nghost\n\nbacklit in blue\n\ni was caught weeping \na flashlight with flesh batteries\n\nred dust of morning\nif main street burns\n";

const elysianfield3 =
  "mountains sag\nout of the sea\n            stillborn\n\ndust yokes to\n                              exile\nspectral fog erupts\ngrateful eyes bow\n\nnovember peels me open like an orange\ni must   annihilate\nbeyond the pale freeze";



// word banks ******************************************

const wordBank = ["november", "peels", "off", "the", "skin", "of", "road", "i", "sweat", "through", "a", "polyp", "snowfield", "which", "must", "annihilate", "too", "much", "rests", "on", "left", "spine", "glowing", "in", "dark", "beyond", "paling", "fence", "2mm", "hole", "world", "back", "before", "closing", "at", "mass", "subsidiary", "zone", "dust", "yoked", "to", "ghost", "backlit", "blue", "was", "caught", "weeping", "flashlight", "with", "flesh", "batteries", "red", "dust", "of", "morning", "if", "main", "street", "burns", "mountain", "sag", "out", "sea", "stillborn", "yokes", "exile", "spectral", "fog", "erupts", "grateful", "eyes", "bow", "me", "open", "like", "orange", "beyond", "freeze"];

function generateWord() {
  return wordBank[Math.floor(Math.random() * wordBank.length)];
}

// [en, cn]
const field = ["field", "田野", "田"]; // 田 (tián) for field 
const mountain = ["mountain", "山脉", "山"]; // 山 (shān) for mountain  
const sea = ["sea", "大海", "海"]; // 海 (hǎi) for sea  
const red = ["red", "红色", "赤"]; // 赤 (chì) for red (or 红 hóng, but 赤 is more classical)  
const hole = ["hole", "洞穴", "洞"]; // 洞 (dòng) for hole  
const weeping = ["weeping", "哭泣", "泣"]; // 泣 (qì) for weeping (or 哭 kū, but 泣 is more literary)  
const street = ["street", "街道", "街"]; // 街 (jiē) for street  

// lines ******************************************

// [ef1, ef2, ef3]
const lineEN1 = ["november peels off the skin of the road", "back before closing at the", "mountains sag"];
const lineEN2 = ["", "mass subsidiary zone", "out of the sea"];
const lineEN3 = ["i sweat through a polyp snowfield", "", "            stillborn"];
const lineEN4 = ["which i must annihilate", "dust yoked to", "", "街"];
const lineEN5 = ["", "ghost", "dust yokes to", "", "", "", ""];
const lineEN6 = ["too much rests on the left spine glowing in the dark", "", "                              exile"];
const lineEN7 = ["", "backlit in blue", "", "泣"];
const lineEN8 = ["beyond the paling fence", "", "spectral fog erupts"];
const lineEN9 = ["the 2mm hole in the world", "i was caught weeping", "grateful eyes bow"];
const lineEN10 = ["", "a flashlight with flesh batteries", ""];
const lineEN11 = ["", "", "november peels me open like an orange"];
const lineEN12 = ["", "red dust of morning", ""];
const lineEN13 = ["", "if main street burns", "i must   annihilate"];
const lineEN14 = ["", "", "beyond the pale freeze"];

// [ef1, ef2, ef3, hl1, hl2, hl3]
const lineHL1 = ["november peels off the skin of the road", "back before closing at the", "mountains sag", "山", "brown", "falling"];
const lineHL2 = ["", "mass subsidiary zone", "out of the sea", "海", "indigo", "drowning"];
const lineHL3 = ["i sweat through a polyp snowfield", "", "            stillborn", "海", "white", "sweating"];
const lineHL4 = ["which i must annihilate", "dust yoked to", "", "街", "gray", "drying"];
const lineHL5 = ["", "ghost", "dust yokes to", "", "", "", "", "洞", "black", "fading"];
const lineHL6 = ["too much rests on the left spine glowing in the dark", "", "                              exile", "洞", "purple", "hurting"];
const lineHL7 = ["", "backlit in blue", "", "泣", "blue", "aching"];
const lineHL8 = ["beyond the paling fence", "", "spectral fog erupts", "田", "tan", "yearning"];
const lineHL9 = ["the 2mm hole in the world", "i was caught weeping", "grateful eyes bow", "洞", "chartreuse", "gaping"];
const lineHL10 = ["", "a flashlight with flesh batteries", "", "赤", "yellow", "seeing"];
const lineHL11 = ["", "", "november peels me open like an orange", "赤", "orange", "spilling"];
const lineHL12 = ["", "red dust of morning", "", "赤", "red", "burning"];
const lineHL13 = ["", "if main street burns", "i must   annihilate", "街", "teal", "boiling"];
const lineHL14 = ["", "", "beyond the pale freeze", "海", "skyblue", "seeping"];


// [ef1, ef2, ef3, GT ef1, chatGPT ef1, deepseek ef1, deepseekef1]
const line1 = ["november peels off the skin of the road", "back before closing at the", "mountains sag", "十一月剥落了道路的表皮", "十一月剥去了道路的皮肤", "十一月剥落了道路的皮", "十一月褪去了道路的外衣"];
const line2 = ["", "mass subsidiary zone", "out of the sea", "", "", "", ""];
const line3 = ["i sweat through a polyp snowfield", "", "            stillborn", "我汗流浃背，穿过一片息肉般的雪原", "我在息肉般的雪原中流着汗", "我汗流浃背地穿过息肉般的雪原", "我渗着汗，穿过肉芽丛生的雪野"];
const line4 = ["which i must annihilate", "dust yoked to", "", "我必须消灭它", "我必须毁灭的", "而我必须将其毁灭", "此物我必除之"];
const line5 = ["", "ghost", "dust yokes to", "", "", "", ""];
const line6 = ["too much rests on the left spine glowing in the dark", "", "                              exile", "左脊柱休息太多，在黑暗中发光", "太多的东西依附在左侧的脊柱上，在黑暗中发着光", "太多重量压在那根, 黑暗中发光的左脊椎上", "万千依托，尽悬于暗处荧然的左脊"];
const line7 = ["", "backlit in blue", "", "", "", "", ""];
const line8 = ["beyond the paling fence", "", "spectral fog erupts", "篱笆那边", "在那道栅栏之外", "在褪色的围栏之外", "越过苍白围栏的彼端"];
const line9 = ["the 2mm hole in the world", "i was caught weeping", "grateful eyes bow", "世界上2毫米的洞", "世界上的那个2毫米的洞", "世界上的2毫米孔洞", "世间那个2毫米的缺口"];
const line10 = ["", "a flashlight with flesh batteries", "", "", "", "", ""];
const line11 = ["", "", "november peels me open like an orange", "", "", "", ""];
const line12 = ["", "red dust of morning", "", "", "", "", ""];
const line13 = ["", "if main street burns", "i must   annihilate", "", "", "", ""];
const line14 = ["", "", "beyond the pale freeze", "", "", "", ""];

function generateLine(whichLine) {
  return whichLine[Math.floor(Math.random() * whichLine.length)];
}







changeKeyWord();

function changeKeyWord() {
  const wordDiv = document.getElementById("keyWord");
  let text = generateWord();
  if (wordDiv) {
    wordDiv.innerHTML = text;
  }
}

changeLine(line1);

function changeLine(thisLine) {
  const lineDiv = document.querySelector('.textblock');
  let text = generateLine(thisLine);
  if (lineDiv) {
    lineDiv.innerText = text;
  };
}
