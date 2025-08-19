import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import { useGeographic } from 'ol/proj'
import { OSM } from 'ol/source'
import { DragAndDrop } from 'ol/interaction'
import { GPX, GeoJSON, KML } from 'ol/format'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'

export function initMap(root: string) {
  useGeographic()

  const map = new Map({
    target: root,
    view: new View({ center: [10.4, 63.4], zoom: 12 }),
    layers: [new TileLayer({ source: new OSM() })],
  })

  let featureLayers: VectorLayer[] = []

  const interaction = new DragAndDrop({ formatConstructors: [GPX, GeoJSON, KML] })
  interaction.on('addfeatures', (ev) => {
    // Remove old features
    featureLayers.forEach((layer) => map.removeLayer(layer))
    featureLayers = []

    const vectorSource = new VectorSource({
      features: ev.features,
    })

    featureLayers.push(new VectorLayer({ source: vectorSource }))
    featureLayers.forEach((layer) => map.addLayer(layer))

    map.getView().fit(vectorSource.getExtent())
  })

  map.addInteraction(interaction)
}
