//we have to provide controller to CRUD methods we will do that and apart from that we will see
// how can we provide labels
//we are dealing with mongo db and mongoose and to deal with promises we will use async await 
//to avoid try catch block we will use express-async-handler
const asynchandler=require("express-async-handler");


//@desc get Contacts
//@route GET /api/getContact
//@access public

const getContacts=asynchandler(async (req, res)=>{
    res.status(200).json(
        {message:"All contacts"}
    );
})


//@desc get Contacts
//@route GET /api/getContact/:id
//@access public

const getContact=asynchandler(async (req, res)=>{
    res.status(200).json(
        {message:`unique contacts::${req.params.id}`}
    );
})


//@desc get Contacts
//@route PUT /api/getContact/:id
//@access public

const updateContacts=asynchandler(async (req, res)=>{
    res.status(200).json(    
        {message:"Update contacts "+req.params.id}
    );
   
});

//@desc get Contacts
//@route DELETE /api/getContact/:id
//@access public

const deleteContact=asynchandler(async (req, res)=>{
    res.status(200).json(
        {message:`delete Contacts:${req.params.id}`}
    );
});

//@desc get Contacts
//@route POST /api/getContact
//@access public

const createContact=asynchandler( async (req, res)=>{
    console.log(req.body); //this will show undefined if we are  not using any body parser
    const {name, email}=res;
    if(!name || !email){
        res.status(400);
        throw new Error("All field is mandatory");
    }

    res.status(201).json(//status code is 201 while creating
        {message:"Create contacts"}
    );

})




module.exports={getContacts, getContact, updateContacts, deleteContact, createContact}