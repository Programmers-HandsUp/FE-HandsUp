export interface ChatRoomsResponse {
  content: ChatRoomInfom[];
  size: number;
  hasNext: boolean;
}

export interface ChatRoomInfom {
  chatRoomId: number;
  receiverNickName: string;
  receiverImageUrl: string;
}
