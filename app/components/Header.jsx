const Header = () => {
  return (
    <div className="flex justify-between items-center bg-[#02031e] h-[109px]">
      <div className="flex flex-col items-center  bg-red-800 p-1 ml-1">
        <div className="text-white font-black text-[50px]">telc</div>
        <div className="text-white  text-[12px]">LNGUAGE TESTS</div>
      </div>
      <div className="flex items-center gap-[50px]">
        <div className="flex flex-col items-center border border-white rounded-lg bg-white p-2">
          <h1 className="font-bold">Leseverstehen</h1>
          <h2 className="">Teil 1</h2>
          <h3 className="">(25 Punkte)</h3>
        </div>
        <div className="flex flex-col items-center border border-white rounded-lg bg-white p-2">
          <h1 className="font-bold">Leseverstehen</h1>
          <h2 className="">Teil 2</h2>
          <h3 className="">(25 Punkte)</h3>
        </div>
        <div className="flex flex-col items-center border border-white rounded-lg bg-white p-2">
          <h1 className="font-bold">Leseverstehen</h1>
          <h2 className="">Teil 3</h2>
          <h3 className="">(25 Punkte)</h3>
        </div>
      </div>
      <div className="text-white flex flex-col items-start mr-[8px] gap-2">
        <div className="flex flex-col items-start">
          <h1>Deutsch-B2</h1>
          <span>00:00</span>
        </div>
        <button className="bg-blue-600 text-center py-[1px] px-[8px] rounded-lg">
          ABGABE
        </button>
      </div>
    </div>
  );
};

export default Header;
