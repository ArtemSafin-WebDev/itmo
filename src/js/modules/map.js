export default () => {
  const mapElements = Array.from(document.querySelectorAll(".js-map"));
  mapElements.forEach((mapElement) => {
    if (!mapElement) return;
    ymaps.ready(initMap);

    function initMap() {
      const pin = {
        preset: 'islands#icon',
        iconColor: "red",
      };

      const coords = mapElement.hasAttribute("data-coords")
        ? mapElement.getAttribute("data-coords").split(",")
        : [];

      const center = mapElement.hasAttribute("data-center")
        ? mapElement.getAttribute("data-center").split(",")
        : [];

      console.log("Coords", coords);

      let mapInstance = new ymaps.Map(mapElement, {
        center: center,
        zoom: 14,
        controls: [],
      });

      let zoomControl = new ymaps.control.ZoomControl({
        options: {
          size: "small",
          position: {
            right: 20,
            bottom: 60,
          },
        },
      });
      mapInstance.controls.add(zoomControl);

      mapInstance.behaviors.disable("scrollZoom");

      let objectManager = new ymaps.ObjectManager({
        clusterize: false,
        clusterHasBalloon: false,
        geoObjectOpenBalloonOnClick: false,
      });
      mapInstance.geoObjects.add(objectManager);

      let objectToAdd = {
        id: coords.join(","),
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: coords,
        },
        options: {
          ...pin,
        },
      };
      objectManager.add(objectToAdd);
    }
  });
};
