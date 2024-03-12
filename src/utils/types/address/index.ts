export interface AddrType {
  meta: {
    total_count: number;
    pageable_count: number;
    is_end: boolean;
  };
  documents: Addr[];
}

interface Addr extends Position {
  address_name: string;
  address_type: "REGION" | "ROAD" | "REGION_ADDR" | "ROAD_ADDR";
  address: RegionAddress;
  road_address: RoadAddress;
}

interface RegionAddress extends BaseAddress, Position {
  region_3depth_h_name: string;
  h_code: string;
  b_code: string;
  mountain_yn: "N" | "Y";
  main_address_no: string;
  sub_address_no: string | "";
}

interface RoadAddress extends BaseAddress, Position {
  road_name: string;
  underground_yn: "N" | "Y";
  main_building_no: string;
  sub_building_no: string | "";
  building_name: string;
  zone_no: string;
}

interface BaseAddress extends Position {
  address_name: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
  region_3depth_h_name: string;
}

interface Position {
  x: string;
  y: string;
}
