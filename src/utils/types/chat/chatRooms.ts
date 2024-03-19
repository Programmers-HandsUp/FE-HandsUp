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

export interface ChatContentResponse {
  content: ChatRoomContent[];
  size: number;
  hasNext: boolean;
}

export interface ChatRoomContent {
  chatRoomId: number;
  senderId: number;
  content: string;
  createdAt: string;
}
