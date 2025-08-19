import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import { useGeographic } from 'ol/proj'
import { OSM } from 'ol/source'

export function initMap(root: string) {
  useGeographic()

  const map = new Map({
    target: root,
    view: new View({ center: [10.4, 63.4], zoom: 12 }),
    layers: [new TileLayer({ source: new OSM() })],
  })

}
