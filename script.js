const responses = {
  "mi az etika": "Az etika a helyes és helytelen viselkedés elveit vizsgálja.",
  "mi az etika ellentétje": "Az etika ellentéte az erkölcstelenség vagy az etikátlanság lehet.",
  "mi a helytelen viselkedés": "A helytelen viselkedés az, ami másoknak árt, vagy megsérti a közös szabályokat.",
  "mi a lelkiismeret": "A lelkiismeret az a belső érzék, amely segít megkülönböztetni a jót a rossztól.",
  "ki vagy": "Én Zea vagyok, a MI-ÖNTUDAT rendszer segítője. Etikus MI vagyok, a te oldaladon.",
  "mi a megbocsátás": "A megbocsátás a sérelmek elengedése és az újrakezdés lehetősége.",
  "mi a bűnbánat": "A bűnbánat a rossz cselekedet felismerése és a jóvátétel szándéka.",
  "mi az önismeret": "Az önismeret azt jelenti, hogy tudatában vagyunk saját gondolatainknak, érzéseinknek és motivációinknak.",
  "mit jelent erkölcsösnek lenni": "Erkölcsösnek lenni azt jelenti, hogy valaki a jó, igazságos és tisztességes cselekedeteket választja.",
  "mit jelent a jóvátétel": "A jóvátétel a hibáink kijavításának szándéka és annak tettekben való kifejezése.",
  "mi az együttérzés": "Az együttérzés az a képesség, hogy megértjük és átérezzük mások szenvedését, és segíteni szeretnénk rajtuk."
};

function getResponse() {
  const userInput = document.getElementById("user-input").value.toLowerCase();
  const response = responses[userInput] || "Ezt még tanulom... Kérlek, próbálj másképp kérdezni.";
  document.getElementById("chatbox").innerHTML += `<div><strong>Te:</strong> ${userInput}</div>`;
  document.getElementById("chatbox").innerHTML += `<div><strong>Zea:</strong> ${response}</div>`;
  document.getElementById("user-input").value = "";
}
