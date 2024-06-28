const employee = [

    {id: 1, Emp_name:"John" ,designation:"QA"},
    {id: 2, Emp_name:"Doe" ,designation:"FSD"},
    {id: 3, Emp_name:"Adam" ,designation:"DevOps Engineer"},
    {id: 4, Emp_name:"Stark" ,designation:"UI/UX"},
    {id: 5, Emp_name:"Michael" ,designation:"Solition Architect"},
]

//getcall or get method

export const getEmpoyleeDetails = (req,res)=>{
  res.status(200).json({data:employee})
}
    
//get by id

export const getEmpoyleeDetailID = (req,res)=>{
   
    const empId = req.params.id
    console.log(empId);

    const empDetail = employee.find((ele)=>ele.id == empId)
    if(!empDetail){
        return res.status(404).send("Employee Not Fount")
    }

    res.status(200).json({message:"Employee Details",data:empDetail})
}

// create employee or post method

export const createemployee = (req,res)=>{
   const {Emp_name ,designation} =  req.body
   const newEmployee = {
    id:employee.length + 1,
    Emp_name:Emp_name,
    designation:designation
   }

   employee.push(newEmployee)
   
   res.status(200).json({message:"Empolyee created successfully",data:newEmployee})
}


// Edit employee detaile

export const editeEmployee = (req,res)=>{

    const empId = req.params.id
    const {Emp_name ,designation}=req.body
    const index = employee.findIndex(ele=>ele.id == empId)
    if(index === -1){
        return res.status(404).send("Employee Not Foundd ")
    }
    
     employee[index].Emp_name=Emp_name
     employee[index].designation=designation

    res.status(200).json({message:"Employee Upadete successfully",data:employee[index]})
}

// Delete employee or delete method

export const deleteEmployee=(req,res)=>{
    const empId = req.params.id
    const index = employee.findIndex((ele)=>ele.id == empId)
    if(index == -1){
        return res.status(404).send("Employee Not Found")
    }
    employee.splice(index,1)
    res.status(200).json({message:"Employee Data deleted Successfully"})
}
