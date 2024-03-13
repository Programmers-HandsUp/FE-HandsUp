export interface ChatRoomsResponse {
  content: ChatRoomInfo[];
  size: number;
  hasNext: boolean;
}

export interface ChatRoomInfo {
  chatRoomId: number;
  receiverNickName: string;
  receiverImageUrl: string;
}
