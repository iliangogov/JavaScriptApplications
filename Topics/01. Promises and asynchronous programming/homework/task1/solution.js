let btn = document.getElementById("btn");
 btn.addEventListener('click', flow);

    function getCurrentLocation() {
         return new Promise(function(resolve, reject){
             navigator.geolocation.getCurrentPosition(
                 function (position) {
                     resolve(position);
                 },
                 function (error) {
                     reject(error);
                 }
             )
         });
    }

    function filterDesiredPropertys(obj) {
        if (obj.coords) {
            return {
        lat:obj.coords.latitude,
        lng:obj.coords.longitude
            }
        } else {
            throw new Error("object's coordinates are not provided");
        }
    }

    function getImageOfCurrentLocation(coordsObj) {
        let image = document.createElement('img');
        let imageSource = 'https://maps.googleapis.com/maps/api/staticmap?center='+coordsObj.lat+','+coordsObj.lng+'&zoom=14&size=400x400&key=AIzaSyCvku-MmBxsweVRnwoPW_0mAYDnn_IRmvg';
        let wrapper = document.getElementById('wrapper');

        image.setAttribute('src', imageSource);
        wrapper.appendChild(image);
    }

    function flow() {
        getCurrentLocation().
        then(filterDesiredPropertys).
        then(getImageOfCurrentLocation);
    }



