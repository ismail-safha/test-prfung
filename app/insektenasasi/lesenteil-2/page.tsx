import Header from "../../components/Header";
import { lesenTeil_2 } from "../../data/Insekten_H/insektenasasi";

const Lesenteiltow = () => {
  return (
    <div className="container w-full px-2">
      <Header
        pageHome="/insektenasasi"
        pageTow="/insektenasasi/lesenteil-2"
        pageThree="/insektenasasi/lesenteil-3"
        pageFour="/insektenasasi/sprachbauchteine-1"
        pageFive="/insektenasasi/sprachbauchteine-2"
      />

      <main>
        <div className="w-full bg-blue-900 text-white">
          <h1 className="p-2">Leseverstehen, TEIL 2</h1>
        </div>
        <div className="flex justify-between gap-[20px]">
          {/* div text */}
          <div className="w-[55%] mt-[20px]">
            <p className="bg-[#f6f2bc] text-black rounded-lg p-2">
              Lesen Sie zuerst die beiden Artikel und lösen Sie dann die
              Aufgaben 6-10 zu den Texten.
            </p>
            <div className="mt-[30px] bg-[#fbfbfb] rounded-lg h-fit">
              {/* Map through texts array */}
              {lesenTeil_2.texts.map((text, index) => (
                <div key={index} className="p-5">
                  <div className=" mb-1 py-[30px] px-[10px] border border-[#000] ">
                    <h1 className="font-bold py-1">{text.title}</h1>
                    <p className="font-semibold">{text.text}</p>
                  </div>
                  <div className="my-2 py-[30px] px-[10px] border border-[#000]">
                    <h1 className="font-bold py-1">{text.titleTow}</h1>
                    <p className="font-semibold">{text.textTow}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* div answers */}
          <div className="w-[45%] mt-[30px] h-fit">
            {/* Map through aufgabens array */}
            {lesenTeil_2.aufgabens.map((aufgabe) => (
              <div key={aufgabe.id} className="bg-[#ccc] rounded-lg my-3">
                <h1 className="px-3 pt-5 font-bold">{aufgabe.qustion}</h1>
                {/* Map through answers */}
                {Object.keys(aufgabe).map((key) =>
                  key.startsWith("answers") ? (
                    <div
                      key={key}
                      className="flex gap-4 ml-5 py-1 items-center"
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

export default Lesenteiltow;
