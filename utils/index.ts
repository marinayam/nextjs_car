import { CarProps, FilterProps } from "@types";

export const calculateCarRent = (city_kml: number, year: number) => {
  const basePricePerDay = 5000; //  基本的なレンタル料金
  const kiloFactor = 12; // キロごと追加率
  const ageFactor = 0.08; // 使用年数に応じた追加率

  // 走行距離と使用年数に応じた追加率を計算
  const mileageRate = city_kml * kiloFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // １日のレンタル料金を計算
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  // 現在のparamsを取得
  const searchParams = new URLSearchParams(window.location.search);

  // search parameter の値を設定
  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // search parameter の値を設定
  const newSearchParams = new URLSearchParams(window.location.search);

  // search parameter を削除
  newSearchParams.delete(type.toLocaleLowerCase());

  // 削除された検索パラメータを含んだ更新されたURLのパス名を設定
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // API request設定
  const headers: HeadersInit = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  // API request設定
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 