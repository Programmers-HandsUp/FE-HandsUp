interface AddrListProps {
  handleClickAddr: (address: string) => void;
  address: string;
}

function AddrList({ handleClickAddr, address }: AddrListProps) {
  const [si, gu, dong] = address.split(" ");

  return (
    <button
      className="flex gap-1 border-b w-full border-gray-400 py-4"
      onClick={() => handleClickAddr(`${address}`)}>
      <span>{si}</span>
      <span>{gu}</span>
      <span className="text-[#96E4FF]">{dong}</span>
    </button>
  );
}

export default AddrList;
