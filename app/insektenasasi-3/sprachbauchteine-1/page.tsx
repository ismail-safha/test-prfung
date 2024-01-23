import Header from "../../components/Header";
import { sprachbau_1 } from "../../data/Insekten_H/insektenasasi-3-Data";

const Sprachbauchteine_1 = () => {
  return (
    <div className="container m-auto  w-full px-2">
      <Header
        pageHome="/insektenasasi-3"
        pageTow="/insektenasasi-3/lesenteil-2"
        pageThree="/insektenasasi-3/lesenteil-3"
        pageFour="/insektenasasi-3/sprachbauchteine-1"
        pageFive="/insektenasasi-3/sprachbauchteine-2"
      />

      <main>
        <div className="w-full bg-blue-900 text-white">
          <h1 className="p-2">Sprachbauchteine, TEIL 1</h1>
        </div>
        <div className="flex justify-between gap-[20px]">
          {/* div text */}
          <div className="w-[55%] mt-[20px]">
            <p className="bg-[#f6f2bc] text-black rounded-lg p-2">
              Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a,
              b oder c) in die jeweilige Lücke passt. Markieren Sie Ihre
              Lösungen auf dem Antwortbogen bei den Aufgaben 21 - 30
            </p>
            <div className="mt-[30px] bg-[#fbfbfb] rounded-lg h-fit">
              {/* Map through texts array */}
              {sprachbau_1.texts.map((text, index) => (
                <div key={index} className="p-5">
                  <p className="font-semibold">{text.text}</p>
                </div>
              ))}
            </div>
          </div>
          {/* div answers */}
          <div className="w-[45%] mt-[30px] h-fit">
            {/* Map through aufgabens array */}
            {sprachbau_1.aufgabens.map((aufgabe) => (
              <div
                key={aufgabe.id}
                className="bg-[#ccc] rounded-lg my-3 flex items-center p-[10px]"
              >
                <h1 className=" text-[#fff] bg-[#040416] p-1 rounded-[50%] font-bold">
                  {aufgabe.qustion}
                </h1>
                {/* Map through answers */}
                {Object.keys(aufgabe).map((key) =>
                  key.startsWith("answers") ? (
                    <div
                      key={key}
                      className="flex gap-2 ml-5 py-1 items-center"
                    >
                      <input type="checkbox" className="w-4 h-4" />
                      <span>{aufgabe[key]}</span>
                    </div>
                  ) : null
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sprachbauchteine_1;
