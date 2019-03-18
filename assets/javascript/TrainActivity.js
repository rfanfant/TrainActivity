var config = {
    apiKey: "AIzaSyAKTHfujsJNq7tdcJtF-Zcaf0opqcsl_7o",
    authDomain: "classtest-29506.firebaseapp.com",
    databaseURL: "https://classtest-29506.firebaseio.com",
    projectId: "classtest-29506",
    storageBucket: "classtest-29506.appspot.com",
    messagingSenderId: "878691640453"
};
firebase.initializeApp(config);

var database = firebase.database();


database.ref().on("value", function(snapshot) {
    //Get each employee and construct the table
    for (let i = 0; i < snapshot.val().length; i++) {
        createRow(snapshot.val()[i]);
    }



}, function(errorObject) { console.log(errorObject.code) });

$("#submit-button").on("Click", function(event) {
    event.preventDefault();
    $("#").append("<div>Yooo</div>")


    createRow({

        name: "Carl",
        role: "TA",
        startDate: 11111111,
        monthlyRate: 50
    });


    // var employeeName
    // var employeeRole
    // var
});

function createRow(data) {
    // let row = $("<tr>");
    let nameTD = $("<td>");
    nameTD.text(data.name);
    let roleTD = $("<td>");
    roleTD.text(data.role);
    let startDateTD = $("<td>");
    //Format this to a date
    startDateTD.text(data.startDate);
    let monthsWorkedTD = $("<td>");
    let monthsWorked = moment(data.startDate).diff(moment(), "months");
    monthsWorkedTD.text(monthsWorkedTD)
    let monthlyRateTD = $("<td>");
    monthlyRateTD.text(data.monthlyRate);
    let totalBilledTD = $("<td>");
    totalBilledTD.text(monthsWorked * data.monthlyRate);
    var row = $("<tr>").append(
        $("<td>").text(nameTD),
        $("<td>").text(roleTD),
        $("<td>").text(startDateTD),
        $("<td>").text(monthsWorkedTD),
        $("<td>").text(monthlyRateTD),
        $("<td>").text(totalBilledTD)
    );
    // row.append(nameTD);
    // row.append(roleTD);
    // row.append(startDateTD);
    // row.append(monthsWorkedTD);
    // row.append(monthlyRateTD);
    // row.append(totalBilledTD);
    $("#table-body").html("<tr><th>Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaah!</th>,/tr>");
    $("#table-bodyy").append(row);
    console.log(row);
    console.log($("#table-body"));
}

createRow({

    name: "Carl",
    role: "TA",
    startDate: 11111111,
    monthlyRate: 50
});


// <!-- Script -->

// <script>
  // Assume the following situations.

  // (TEST 1)
  // First Train of the Day is 3:00 AM
  // Assume Train comes every 3 minutes.
  // Assume the current time is 3:16 AM....
  // What time would the next train be...? (Use your brain first)
  // It would be 3:18 -- 2 minutes away

  // (TEST 2)
  // First Train of the Day is 3:00 AM
  // Assume Train comes every 7 minutes.
  // Assume the current time is 3:16 AM....
  // What time would the next train be...? (Use your brain first)
  // It would be 3:21 -- 5 minutes away


  // ==========================================================

  // Solved Mathematically
  // Test case 1:
  // 16 - 00 = 16
  // 16 % 3 = 1 (Modulus is the remainder)
  // 3 - 1 = 2 minutes away
  // 2 + 3:16 = 3:18

  // Solved Mathematically
  // Test case 2:
  // 16 - 00 = 16
  // 16 % 7 = 2 (Modulus is the remainder)
  // 7 - 2 = 5 minutes away
  // 5 + 3:16 = 3:21

  // Assumptions
  var tFrequency = 3;

  // Time is 3:30 AM
  var firstTime = "03:30";

  // First Time (pushed back 1 year to make sure it comes before current time)
  var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
  console.log(firstTimeConverted);

  // Current Time
  var currentTime = moment();
  console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

  // Difference between the times
  var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
  console.log("DIFFERENCE IN TIME: " + diffTime);

  // Time apart (remainder)
  var tRemainder = diffTime % tFrequency;
  console.log(tRemainder);

  // Minute Until Train
  var tMinutesTillTrain = tFrequency - tRemainder;
  console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

  // Next Train
  var nextTrain = moment().add(tMinutesTillTrain, "minutes");
  console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
// </script>