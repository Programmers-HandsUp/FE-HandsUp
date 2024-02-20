interface AddrListProps {
  handleClickAddr: (address: string) => void;
  address: string;
}

function AddrList({ handleClickAddr, address }: AddrListProps) {
  const [depth_1, depth_2, depth_3] = address.split(" ");

  return (
    <button
      className="flex gap-1 border-b w-full border-gray-400 py-4"
      onClick={() => handleClickAddr(`${address}`)}>
      <span>{depth_1}</span>
      <span>{depth_2}</span>
      <span className="text-[#96E4FF]">{depth_3}</span>
    </button>
  );
}

export default AddrList;
