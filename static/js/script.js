$(function () {
  $('.showMoreSkillButton').click(function () {
    const skillElementsContainer = $(this).parent().parent().next();
    if (skillElementsContainer.css("display") === "none") {
      $(this).css({ "transform": "rotate(-45deg)" });
      skillElementsContainer.addClass("skillTypeElementsContainerAnimationClass");
    } else {
      skillElementsContainer.removeClass("skillTypeElementsContainerAnimationClass");
      $(this).css({ "transform": "rotate(0deg)" });
    }
  })
})


// scrollIndicator starts

window.addEventListener('scroll', moveScrollIndicator);

const scrollIndicatorElt = document.getElementById('scrollIndicator');
const maxHeight = window.document.body.scrollHeight - window.innerHeight;

function moveScrollIndicator(e) {
  const percentage = ((window.scrollY) / maxHeight) * 100;

  scrollIndicatorElt.style.width = percentage + '%';
}

// scrollIndicator ends


// distance compute starts
var distanceDeltaDivContainerElement = document.getElementById("distanceDeltaDivContainer");

var my_coordinates = {
  lat: 12.908458,
  lng: 77.649244
}

var earthRadius = 6371.0710;

function calculateDistance(posA, posB) {
  var lat = posB.lat - posA.lat;
  var lon = posB.lng - posA.lng;

  var disLat = (lat * Math.PI * earthRadius) / 180;
  var disLon = (lon * Math.PI * earthRadius) / 180;

  var ret = Math.pow(disLat, 2) + Math.pow(disLon, 2);
  ret = Math.sqrt(ret);

  return ret;
}


var get_distance_delta = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        // console.log("pos found: ", pos);

        var distanceDelta = calculateDistance(pos, my_coordinates);
        distanceDeltaDivContainerElement.innerHTML = "You're just <b id='distanceDeltaBold'>" + distanceDelta.toFixed(2) + "</b> Kms from me!";
      },
      () => {
        handleLocationError(true);
      }
    );
  } else {
    handleLocationError(false);
  }
  // });
}

function handleLocationError(browserHasGeolocation) {
  browserHasGeolocation ? distanceDeltaDivContainerElement.innerText = "Uh oh, couldn't get the location permission! Allow location permission to see a magic." : distanceDeltaDivContainerElement.innerText = "Uh oh, your browser doesn't support geolocation."
}

setTimeout(() => {
  get_distance_delta();
}, 2500)


// distance compute ends