import React from "react";
// import { useState } from "react";

function Translator(props) {
  const countries = {
    "am-ET": "Amharic",
    "ar-SA": "Arabic",
    "be-BY": "Bielarus",
    "bem-ZM": "Bemba",
    "bi-VU": "Bislama",
    "bjs-BB": "Bajan",
    "bn-IN": "Bengali",
    "bo-CN": "Tibetan",
    "br-FR": "Breton",
    "bs-BA": "Bosnian",
    "ca-ES": "Catalan",
    "cop-EG": "Coptic",
    "cs-CZ": "Czech",
    "cy-GB": "Welsh",
    "da-DK": "Danish",
    "dz-BT": "Dzongkha",
    "de-DE": "German",
    "dv-MV": "Maldivian",
    "el-GR": "Greek",
    "en-GB": "English",
    "es-ES": "Spanish",
    "et-EE": "Estonian",
    "eu-ES": "Basque",
    "fa-IR": "Persian",
    "fi-FI": "Finnish",
    "fn-FNG": "Fanagalo",
    "fo-FO": "Faroese",
    "fr-FR": "French",
    "gl-ES": "Galician",
    "gu-IN": "Gujarati",
    "ha-NE": "Hausa",
    "he-IL": "Hebrew",
    "hi-IN": "Hindi",
    "hr-HR": "Croatian",
    "hu-HU": "Hungarian",
    "id-ID": "Indonesian",
    "is-IS": "Icelandic",
    "it-IT": "Italian",
    "ja-JP": "Japanese",
    "kk-KZ": "Kazakh",
    "km-KM": "Khmer",
    "kn-IN": "Kannada",
    "ko-KR": "Korean",
    "ku-TR": "Kurdish",
    "ky-KG": "Kyrgyz",
    "la-VA": "Latin",
    "lo-LA": "Lao",
    "lv-LV": "Latvian",
    "men-SL": "Mende",
    "mg-MG": "Malagasy",
    "mi-NZ": "Maori",
    "ms-MY": "Malay",
    "mt-MT": "Maltese",
    "my-MM": "Burmese",
    "ne-NP": "Nepali",
    "niu-NU": "Niuean",
    "nl-NL": "Dutch",
    "no-NO": "Norwegian",
    "ny-MW": "Nyanja",
    "ur-PK": "Pakistani",
    "pau-PW": "Palauan",
    "pa-IN": "Panjabi",
    "ps-PK": "Pashto",
    "pis-SB": "Pijin",
    "pl-PL": "Polish",
    "pt-PT": "Portuguese",
    "rn-BI": "Kirundi",
    "ro-RO": "Romanian",
    "ru-RU": "Russian",
    "sg-CF": "Sango",
    "si-LK": "Sinhala",
    "sk-SK": "Slovak",
    "sm-WS": "Samoan",
    "sn-ZW": "Shona",
    "so-SO": "Somali",
    "sq-AL": "Albanian",
    "sr-RS": "Serbian",
    "sv-SE": "Swedish",
    "sw-SZ": "Swahili",
    "ta-LK": "Tamil",
    "te-IN": "Telugu",
    "tet-TL": "Tetum",
    "tg-TJ": "Tajik",
    "th-TH": "Thai",
    "ti-TI": "Tigrinya",
    "tk-TM": "Turkmen",
    "tl-PH": "Tagalog",
    "tn-BW": "Tswana",
    "to-TO": "Tongan",
    "tr-TR": "Turkish",
    "uk-UA": "Ukrainian",
    "uz-UZ": "Uzbek",
    "vi-VN": "Vietnamese",
    "wo-SN": "Wolof",
    "xh-ZA": "Xhosa",
    "yi-YD": "Yiddish",
    "zu-ZA": "Zulu"
}
  const fromText = document.querySelector(".from-text"),
  selectTag = document.querySelectorAll("select");
  let textTo = document.querySelector(".text-to");

  selectTag.forEach((tag, id) => {
    for(const country_code in countries) {
     let selected;
     if(id === 0 && country_code === "en-GB") {
      selected = "selected";
     } else if(id === 1 && country_code === "hi-IN") {
      selected = "selected";
     }
      let option = ` <option value="${country_code}" ${selected}>${countries[country_code]}</option>`
      tag.insertAdjacentHTML("beforeend", option);
    }
  });

    const translate = () => {
      let text = fromText.value,
      translatefrom = selectTag[0].value,
      translateTo = selectTag[1].value;
      if(!text) return;
      textTo.setAttribute("placeholder", "Translating...");
      let apiUrl= `https://api.mymemory.translated.net/get?q=${text}&langpair=${translatefrom}|${translateTo}`;
      fetch(apiUrl).then(res => res.json()).then(data => {
       textTo.value = data.responseData.translatedText;     
      })
     
    }

    const copyTextFrom = () => {
      let text = fromText.value;
      navigator.clipboard.writeText(text);
    };

    const copyTextTo = () => {
      let text = textTo.value;
      navigator.clipboard.writeText(text);
    };

    const handleText = () => {
      let tempText = fromText.value,
      tempLang = selectTag[0].value;
      fromText.value = textTo.value;
      selectTag[0].value = selectTag[1].value;
      textTo.value = tempText;
      selectTag[1].value = tempLang;   
    }

    const speakOutFrom = () => {
      let utterance;
      utterance = new SpeechSynthesisUtterance(fromText.value);
      utterance.lang = selectTag[0].value;
      speechSynthesis.speak(utterance);
    }


    const speakOutTo = () => {
      let utterance;
      utterance = new SpeechSynthesisUtterance(textTo.value);
      utterance.lang = selectTag[1].value;
      speechSynthesis.speak(utterance);
    }


  return (
    <>
    <h2 className="text-center" style={{textDecoration: 'underline', marginBottom: '-4rem'}}>Translate Text</h2>
      <div
        className="translator"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div
          className="container"
          style={{
            width: "1000px",
            height: "auto",
            border: "2px solid gray",
            padding: "30px 30px",
            borderRadius: "7px",
            backgroundColor: props.mode==="light"? "white" : "#102f5e", color: props.mode==='light'? 'black' : 'white',
          }}
        >
          <div
            className="wrapper"
            style={{ borderRadius: "5px", border: "1px solid gray" }}
          >
            <div className="text-input">
              <textarea
                className="from-text"
                placeholder="Enter Text"
                style={{
                  height: "250px",
                  width: "100%",
                  fontSize: "18px",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  resize: "none",
                  background: "none",
                  border: "none",
                  color: props.mode==='light'? 'black' : 'white',
                }}
              ></textarea>
              <textarea
                className="text-to"
                style={{
                  height: "250px",
                  width: "100%",
                  fontSize: "18px",
                  borderRadius: "0px",
                  padding: "10px 15px",
                  resize: "none",
                  border: "none",
                  borderLeft: "1px solid gray",
                  color: props.mode==='light'? 'black' : 'white', backgroundColor: props.mode==="light"? "white" : "#102f5e",
                }}
                placeholder="Translation"
                
              ></textarea>
            </div>
            <ul
              className="controls"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid gray",
                listStyle: "none",
                cursor: "pointer",
                background: "none",
                backgroundColor: props.mode==="light"? "white" : "#102f5e", color: props.mode==='light'? 'black' : 'white', 
              }}
            >
              <li className="row from">
                <div
                  className="icons"
                  style={{
                    padding: "12px 15px",
                    display: "flex",
                    fontSize: "14px",
                    width: "38%",
                    
                  }}
                >
                  <i
                    className="fas fa-volume-up"
                    style={{ padding: "10px 15px" }} onClick={speakOutFrom}
                  ></i>
                  <i
                    className="fas fa-copy"
                    style={{ padding: "10px 15px" }} onClick={copyTextFrom}
                  ></i>
                </div>
                <select className="leftTag"
                  style={{
                    border: "none",
                    outline: "none",
                    background: "none",
                    fontSize: "18px",
                    width: "100px",
                    color: props.mode==='light'? 'black' : 'white',  backgroundColor: props.mode==="light"? "white" : "#102f5e", 
                  }}
                >
                  {/* <option value="en-US">English</option>
                  <option value="hi-IN">Hindi</option>
                  <option value="ne-NP">Nepali</option> */}
                </select>
              </li>
              <li
                className="exchange"
                style={{ color: "gray", fontSize: "16px", cursor: "pointer" }} 
              >
                <i className="fas fa-exchange-alt" onClick={handleText} ></i>
              </li>
              <li className="row to">
                <div
                  className="icons"
                  style={{
                    padding: "12px 15px",
                    display: "flex",
                    fontSize: "14px",
                    width: "38%",
                  }}
                >
                  <i
                    className="fas fa-volume-up"
                    style={{ padding: "10px 15px" }} onClick={speakOutTo}
                  ></i>
                  <i
                    className="fas fa-copy"
                    style={{ padding: "10px 12px" }} onClick={copyTextTo}
                  ></i>
                </div>
                <select className="rightTag"
                  style={{
                    border: "none",
                    outline: "none",
                    background: "none",
                    fontSize: "18px",
                    width: "100px",
                    color: props.mode==='light'? 'black' : 'white',  backgroundColor: props.mode==="light"? "white" : "#102f5e", 

                  }}
                >
                  {/* <option value="en-US">English</option>
                  <option value="hi-IN">Hindi</option>
                  <option value="ne-NP">Nepali</option> */}
                </select>
              </li>
            </ul>
            <button
              style={{
                width: "100%",
                padding: "15px",
                color: "white",
                border: "none",
                outline: "none",
                cursor: "pointer",
                borderRadius: "5px",
                backgroundColor: props.mode==="light"? "#102f5e" : "black",
              }}
              onClick={translate}
            >
              Translate Text
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Translator;
