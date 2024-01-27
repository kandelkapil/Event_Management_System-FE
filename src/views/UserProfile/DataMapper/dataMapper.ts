export const userResponseToStateMapper = (data: any) => {
    console.log(data,'data data');
    
  return {
    name: data?.username || "",
    phone: data?.phone_number || "",
    followers: data?.followers || 0,
    description: data?.description || "",
    address: data?.address || "",
    profile_pic: data.profile_pic
      ? `${import.meta.env.VITE_BASE_URL}${data?.profile_pic}`
      : '',
  };
};
