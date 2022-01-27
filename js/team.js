$.getJSON("js/people.json", function(data) {

  const execData = data["exec"];
  const consultantData = data["members"];

  for (var i = 0; i < execData.length; i++) {
    document.getElementById("execBios").innerHTML += format(execData[i]);
  }

  for (var i = 0; i < consultantData.length; i++) {
    document.getElementById("consultantBios").innerHTML += format(consultantData[i]);
  }

});


function format(data) {
  const name = data["name"];
  const title = data["title"];
  const img = data["img"];
  const year = data["year"];
  const linkedin = data["linkedin"];

  return `<div class="col-6 col-md-4 col-lg-3 my-2">
  <div class="card hoverable h-100">
      <div class="my-3">
          <a href="${linkedin}" target="_blank" rel="noopener">
              <h5 class="card-title m-1 p-0">${name}</h5>
          </a>
          <h6 class="mb-1">${title}</h6>
      </div>
      <div class="mx-1">
          <div class="align-self-center mb-3 m-auto">
              <img class="card-img-top thumbnail hoverable img-fluid" src="assets/headshots/${img}">
          </div>
          <div class="card-body p-1">
              <p class="card-text">
                  <li>Class of ${year}</li>
                  <li><a href="${linkedin}" target="_blank" rel="noopener">LinkedIn</a>
                  </li>
              </p>
          </div>
      </div>
  </div>
</div>`

}