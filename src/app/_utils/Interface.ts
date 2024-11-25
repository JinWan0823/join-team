export interface ClubDetailData {
  _id: string;
  clubName: string;
  category: string;
  images: string;
  location: string;
  information: string;
  joinedMember: number;
  maximumMember: number;
  activity: ActivityInterface[];
  member: MemberProps[];
  sido: string;
  gugun: string;
  master: string;
}

export interface MemberProps {
  memberId: string;
  name: string;
}

export interface ActivityInterface {
  _id: string;
  images: string;
  location: string;
  date: string;
  activityName: string;
  category: string;
  content: string;
}
export interface MemberData {
  _id: string;
  thumbnail: string;
  name: string;
  interestList: string;
}

export interface FeedData {
  _id: string;
  content: string;
  hashTag: string;
  images: string[];
  username: string;
  thumbnail: string;
  date: string;
  likedBy: string[];
}

export interface ClubData {
  _id: string;
  clubName: string;
  category: string;
  thumbnail: string;
  location: string;
  information: string;
  joinedMember: number;
  maximumMember: number;
}

export interface UserData {
  _id: string;
  username: string;
  name: string;
  thumbnail: string;
  introComment: string;
  interestList: string;
  feedCount: number;
  followers: string[];
  followings: string[];
}

export interface ChatListData {
  _id: string;
  clubTitle: string;
  member: string[];
  clubId: string;
  thumb: string;
  date: string;
  lastMessageTime: string;
}
