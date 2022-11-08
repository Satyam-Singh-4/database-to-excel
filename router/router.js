const router=require('express').Router()
const studentController=require('../controller/excelController')

router.post('/create',studentController.createStudent)
router.get('/get',studentController.createExcel)

module.exports=router