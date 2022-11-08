const Student = require("../entity/Student");
const Mark = require("../entity/Marks");
const XLSX = require("xlsx");
const path = require("path");

//Create student

const createStudent = async (req, res) => {
  try {
    const resp = await Student.create(req.body, {
      include: {
        model: Mark,
      },
    });
    res.status(200).json({
      Response: resp,
      message: "successfully saved",
    });
  } catch (error) {
    res.status(400).json({
      Response: error,
      message: "Unable to save it",
    });
  }
};

//Getting data from database and write into excel file

const createExcel = async (req, res) => {
  try {
    //file name
    const fileName = "FILE_NAME";
    const filePath = "./FILE_NAME.xlsx";
    // Create a new blank XLSX Document
    let workbook = XLSX.utils.book_new();

    // //Column
    // const columnsName=[
    // 	{Student_name,
    // 	S_Mark1,
    // 	S_Mark2}
    // ]

    // The data that will be added to the sheet
    var dataForSheet = [{}];
    //Fetching data from database
    dataForSheet = await Student.findAll({
      include: {
        model: Mark,
      },
    });

    console.log(dataForSheet);

    const data = dataForSheet.map((user) => {
      return [user.s_name, user.Mark.mark1, user.Mark.mark2];
    });

    console.log(data);

    // const dataForExcel=[
    // 	{columnsName,
    // 	data}
    // ]

    // Convert the Array data to a sheet
    let sheetData = XLSX.utils.json_to_sheet(data);
    console.log("sheet data");
    console.log(sheetData);

    // Add the sheet to the workbook

    XLSX.utils.book_append_sheet(workbook, sheetData, "Sheet 1", fileName);

    // Save the XLSX File.
    XLSX.writeFile(workbook, path.resolve(filePath));
    res.status(200).json({
      Response: dataForSheet,
      message: "Successfully stored in excel file",
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

module.exports = {
  createStudent,
  createExcel,
};
