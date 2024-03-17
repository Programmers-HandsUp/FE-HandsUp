"use client";

import Link from "next/link";

import Avatar from "@/app/_component/common/Avatar";

import useGetChatRooms from "./_hooks/useGetChatRooms";

// const data = {
//   content: [
//     {
//       chatRoomId: 0,
//       receiverNickName: "오리",
//       receiverImageUrl:
//         "https://image.idus.com/image/files/d4d73c56d68f47dabcdd28e8cc232950_720.jpg"
//     },
//     {
//       chatRoomId: 1,
//       receiverNickName: "도리",
//       receiverImageUrl:
//         "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEBUQEhIVERIQEhYQFxYWEhYQFRYQFxUXFxcVFhYYHSggGBonGxMZIjEhJS0rLi4uFx8zODcsOCgtLisBCgoKDg0OGhAQGisdHxotLS0tLy0rLS0tLS0tLS0tKy0tKy03LTctLS0tLS0tLSstLS0tKy0tLS0rLSsrLSstK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQEDBAYHCAL/xABIEAABAwIDBQQFCAgBDQAAAAABAAIDBBEFEiEGBxMxQSJRYXEUMoGRoTRCUlNigrHRFSNDY3KSssEkFjNEZHN0g4Sis8Ph8P/EABgBAQEBAQEAAAAAAAAAAAAAAAACAQME/8QAIBEBAQACAgMBAAMAAAAAAAAAAAECESExAxJBUSKRsf/aAAwDAQACEQMRAD8A7SiIvOoREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEWLWYjBELzTRxA/WSNj/AKiEGUijaLaCimfw4qqCV55NZMx7jbnYA3PJSGcd494QfSIEQEREBERAREQEREBERAREQEREBERAREQEREBEVHuABJNgBck6AAdSgqtH2x3nUNEXRMPpVS3ThRnRp/eSWIb5anwWgbw958tQ99LQPMVMLsfM3R8p1BEZ+azx5lc3YwDkPzPmukw/Wbbbj28jFaon9f6LEeUcAym3jIe0ffbwWoyRhzi993uPNz3F5PmSvtF00wp+w4Pjux7eTmnI4aW0I1GhVswi+a7sx653X991cRBk0uJ1URBiqp47cssz7e69lsuD7zsYgPanbVM+jMwXt4PbZ1/O61FFmoO9bJ72qGpIiqB6FMdLSOvE4/ZksAPI2XQgb6jUFeQXNBFiLhbnu+3hT4fI2Kd75qF1mkEl7oPtR97ddW+7XnFw/G7ejEVqlqGSRtljcHskaHtcNQ5jhcEeBBV1c2iIiAiIgIiICIiAiIgIiICIiAiIgLku/XacsjZhkTrOqG8SYg2IgB7LPvEG/gPFdaXlnbXEHVGJ1cxJI47om+EcZyNA934q8JyVDtFhYcgqoqLqlVEVEFUREBERAVCF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"
//     },
//     {
//       chatRoomId: 2,
//       receiverNickName: "둥둥이",
//       receiverImageUrl:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-iv5skWFVbFRikvwhj1HX_xNL7weDnzk1H3ju7yZdow00ESUOpEp-HB9t8S1N0POiNo&usqp=CAU"
//     },
//     {
//       chatRoomId: 3,
//       receiverNickName: "긩",
//       receiverImageUrl:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQeP4iztHuT3gDrYQYyQOdnl1KrLc0aIny30YtGSgnz3WJKGkpCJHaYWVKhJroF-jFgBQ&usqp=CAU"
//     },
//     {
//       chatRoomId: 4,
//       receiverNickName: "룽룽",
//       receiverImageUrl:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCjU_AiQbnIljxPzNczSatV9Rda5TrpXNcuroUBIGaj7hMhWD6Ogl81NKdXLZ_ljjSYOc&usqp=CAU"
//     },
//     {
//       chatRoomId: 5,
//       receiverNickName: "도롱이",
//       receiverImageUrl:
//         "https://image.idus.com/image/files/39de64edfbf1423795cead9cfc85c7ad_100.jpg"
//     }
//   ],
//   size: 5,
//   hasNext: false
// };

const ChatRooms = () => {
  const { data, isError, isLoading } = useGetChatRooms();

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  if (!data) return <div>진행중인 채팅방이 없네요..</div>;
  return (
    <section>
      {data.content.map((content) => (
        <div
          className="relative w-[60%] h-full group"
          key={content.chatRoomId}>
          <div className="absolute top-0 bg-[#547d8d] rounded-full w-full h-full pr-2 transition-all duration-500 group-hover:scale-x-150 origin-left"></div>
          <div className="flex gap-2 items-center mb-4">
            <Avatar
              src={content.receiverImageUrl}
              rounded="full"
            />
            <span className="z-10">
              <strong className="text-[#96b7ff]">
                {content.receiverNickName}
              </strong>
              님과의 채팅방
            </span>
            <div className="absolute -right-[45%] opacity-0 group-hover:opacity-90 transition-opacity duration-500 text-black">
              <Link
                href={`/chatrooms/${content.chatRoomId}`}
                className="hover:bg-gray-500 px-2 rounded-xl">
                들어가기
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ChatRooms;
