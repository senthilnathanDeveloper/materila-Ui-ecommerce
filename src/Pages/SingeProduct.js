import { Button, Card, Grid, InputLabel, Modal, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { postDataSuccess } from '../redux/slice'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const initialState = {
  brand:"",
  desicription:"",
  price:""
}
const SingeProduct = () => {
  const { id } = useParams()
  const { slice } = useSelector((state) => state?.data)
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const [form,setForm] = useState(initialState)
  const [errorObj, setErrorObj] = useState({})
  const {brand,description,price} = form;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getProducts = () => {
    let val = slice?.length ? slice?.filter((i => i?.id === id)) : "";
    return val?.map((item,index) => {
      return (
        <>
          <Grid container sx={{ mt: 5, ml: 5 }}>
            <Grid item xs={3}>
              <Card key={index}>
                <div className='header'>
                  <span>{item?.title}</span>
                  <span>{item?.id}</span>
                </div>

                <img src={item?.imageUrl} className="imageUrl" alt={item?.description} />

                <div className='description'>Description:</div>
                <div className='description-data'>{item?.description}</div>
                <div className='description'>Category:</div>
                <div className='description-data'>{item?.category}</div>
                <div className='description'>Brand:</div>
                <div className='description-data'>{item?.brand}</div>
                <div className='description'>Price:</div>
                <div className='description-data'>{item?.price}</div>
                <Grid item lg={12} align="right" sx={{mr:3,mt:3,mb:3}}>
                <Button variant='contained'onClick={handleOpen}>Edit</Button>
                </Grid>
              </Card>
              
            </Grid>
          </Grid>
        </>
      )
    })

  }
  useEffect(() => {
    if(id){
      const singleProd = slice?.find((item) => item?.id === id)
      setForm({...singleProd})
    }
  },[id])
 const handleChange = (e) => {
  let errors = { ...errorObj }
  let {name,value} = e.target
  errors[e.target.name] = e.target.value ? "":`Please enter ${name}` 
  setForm({
    ...form,
    [name]:value
  })
  setErrorObj({...errors})
 }

 const handleSubmit = (e,id) => {
  e.preventDefault()
  if(validate()){
    return
  }
  if(brand && description && price){
    dispatch(postDataSuccess(form))
    setOpen(false)
  }

 }

 const validate = () => {
  let hasError = false;
  let errors = {...errorObj}
  if(!form?.brand){
    errors[`brand`] = "Product is Required";
    hasError = true
  }

  if(!form?.description){
    errors[`description`] = "Description is Required";
    hasError = true
  }

  if(!form.price){
    errors[`price`] = "Price is Required";
    hasError = true
  }
  
  setErrorObj({...errors})
  return hasError;

}

  return (
    <>
      {getProducts()}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{background:"white"}}>
          <Typography id="modal-modal-title" variant="h6" component="h2" align='center'>
              Edit
          </Typography>
          
          <form onSubmit={handleSubmit}>
          <InputLabel mt={2} align="left" className="loginlabel">
              Product
            </InputLabel>
            <TextField
            className='input-control'
            size='small'
            name="brand"
            type="text"
            onChange={handleChange}
            value={brand || ""}
            />
             {errorObj && errorObj["brand"] && <span style={{color:"red"}}>{errorObj["brand"]}</span>}
            <InputLabel sx={{mt:4}} align="left" className="loginlabel">
              Description
            </InputLabel>
            <TextField
            className='input-control'
            size='small'
            name="description"
            type="text"
            onChange={handleChange}
            value={description || ""}
            />
             {errorObj && errorObj["description"] && <span style={{color:"red"}}>{errorObj["description"]}</span>}
            <InputLabel sx={{mt:4}} align="left" className="loginlabel">
              Price
            </InputLabel>
            <TextField
            className='input-control'
            size='small'
            name="price"
            type="number"
            onChange={handleChange}
            value={price || ""}
            />
             {errorObj && errorObj["price"] && <span style={{color:"red"}}>{errorObj["price"]}</span>}
            <Button color="primary" type="submit" variant="contained" className="btn btn-primary" sx={{mt:4}}>
              Update
            </Button>
            </form>
        </Box>
      </Modal>
    </>
  )
}

export default SingeProduct