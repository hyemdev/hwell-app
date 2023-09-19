// 위.경도 정보를 여러 컴포넌트에서 재활용하여 관리하는 코드(hook)

// useCallback : 함수를 한번만 만들고, 재랜더링이 되더라도 새로 생성을 안함.
// 성능최적화 : 초반에는 적용하지 않고 테스트 중에 고려를 해보자.
import { Info } from '@/types/info';
import { useCallback } from 'react';
// 위.경도 정보를 전역 state로 보관한다.
// SWR을 활용한다.
// SWR을 활용해서 위.경도 데이터를 전역에 보관한다
// mutate : SWR에 쓴다(저장)
import { mutate } from 'swr';
// SWR의 KEY는 문자열 : 문자열의 장소에 전역데이터를 보관한다
export const INFO_KEY = '/infos';

const useInfo = () => {
  // 초기 위경도 데이터를 전달받아 swr키 INFO_KEY에 보관한다.
  // infos 매개변수는 [위도, 경도], [위도, 경도] 이런식으로 된 배열임.

  // useCallback(함수, [])
  const initializeInfos = useCallback((infos: Info[]) => {
    mutate(INFO_KEY, infos);
  }, []);
  return { initializeInfos };
};
export default useInfo;
