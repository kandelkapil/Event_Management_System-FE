export const userResponseToStateMapper = (data: any) => {
  return {
    username: data?.username || "",
    firstName: data?.first_name || "",
    lastName: data?.last_name || "",
    phone: data?.phone_number || "",
    followers: data?.followers || 0,
    description: data?.description || "",
    address: data?.address || "",
    profile_pic: data.profile_pic
      ? `${import.meta.env.VITE_BASE_URL}${data?.profile_pic}`
      : "",
  };
};
