export const formatTime = (dateString: string) => {
  const date = new Date(dateString);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const isPM = hours >= 12;

  hours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const period = isPM ? "오후" : "오전";

  return `${period} ${hours}:${formattedMinutes}`;
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`; // YYYY-MM-DD 형식으로 변환
};

export const getTimeAgo = (timeStamp: string) => {
  const now = new Date();
  const messageTime = new Date(timeStamp);

  const kstNow = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  const kstMessageTime = new Date(messageTime.getTime() + 9 * 60 * 60 * 1000);

  const diffMs = kstNow.getTime() - kstMessageTime.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  if (diffHours < 1) {
    return `방금 전 대화`;
  } else if (diffHours < 24) {
    return `${diffHours}시간 전 대화`;
  } else {
    return `${diffDays}일 전 대화`;
  }
};
