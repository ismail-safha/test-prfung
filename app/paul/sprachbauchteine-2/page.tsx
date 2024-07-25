"use client";
import React, { useRef, useState } from "react";

import Header from "../../components/Header";

interface Text {
  title: string;
  text: string;
  anserText: string;
}

interface Answer {
  id: number;
  number: string;
  text: string;
}

const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const sprachbau_2_t = {
  answers: [
    { id: 1, number: "A", text: "ABER" },
    { id: 2, number: "B", text: "DAMIT" },
    { id: 3, number: "C", text: "DER" },
    { id: 4, number: "D", text: "IN" },
    { id: 5, number: "E", text: "MANCHMAL" },
    { id: 6, number: "F", text: "MIT" },
    { id: 7, number: "G", text: "PAAR" },
    { id: 8, number: "H", text: "SCHON" },
    { id: 9, number: "I", text: "SEHR" },
    { id: 10, number: "J", text: "TROTZ" },
    { id: 11, number: "K", text: "WEIL" },
    { id: 12, number: "L", text: "WANN" },
    { id: 13, number: "M", text: "WENN" },
    { id: 14, number: "N", text: "WIE" },
    { id: 15, number: "O", text: "ZU" },
  ],
};

const initialCartItems: Text[] = [
  { title: "input1", text: "", anserText: "IN" },
  { title: "input2", text: "", anserText: "WEIL" },
  { title: "input3", text: "", anserText: "MANCHMAL" },
  { title: "input4", text: "", anserText: "SCHON" },
  { title: "input5", text: "", anserText: "ABER" },
  { title: "input6", text: "", anserText: "DER" },
  { title: "input7", text: "", anserText: "DAMIT" },
  { title: "input8", text: "", anserText: "WENN" },
  { title: "input9", text: "", anserText: "WIE" },
  { title: "input10", text: "", anserText: "PAAR" },
];

