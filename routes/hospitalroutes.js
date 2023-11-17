const express=require('express');
const router=express.Router();

const array1=[{ "name":"City Hospital",
"patientCount":200,
"location":"Ernakulam"
},
{
"name":"Community General Hospital",
"patientCount":100,
"location":"Edapally"
},
{
"name":"Central Medical Center",
"patientCount":150,
"location":"Palarivattom" }]

//GET Method
router.get('/',(req,res)=>{
    res.send(array1);
});

// POST operation - Add a new hospital
router.post('/', (req, res) => {
    const newHospital = req.body;
    array1.push(newHospital);
    console.log('New Hospital Added:', newHospital);
    res.send(newHospital);
  });
  
  // PUT operation - Update hospital data
router.put('/:name', (req, res) => {
    const hospitalName = req.params.name;
    const updatedHospital = req.body;
  
    const index = array1.findIndex(hospital => hospital.name === hospitalName);
    if (index !== -1) {
      array1[index] = updatedHospital;
      res.send(updatedHospital);
    } else {
      res.status(404).send({ error: 'Hospital not found' });
    }
  });


  // DELETE operation - Remove a hospital
router.delete('/:name', (req, res) => {
    const hospitalName = req.params.name;
    
    array1 = array1.filter(hospital => hospital.name !== hospitalName);
    res.json({ message: 'Hospital deleted' });
  });
  
  

module.exports=router;
