$.getJSON("js/people.json", function(data) {

  const execData = data["exec"];
  const consultantData = data["consultants"];

  for (var i = 0; i < execData.length; i++) {
    document.getElementById("execBios").innerHTML += format(execData[i]);
  }

  for (var i = 0; i < consultantData.length; i++) {
    document.getElementById("consultantBios").innerHTML += format(consultantData[i]);
  }

});

function formatMajors(majors) {
  if (majors.length == 2) {
    return  `<li><span class="font-weight-bold"> Majors:</span> ${majors[0]} and ${majors[1]}</li>`
  } else {
    return `<li><span class="font-weight-bold"> Major:</span> ${majors[0]}</li>`
  }
}

function format(data) {
  const name = data["name"];
  const title = data["title"];
  const img = data["img"];
  const year = data["year"];
  const majors = data["majors"];
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
                  ${formatMajors(majors)}
                  <li><a href="${linkedin}" target="_blank" rel="noopener">LinkedIn</a>
                  </li>
              </p>
          </div>
      </div>
  </div>
</div>`

}