declare module '@pix4d/shp-write' {
  export interface ShpWriteOptions {
    folder?: string;
    prj?: string;
    types: {
      point: string;
      polygon: string;
      linestring: string;
    };
  }

  export function zip(geojson: GeoJSON.FeatureCollection<any>, options?: ShpWriteOptions): string;

  export function download(
    geojson: GeoJSON.FeatureCollection<any>,
    options?: ShpWriteOptions,
  ): void;
}
