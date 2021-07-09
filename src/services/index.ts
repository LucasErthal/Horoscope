import api from "./api";

export const GetHoroscope = async(date: string) => {
  return await api.get("/horoscope/test", {
    params: {
      dt: date
    }
  });
}