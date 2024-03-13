import Icon from "../../common/Icon";

function PermissionDenied() {
  return (
    <div className="flex items-center border p-2 mt-2 rounded-md">
      <Icon
        id="notification-off"
        className="w-6 h-6"
        fill="white"
        stroke="white"
      />
      <div className="pl-4">
        <p className="">휴대폰의 앱 알림이 꺼져있어요</p>
        <p className="text-[#96E4FF]">
          설정 → 알림 → HandsUp 알림 허용해주세요 : )
        </p>
      </div>
    </div>
  );
}

export default PermissionDenied;
