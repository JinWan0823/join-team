export default function MyInfo() {
  return (
    <>
      <div className="flex items-center">
        <div className="thumb w-[85px] h-[85px] rounded-[50%] bg-[#333]" />
        <div className="ml-[20px]">
          <p className="font-bold text-lg">박진완</p>
          <ul className="flex">
            <li className="mr-[8px] info-list">
              피드 <span className="font-bold">0</span>
            </li>
            <li className="mr-[8px] info-list">
              팔로워 <span className="font-bold">0</span>
            </li>
            <li className="mr-[8px]">
              팔로잉 <span className="font-bold">0</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
