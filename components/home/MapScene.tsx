import React from 'react';
import Map from './Map';
import Markers from './Markers';
import useMap from '@/hooks/useMap';
import { NaverMap } from '@/types/map';

// 마커를 그려야 한다
// 마커는 naver.map 객체에 그려야한다 (전역 참고)

const MapScene = () => {
  const { initializeMap } = useMap();
  const onLoadMap = (map: NaverMap) => {
    console.log(' 로드 완료 ');
    initializeMap(map);
  };
  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  );
};

export default MapScene;