const Sprachbauchteine_2: React.FC = () => {
  //====

  const [answers, setAnswers] = useState(sprachbau_2_t.answers);

  const shuffleAnswers = () => {
    const texts = answers.map((answer) => answer.text);
    const shuffledTexts = shuffleArray(texts);

    const shuffledAnswers = answers.map((answer, index) => ({
      ...answer,
      text: shuffledTexts[index],
    }));

    setAnswers(shuffledAnswers);
  };
  //====

  const [selectedInputIndex, setSelectedInputIndex] = useState<number | null>(
    null
  );
  const [cartItems, setCartItems] = useState<Text[]>(initialCartItems);
  const [results, setResults] = useState<boolean[] | undefined>(undefined);

  const handleAnswerClick = (answerText: string) => {
    if (selectedInputIndex !== null) {
      const updatedCartItems = cartItems.map((item, index) =>
        index === selectedInputIndex ? { ...item, text: answerText } : item
      );
      setCartItems(updatedCartItems);
    }
  };

  const handleInputClick = (inputIndex: number) => {
    setSelectedInputIndex(inputIndex);
    const updatedCartItems = cartItems.map((item, index) =>
      index === inputIndex ? { ...item, text: "" } : item
    );
    setCartItems(updatedCartItems);
  };

  const checkAnswers = () => {
    const newResults = cartItems.map((item) => item.text === item.anserText);
    setResults(newResults);
  };

  const resetCheckResult = () => {
    setCartItems(initialCartItems);
    setResults(undefined);
    setSelectedInputIndex(null);
  };

  return (
    <div className="container m-auto  w-full px-2">
      <Header
        pageHome="/paul"
        pageTow="/paul/lesenteil-2"
        pageThree="/paul/lesenteil-3"
        pageFour="/paul/sprachbauchteine-1"
        pageFive="/paul/sprachbauchteine-2"
      />
      <main>
        <div className="w-full bg-blue-900 text-white">
          <h1 className="p-2">Sprachbauchteine, TEIL 2</h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
          {/* div text */}
          <div className="w-full lg:w-[55%] mt-[20px]">
            <p className="bg-[#f6f2bc] text-black rounded-lg p-2">
              Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a,
              b oder c) in die jeweilige Lücke passt. Markieren Sie Ihre
              Lösungen auf dem Antwortbogen bei den Aufgaben 21 - 30
            </p>
            <div className="mt-[30px] dark:bg-[#1d2a35] dark:text-[#ededed] bg-[#fbfbfb] rounded-lg lg:overflow-y-scroll h-fit  lg:h-[500px] p-4">
              <h1 className="text-xl font-bold">
                Sehr geehrte Damen und Herren,
              </h1>
              <p>
                ich habe Ihre Anzeige gelesen und interessiere mich sehr für Ihr
                Angebot. Ich komme aus Kroatien und möchte
                <input
                  type="text"
                  placeholder="____31"
                  className={`bg-blue-500 rounded-[9px] w-16 text-center mx-2 ${
                    results !== undefined
                      ? results[0]
                        ? "bg-green-300"
                        : "bg-red-300"
                      : ""
                  }`}
                  value={cartItems[0].text}
                  onClick={() => handleInputClick(0)}
                  readOnly
                />{" "}
                den nächsten Sommerferien mein Deutsch verbessern. Klagenfurt
                ist für mich der ideale Ort,
                <input
                  type="text"
                  placeholder="____32"
                  className={`bg-blue-500 rounded-[9px] w-16 text-center mx-2 ${
                    results !== undefined
                      ? results[1]
                        ? "bg-green-300"
                        : "bg-red-300"
                      : ""
                  }`}
                  value={cartItems[1].text}
                  onClick={() => handleInputClick(1)}
                  readOnly
                />{" "}
                das n nicht so weit weg von meiner Heimatstadt Zagreb ist. Da
                kann ich an den Wochenenden vielleicht auch
                <input
                  type="text"
                  placeholder="____33"
                  className={`bg-blue-500 rounded-[9px] w-16 text-center mx-2 ${
                    results !== undefined
                      ? results[2]
                        ? "bg-green-300"
                        : "bg-red-300"
                      : ""
                  }`}
                  value={cartItems[2].text}
                  onClick={() => handleInputClick(2)}
                  readOnly
                />{" "}
                nach Hause fahren. Nun aber zu meiner Person: Ich bin 24 Jahre
                alt und habe in der Schule vier Jahre lang Deutsch gelernt. Ich
                kann zwar
                <input
                  type="text"
                  placeholder="____34"
                  className={`bg-blue-500 rounded-[9px] w-16 text-center mx-2 ${
                    results !== undefined
                      ? results[3]
                        ? "bg-green-300"
                        : "bg-red-300"
                      : ""
                  }`}
                  value={cartItems[3].text}
                  onClick={() => handleInputClick(3)}
                  readOnly
                />{" "}
                ganz gut schreiben,
                <input
                  type="text"
                  placeholder="____35"
                  className={`bg-blue-500 rounded-[9px] w-16 text-center mx-2 ${
                    results !== undefined
                      ? results[4]
                        ? "bg-green-300"
                        : "bg-red-300"
                      : ""
                  }`}
                  value={cartItems[4].text}
                  onClick={() => handleInputClick(4)}
                  readOnly
                />{" "}
                ich habe immer wieder Probleme beim freien Sprechen. Im Herbst
                möchte ich in Hamburg ein Studium beginnen, für das ich
                ebenfalls gute Deutschkenntnisse brauche. Am liebsten wäre mir
                ein vierwöchiger Deutschkurs,
                <input
                  type="text"
                  placeholder="____36"
                  className={`bg-blue-500 rounded-[9px] w-16 text-center mx-2 ${
                    results !== undefined
                      ? results[5]
                        ? "bg-green-300"
                        : "bg-red-300"
                      : ""
                  }`}
                  value={cartItems[5].text}
                  onClick={() => handleInputClick(5)}
                  readOnly
                />{" "}
                nur vormittags stattfindet,
                <input
                  type="text"
                  placeholder="____37"
                  className={`bg-blue-500 rounded-[9px] w-16 text-center mx-2 ${
                    results !== undefined
                      ? results[6]
                        ? "bg-green-300"
                        : "bg-red-300"
                      : ""
                  }`}
                  value={cartItems[6].text}
                  onClick={() => handleInputClick(6)}
                  readOnly
                />{" "}
                ich nachmittags etwas anderes machen kann. Ich hätte den ganzen
                August bis Mitte September Zeit.
                <input
                  type="text"
                  placeholder="____38"
                  className={`bg-blue-500 rounded-[9px] w-16 text-center mx-2 ${
                    results !== undefined
                      ? results[7]
                        ? "bg-green-300"
                        : "bg-red-300"
                      : ""
                  }`}
                  value={cartItems[7].text}
                  onClick={() => handleInputClick(7)}
                  readOnly
                />{" "}
                Sie einen passenden Kurs für mich haben, schicken Sie mir bitte
                sobald
                <input
                  type="text"
                  placeholder="____39"
                  className={`bg-blue-500 rounded-[9px] w-16 text-center mx-2 ${
                    results !== undefined
                      ? results[8]
                        ? "bg-green-300"
                        : "bg-red-300"
                      : ""
                  }`}
                  value={cartItems[8].text}
                  onClick={() => handleInputClick(8)}
                  readOnly
                />{" "}
                möglich nähere Informationen. Mich interessieren auch Ihre
                Freizeitprogramme, Spezialkurse, die Unterkunftsmöglichkeiten
                und natürlich die Preise. Bitte empfehlen Sie mir auch ein
                <input
                  type="text"
                  placeholder="____40"
                  className={`bg-blue-500 rounded-[9px] w-16 text-center mx-2 ${
                    results !== undefined
                      ? results[9]
                        ? "bg-green-300"
                        : "bg-red-300"
                      : ""
                  }`}
                  value={cartItems[9].text}
                  onClick={() => handleInputClick(9)}
                  readOnly
                />{" "}
                gute Webseiten über Klagenfurt und den Wörthersee.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[45%] mt-[30px] bg-[#ccc] dark:bg-[#777] rounded-lg h-fit p-4">
            <div>
              {answers.map((answer) => (
                <div
                  key={answer.id}
                  className="flex items-center cursor-pointer"
                  onClick={() => handleAnswerClick(answer.text)}
                >
                  <h1 className="pl-3">{answer.number}</h1>
                  <div className="p-[5px] m-[10px] rounded-lg bg-blue-200">
                    {answer.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-[10px] m-[20px]">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={checkAnswers}
              >
                Check Answers
              </button>
              <button
                onClick={shuffleAnswers}
                className="bg-[#c37e2fc7]  hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Shuffle 🔄
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2"
                onClick={resetCheckResult}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sprachbauchteine_2;
