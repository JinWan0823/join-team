export interface ClubDetailData {
  _id: number;
  clubName: string;
  category: string;
  images: string;
  location: string;
  information: string;
  joinedMember: number;
  maximumMember: number;
  activity?: ActivityInterface[];
  member: MemberData[];
}
export interface ActivityInterface {
  id: number;
  thumbnail: string;
  location: string;
  date: string;
  title: string;
  category: string;
}
export interface MemberData {
  memberId: string;
  thumbnail: string;
  name: string;
}

export interface FeedData {
  _id: string;
  content: string;
  hashTag: string;
  images: string[];
}

export interface ClubData {
  _id: number;
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
}
