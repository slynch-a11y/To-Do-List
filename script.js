if (window.localStorage.getItem("countMonday") == null) {
  window.localStorage.setItem("countMonday", 0);
}

// initially hide the Monday input
document.getElementById("monInputTask").style = "display: none";

// Monday 'Add task' button
document.getElementById("monAddTask").onclick = function () {
  document.getElementById("monAddTask").style = "display: none";
  document.getElementById("monInputTask").style = "display: block";
};

// Monday 'Submit' button
document.getElementById("monSubmitInput").onclick = function () {
  let mondayCount = window.localStorage.getItem("countMonday");
  let mondayInputValue =
    '<input type="checkbox" id="monInput' +
    mondayCount +
    '"' +
    '><label for="monInput' +
    mondayCount +
    '"' +
    ">" +
    document.getElementById("monInput").value +
    '</label> <button id="monDelete" onclick=getElementById("mon' +
    mondayCount +
    '"' +
    ').style="display:none";window.localStorage.removeItem("monday' +
    mondayCount +
    '"' +
    ");>Delete</button>";
  window.localStorage.setItem("monday" + mondayCount, mondayInputValue);

  mondayCount++;

  window.localStorage.setItem("countMonday", mondayCount);
  document.getElementById("monInput").value = null;
  document.getElementById("monInputTask").style = "display: none";
  document.getElementById("monAddTask").style = "display: block";
  location.reload();
};

let mondayTasks = Object.values(window.localStorage);
let mondayIds = Object.keys(window.localStorage);
for (let i = 0; i < mondayTasks.length; i++) {
  if (mondayIds[i].slice(0, 6) === "monday") {
    let div = document.createElement("div");
    div.setAttribute("id", "mon" + mondayIds[i].slice(-1));
    div.innerHTML = mondayTasks[i];
    document.getElementById("monMoreTasks").appendChild(div);
  }
}

// 'Clear week' button
document.getElementById("clearWeek").onclick = function () {
  window.localStorage.clear();
  location.reload();
};
