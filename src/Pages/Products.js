import { Card, Grid } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css'

const Products = () => {
    const { slice } = useSelector((state) => state.data)
    return (
        <>
            {slice?.length ? slice.map((item, i) => {
                return (
                    <>
                        <Link to={`/list/${item?.id}`} style={{ textDecoration: "none" }} >
                            <Grid container sx={{ mt: 5, ml: 5 }}>
                                <Grid item xs={3} >
                                    <Card key={i}>
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

                                    </Card>
                                </Grid>
                            </Grid>
                        </Link>
                    </>
                )
            }) : "No data availabe"}
        </>
    )
}

export default Products