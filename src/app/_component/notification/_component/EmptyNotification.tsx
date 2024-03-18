import Icon from "../../common/Icon";

function EmptyNotification() {
  return (
    <div className="flex flex-col justify-center items-center gap-1 mt-36">
      <span className="rounded-full bg-gray-400 p-4">
        <Icon
          id="bell"
          className="w-7 h-7"
        />
      </span>
      <p className="text-xl">새로운 알림이 없습니다.</p>
      <p>HandsUp의 다양한 알림을 이곳에서 모아볼 수 있어요.</p>
    </div>
  );
}

export default EmptyNotification;
