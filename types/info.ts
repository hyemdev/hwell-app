//  위도 경도 데이터 타입
type Lat = number;
type Lng = number;
export type Cordinates = [Lat, Lng];

// json 불러올 데이터 타입
export type Info = {
  cordinates: Cordinates;
};
