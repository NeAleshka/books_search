import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import {Box} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";
import {booksSearchAPI} from "../api";


const HeaderBG = styled.div`
  margin-top: 40px;
  background: url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1453&q=80");
  text-align: center;
  height: 400px;
`




export const Header = () => {
    const [search,setSearch]=useState('')


    return (
        <HeaderBG>
            <h1 style={{color:'white',fontWeight:'700',paddingTop:"100px"}}>Search for Books</h1>
            <Box sx={{marginTop: '40px', display: 'flex',textAlign:'center',justifyContent:'center',height:'100px'}}>
                <TextField
                    sx={{backgroundColor: 'white', marginTop: '80px', height: '50px', width: '300px', border: 'none'}}
                    variant={'filled'}
                    label={'Search'}
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />
                <SearchIcon onClick={()=>booksSearchAPI.getBooks(search)} sx={{color:'white',marginTop:"90px",fontSize:'30px'}}/>
            </Box>
        </HeaderBG>
    )
}

