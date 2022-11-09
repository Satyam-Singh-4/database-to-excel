const router=require('express').Router()
const studentController=require('../controller/excelController')
const controller1=require('../controller/controller')

router.post('/create',studentController.createStudent)
router.get('/get',studentController.createExcel)
router.get('/get1',controller1.exportStudent)

module.exports=router